// 字符串
// 对应的oc语法：NSString *str = [NSString stringWithString:@"hi with!"];
var str = ObjC.classes.NSString.stringWithString_("hi wit!")  
args[2] = str  // 修改入参 

// 数组
// 对应的oc语法：NSMutableArray array = [NSMutablearray array];
var array = ObjC.classes.NSMutableArray.array();
array.addObject_("item1");  // 对应的oc语法：[array addObject:@"item1"];
array.addObject_("item2");  // 对应的oc语法：[array addObject:@"item2"];
args[2] = array; // 修改入参

// 字典
// 对应的oc语法:NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
var dictionary = ObjC.classes.NSMutableDictionary.dictionary();
dictionary.setObject_forKey_("value1", "key1"); // 对应的oc语法：[dictionary setObject:@"value1" forKey:@"key1"]
dictionary.setObject_forKey_("value2", "key2"); // 对应的oc语法：[dictionary setObject:@"value2" forKey:@"key2"]
args[2] = dictionary; // 修改入参

// 字节
// 对应的oc语法：NSMutableData *data = [NSMutableData data];
var data = ObjC.classes.NSMutableData.data();
// 获取一个字符串。 对应的oc语法：NSString *str = [NSString stringWithString:@"hi with!"];
var str = ObjC.classes.NSString.stringWithString_("hi wit!")
// 将str转换为data,编码为utf-8。对应的oc语法：NSData *subData = [str dataUsingEncoding:NSUTF8StringEncoding];
var subData = str.dataUsingEncoding_(4);  
// 将subData添加到data。对应的oc语法：[data appendData:subData];
data.appendData_(subData);
args[2] = data; // 修改入参


isData = true;
// 更多数据类型：https://developer.apple.com/documentation/foundation
var before = args[2];
// 注意，日志输出请直接使用log函数。不要使用console.log()
if (isData) {
    // 打印byte对象
    var after = new ObjC.Object(args[2]); // 打印NSData
    var outValue = after.bytes().readUtf8String(after.length()) // 将data转换为string
    log(`before:=${before}=`);
    log(`after:=${outValue}=`);
} else {
    // 打印字符串、数组、字段
    var after = new ObjC.Object(args[2]); // 打印出来是个指针时，请用该方式转换后再打印
    log(`before:=${before}=`);
    log(`after:=${after}=`);
}
// 如果是自定义对象时，使用以上方法无法打印时，请使用以下方法：
var customObj = new ObjC.Object(args[0]); // 自定义对象
// 打印该对象所有属性
var ivarList = customObj.$ivars;
for (key in ivarList) {
    log(`key${key}=${ivarList[key]}=`);
}

// 打印该对象所有方法
var methodList = customObj.$methods;
for (var i=0; i<methodList.length; i++) {
 log(`method=${methodList[i]}=`);
}

onLeave(log, retval, state) {
    // 字符串
    // 对应的oc语法：NSString *str = [NSString stringWithString:@"hi with!"];
    var str = ObjC.classes.NSString.stringWithString_("hi wit!")  
    retval.replace(str)  // 修改返回值
    var after = new ObjC.Object(retval); // 打印出来是个指针时，请用该方式转换后再打印
    log(`before:=${retval}=`);
    log(`after:=${after}=`);

}

this.backtrace = '<method> called from:\n' + Thread.backtrace(this.context, Backtracer.ACCURATE) .map(DebugSymbol.fromAddress).join('\n') + '\n';

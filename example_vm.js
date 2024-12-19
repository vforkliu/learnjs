// const ivm = require('isolated-vm');
import ivm from 'isolated-vm';

console.log('Hello, isolated-vm!');
// 创建一个新的 isolate
// const isolate = new ivm.Isolate({ memoryLimit: 128 }); // 内存限制为 128 MB

// (async () => {
//   // 创建上下文
//   const context = await isolate.createContext();

//   // 获取全局对象（类似于 Node.js 中的 global）
//   const jail = context.global;

//   // 设置全局对象的某些属性（如 globalThis）
//   await jail.set('global', jail.derefInto());

//   console.log('Context created');
// })()

(async () => {
  const isolate = new ivm.Isolate({ memoryLimit: 128 });
  const context = await isolate.createContext();
  
  const result = await context.eval("1 + 2"); // 在沙盒中执行
  console.log("Result:", result); // 输出: 3
})();

// (async () => {
//   const isolate = new ivm.Isolate({ memoryLimit: 128 });
//   const context = await isolate.createContext();
  
//   const result = await context.evalClosure(
//     `function add(a, b) { return a + b; } add($0, $1);`,
//     [3, 4], // 传入参数
//     { reference: true }
//   );
//   console.log("Result:", result); // 输出: 7
// })();

// (async () => {
//   const isolate = new ivm.Isolate({ memoryLimit: 128 });
//   const context = await isolate.createContext();
//   const jail = context.global;

//   // 设置变量
//   await jail.set('x', 42);
//   const result = await context.eval('x + 8');
//   console.log('Result:', result); // 输出: 50
// })();

// (async () => {
//   const isolate = new ivm.Isolate({ memoryLimit: 128 });
//   const context = await isolate.createContext();

//   const result = await context.eval(`
//     (() => {
//       return { hello: "world" };
//     })()
//   `);

//   console.log(result); // 输出: { hello: "world" }
// })();

// (async () => {
//   const isolate = new ivm.Isolate({ memoryLimit: 128 });
//   const context = await isolate.createContext();
//   const jail = context.global;

//   // 创建外部函数
//   const logFunction = new ivm.Reference((message) => {
//     console.log('From isolate:', message);
//   });

//   // 将函数注入到沙盒
//   await jail.set('log', logFunction);

//   // 执行代码
//   await context.eval(`
//     log.applySync(undefined, ["Hello from sandbox!"]);
//   `);
// })();
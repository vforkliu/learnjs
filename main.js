import { mod1Function, LOG, Color,base64encode } from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
    LOG("Hello",  { c: Color.Light.Green })
    LOG("World")

    // console.log('%cHello,World', 'color:red')
    // Cyan
    console.log('\x1b[36m%s\x1b[0m', 'I am cyan');
    // Yellow
    console.log('\x1b[33m%s\x1b[0m', 'yellow' );
    let s = base64encode('Hello')
    console.log(s)
}

// hex to string
const buf2hex = (buffer) => {
    return [...new Uint8Array(buffer)].map(x => x.toString(16).padStart(2, '0')).join('')
}

const hexs2bytes = function(hexs) {
    return hexs.split(' ').map(function(h) { return parseInt(h, 16) });
};

const bytes2hexs = function(bytes, separator='') {
    return bytes.map(x => x.toString(16).padStart(2, '0')).join(separator).toUpperCase();
}

testFunction()

let data = [0x01, 0x02, 0x44, 0xFE]
console.log("s:", buf2hex(data)) 
console.log("s:", bytes2hexs(data))
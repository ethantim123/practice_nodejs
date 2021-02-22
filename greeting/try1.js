function morning(name){
    console.log("Good Morning, " + name);
}

function sayHi(name) {
    console.log("Hello, " + name);
}

// console.log(module);
// console.log(module.exports);
//module 太常使用,所以為求方便module可省略不寫
module.exports.morning = morning;
exports.sayHi = sayHi;
// console.log(module.exports);

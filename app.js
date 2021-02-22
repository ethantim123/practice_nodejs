//node module wrapper
// (function(exports, require, module, __filename, __dirname) {
//     // Module code actually lives in here
    
// });

// let myName = "Wilson Ren";
// let sayHi = () => {
//     console.log("Hello " +　myName);
// }
// sayHi();


// console.log(__filename);
// directory 
// console.log(__dirname);

// ----------------------------------------------------------------
/**
  * what is a Node.js module?
  * -Modules in Nodes.js is a simple or complex functionality 
  * organized in single or multiple JavaScript files which can be 
  * reused throughout the Node.js application.
  * -There are bulit-in modules in Node.js, but we can aloso make 
  * our own modules.
  * 
  * 
  * Module Explain
  * 1. Node.js built-in modules
  * 2. self made modules
  * 3. modules from other people
  * 
*/
//------------------------------------------------------------------
// 欲引用自製 module, 需利用require及exports物件協助
// let try1 = require("./try1");
// let try2 = require("./try2");
// // console.log(try1);


// let myName = "Wilson Ren";

// try1.morning(myName);
// try2.night(myName);
// try1.sayHi(myName);

//------------------------------------------------------------------
// 為利於維護,將引用的js files統一放置於greeting資料夾
// 如果是requrie資料夾的情況,node會自動找資料夾下的index.js
// let greeting = require("./greeting");

// console.log(greeting);

// let myName = "Wilson Ren";
// greeting.sayHi(myName);

//------------------------------------------------------------------
// 其他node built-in module
// path

// let path = require("path");

// let newPath = path.join(__dirname, "try.js");
// console.log(newPath); //將路徑合併起來

// console.log(path.extname(__filename));//取得副檔名

// console.log(path.basename(__filename));//取得檔名
// console.log(__filename);//取得完整路徑(包含檔名)
// console.log(__dirname);//取得父層路徑

//------------------------------------------------------------------
// url
// const url = require("url");

// const pandaURL = 
// "http://127.0.0.1:5501/myform.html?gender=male&area=%E5%8F%B0%E5%8C%97%E5%B8%82";

// const parseURL = url.parse(pandaURL, true);

// console.log(parseURL.host);
// console.log(parseURL.hostname);
// console.log(parseURL.path);
// console.log(parseURL.pathname);
// console.log(parseURL.query);
// console.log(typeof parseURL.query);
// console.log(parseURL.query.gender);

//------------------------------------------------------------------
// fs => file system

const fs = require("fs");

// fs.writeFile("try.txt", "Today is a good day.", (e) => {
//     if(e) throw e;

//     console.log("File has been written.");
// });


fs.readFile("./try.txt", "utf-8", (e, data) => {
    if(e) throw e;
    console.log(data);
});

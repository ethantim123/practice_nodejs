const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) =>{
    if(req.url == "/"){

        fs.readFile(path.join(__dirname, "index.html"), (err, data) =>{
            res.writeHead(200, { "Content-Type" : "text/html" });
            res.write(data);
            res.end();
        });


        // //若需要加入html,則需要以下這行
        // res.writeHead(200, { "Content-Type" : "text/html" });
        // res.write("<h1>You are on the homePage.</h1>");
        // res.write(
        //     "<p>You can type soething at the end of the url to visit other content.</p>");
        // // res.write("You are on the homePage.");
        // res.end();
    }else{
        // console.log(req);
    // console.log(req.url);
    let parsedURL = url.parse(req.url);
    res.write("Hello, " + parsedURL.pathname);
    res.end();
    }

});

server.listen(3501, () =>{
    console.log("Server is running on port 3501.")
});

// 在cmd中ctrl+ c 可停止程式運轉
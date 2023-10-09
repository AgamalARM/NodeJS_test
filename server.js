const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {
    console.log("request made ");
    console.log("------------")
    console.log(req.url, req.method);

    
    //*** how to make response 3 steps ***//
    //  1-  set header type
   // res.setHeader('content-type', 'text/plain');
    res.setHeader('content-type', 'text/html');
    
    //send an html file
    fs.readFile('./views/index.html', (err, data) => {
        if(err){
            console.log(err);
        }
        res.write(data);
        res.end();
    })

    // //  2-  write content
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<p>Hello ,others</p>');
    // res.write('<p>Hello Again Again,others</p>');


    // //  3-  End response
    // res.end();

});

server.listen(3000, 'localhost', () =>{
    console.log("the server is listening for requests on port 3000");
});
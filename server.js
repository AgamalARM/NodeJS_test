const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {
    console.log("request made ");
    console.log("------------")
    console.log(req.url, req.method);
    console.log("---------------------------------");
    console.log("---------------------------------");

    
    //*** how to make response 3 steps ***//
    //  1-  set header type
   // res.setHeader('content-type', 'text/plain');
    res.setHeader('content-type', 'text/html');
    
    /*** Routes Defenitions */
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        // redirection the path
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
    
        default:
            path +='404.html';
            res.statusCode = 404;
            break;
    }
    //send an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
        
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
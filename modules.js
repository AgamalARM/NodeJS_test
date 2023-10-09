const xyz = require('./people');

console.log(xyz);

const os = require('os');
console.log(os.platform());

const fs = require('fs');
const readStream = fs.createReadStream('./aaa.txt', {encoding: 'utf8'}) ;
readStream.on('data',(chunk) =>{
    console.log("------New chunk-------");
    console.log(chunk);
});
setTimeout(() => {
    clearInterval(int);
    console.log("time is out");
    
}, 3000);

const int = setInterval(() => {
    console.log("in interval");
}, 1000);

console.log(__dirname);
console.log(__filename);

var fs = require("fs");
var path = process.argv[2];

var bufFile = fs.readFileSync(path);
var file = bufFile.toString();

var lines = file.split('\n').length - 1;
console.log(lines);

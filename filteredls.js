fs = require("fs");
p = require("path");

path = process.argv[2];
type = process.argv[3];

files = fs.readdir(path, function(err, files){
    for (var i = 0; i < files.length; i++){
        var fileExt = p.extname(files[i]);
        fileExt = fileExt.replace(/\./g,'');
        if (fileExt == type){
            console.log(files[i]);
        }
    }
});

//console.log(process.argv);
//^ to look at process.argv
var total = 0;

for (var i = 2; i < process.argv.length; i++)
{
    total += Number(process.argv[i]);
}

console.log(total);

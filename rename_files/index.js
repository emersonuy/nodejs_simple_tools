const fs = require("fs");
const path = require("path");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter filename: ", function(new_filename) {
    
    let i = 2;
    let cnt = 1;

    for (i=process.argv.length-1; i>=2; i--) {

        if (fs.lstatSync(process.argv[i]).isFile() === true) {
            let og_filename = process.argv[i];
            let extension = "";

            if (og_filename.includes(".")) {
                tokens = og_filename.split(".");
                extension = tokens[tokens.length-1];
            }

            console.log(og_filename, path.dirname(process.argv[i]));

            fs.renameSync(`${og_filename}`, `${path.dirname(og_filename)}/${new_filename}_${cnt++}.${extension}`);
        }
    }

    rl.question("Press [Enter] to exit", function(key) {
        rl.close();
    });
});



const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter filename: ", function(new_filename) {
    fs.readdir(process.argv[2], {withFileTypes: true}, (err, files) => {
        let cnt = 1;

        if (err) {
            console.log(err);
        }
        else {
            files.forEach((file)=> {
                let extension = "";

                if (file.isDirectory()) {
                    console.log(file.name);
                    return;
                }

                let og_filename = file.name;

                if (og_filename.includes(".")) {
                    tokens = og_filename.split(".");
                    extension = tokens[tokens.length-1];
                }

                console.log(`Renaming \"${og_filename}\" to \"${new_filename}_${cnt}.${extension}\"`);

                fs.rename(`${process.argv[2]}/${og_filename}`, `${process.argv[2]}/${new_filename}_${cnt++}.${extension}`, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                    }
                });
            })
        }

        rl.question("Press any key to exit", function(key) {
            rl.close();
        });
    })
});



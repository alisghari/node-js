const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const ext ='.'+ process.argv[3]

fs.readdir(dir, function (err, list) {
    if (err) return console.error(err);
    for (var i = 0; i < list.length; i++) {
            if (path.extname(list[i])=== ext)
                console.log(list[i]);
        }
    }
);

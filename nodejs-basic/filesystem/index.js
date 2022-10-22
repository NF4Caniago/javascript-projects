const fs = require('fs');
const path = require('path');

const modulePath = path.resolve(__dirname, 'notes.txt');

const fileReadCallback = (error, data) => {
    if(error){
        console.log(error);
        return;
    }
    console.log(data);
}

fs.readFile(modulePath, 'UTF-8', fileReadCallback);

// const data = fs.readFileSync(modulePath, 'UTF-8');
// console.log(data);
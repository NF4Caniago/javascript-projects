const fs = require('fs');
const path = require('path');

const fileInputPath = path.resolve(__dirname, 'input.txt');

const writableStream = fs.createWriteStream('./stream/output.txt');
const readableStream = fs.createReadStream(fileInputPath, {
    highWaterMark: 15
});

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch(error) {
        console.log(error.message);
    }
});

readableStream.on('end', () => {
    writableStream.end('Akhir dari writable stream!');
});


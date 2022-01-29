"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
let csvReader = new CsvFileReader_1.CsvFileReader('football.csv');
csvReader.read();
let manUwins = 0;
for (let match of csvReader.data) {
    if (match[1] === 'Man United' && match[5] === 'H')
        manUwins++;
    if (match[2] === 'Man United' && match[5] === 'A')
        manUwins++;
}
console.log(`Manchester United won ${manUwins} times`);

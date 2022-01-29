"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
let csvReader = new CsvFileReader_1.CsvFileReader('football.csv');
csvReader.read();
let manUwins = 0;
for (let match of csvReader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin)
        manUwins++;
    if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AweyWin)
        manUwins++;
}
console.log(`Manchester United won ${manUwins} times`);

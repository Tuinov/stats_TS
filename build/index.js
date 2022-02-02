"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const CsvFileReader_1 = require("./CsvFileReader");
let csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
console.log(csvFileReader);
let reader = new MatchReader_1.MatchReader(csvFileReader);
reader.load();
let manUwins = 0;
for (let match of reader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin)
        manUwins++;
    if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AweyWin)
        manUwins++;
}
console.log(`Manchester United won ${manUwins} times`);

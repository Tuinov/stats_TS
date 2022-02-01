"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
let reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
let manUwins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin)
        manUwins++;
    if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AweyWin)
        manUwins++;
}
console.log(`Manchester United won ${manUwins} times`);

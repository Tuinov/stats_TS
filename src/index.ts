import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';


let reader = new MatchReader('football.csv');
reader.read();

let manUwins: number = 0;

for (let match of reader.data) {

    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manUwins++;
    if (match[2] === 'Man United' && match[5] === MatchResult.AweyWin) manUwins++;
}
console.log(`Manchester United won ${manUwins} times`);

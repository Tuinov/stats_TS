import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

let csvFileReader = new CsvFileReader('football.csv')
 console.log(csvFileReader);
let reader = new MatchReader(csvFileReader);
reader.load();

let manUwins: number = 0;

for (let match of reader.matches) {

    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manUwins++;
    if (match[2] === 'Man United' && match[5] === MatchResult.AweyWin) manUwins++;
}
console.log(`Manchester United won ${manUwins} times`);

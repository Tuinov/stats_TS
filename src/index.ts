import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';




let csvReader = new CsvFileReader('football.csv');
csvReader.read();



let manUwins: number = 0;

for (let match of csvReader.data) {
    
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manUwins++;
    if (match[2] === 'Man United' && match[5] === MatchResult.AweyWin) manUwins++;
}
console.log(`Manchester United won ${manUwins} times`);

import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

// let csvFileReader = new CsvFileReader('football.csv');
// let reader = new MatchReader(csvFileReader);
let reader = MatchReader.fromCsv('football.csv');

reader.load();
const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
const summary1 = Summary.winAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(reader.matches);
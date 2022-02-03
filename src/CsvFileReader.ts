import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];

    constructor(public fileName: string) { }

    read(): void {
        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
                //[ '06/04/2019', 'Bournemouth', 'Burnley', '1', '3', 'A', 'M Atkinson' ]
            })
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvFileReader = void 0;
class csvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        });
    }
}
exports.csvFileReader = csvFileReader;

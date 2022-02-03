import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analizer } from '../Summary';

export class WinsAnalysis implements Analizer {

    constructor(public team: string) { }

    run(matches: MatchData[]): string {
        let wins: number = 0;

        for (let match of matches) {

            if (match[1] === this.team && match[5] === MatchResult.HomeWin) wins++;
            if (match[2] === this.team && match[5] === MatchResult.AweyWin) wins++;
        }
        return `Team ${this.team} won ${wins} times`;
    }
}
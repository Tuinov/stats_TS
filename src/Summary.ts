import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets/HtmlReport copy";

export interface Analizer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analizer: Analizer, public outputTarget: OutputTarget) { }

    buildAndPrintReport(matches: MatchData[]): void {
        const outPut = this.analizer.run(matches);

        this.outputTarget.print(outPut);
    }

    static winAnalysisWithHtmlReport(team: string) {
        return new Summary(new WinsAnalysis(team), new HtmlReport())

    }
}
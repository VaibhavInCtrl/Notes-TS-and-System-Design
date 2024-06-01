import { generateUID } from "../utils.js";
export class Ladder {
    readonly startPos: number;
    readonly endPos: number;
    private readonly id: string;
    playersHelped: number;
    constructor(sp: number, ep: number){
        this.startPos = sp;
        this.endPos = ep;
        this.id = generateUID();
        this.playersHelped = 0;
    }
}
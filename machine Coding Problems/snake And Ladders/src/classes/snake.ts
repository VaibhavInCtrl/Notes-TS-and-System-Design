import { generateUID } from "../utils.js";
export class Snake {
    readonly startPos: number;
    readonly endPos: number;
    private readonly id: string;
    playersBitten: number;
    constructor(sp: number, ep: number){
        this.startPos = sp;
        this.endPos = ep;
        this.id = generateUID();
        this.playersBitten = 0;
    }
}
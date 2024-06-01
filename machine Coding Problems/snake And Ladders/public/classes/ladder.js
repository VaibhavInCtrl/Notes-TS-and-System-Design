import { generateUID } from "../utils.js";
export class Ladder {
    constructor(sp, ep) {
        this.startPos = sp;
        this.endPos = ep;
        this.id = generateUID();
        this.playersHelped = 0;
    }
}

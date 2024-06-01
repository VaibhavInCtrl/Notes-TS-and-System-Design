import { generateUID } from "../utils.js";
export class Snake {
    constructor(sp, ep) {
        this.startPos = sp;
        this.endPos = ep;
        this.id = generateUID();
        this.playersBitten = 0;
    }
}

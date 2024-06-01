import { MyBoardInterface } from "../interface/boardInterface.js";
export class Board implements MyBoardInterface{
    private dimension: number;

    constructor(d: number){
        this.dimension = d;
    }

    getDimenstion(): number {
        return this.dimension;
    };

    createBoard(): number[][] {
        return [[0],[0]];
    };

    moveLeft(): number[][] {
        return [[0],[0]];
    };

    moveRight(): number[][] {
        return [[0],[0]];
    };

    moveTop(): number[][] {
        return [[0],[0]];
    };

    moveBottom(): number[][] {
        return [[0],[0]];
    };
}
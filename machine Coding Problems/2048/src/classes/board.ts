import { MyBoardInterface } from "../interface/boardInterface.js";
export class Board implements MyBoardInterface{
    private dimension: number;
    private board: number[][];
    constructor(d: number){
        this.dimension = d;
        this.board = this._createBoard();
    }

    getDimenstion(): number {
        return this.dimension;
    };

    setBoard(newBoard: number[][]): void{
        this.board = newBoard;
    }

    getBoard(): number[][]{
        return this.board
    }

    private _createBoard(): number[][] {
        let boardArray: number[][] = [];
        for (let i = 0; i < this.getDimenstion(); i++){
            let singleRow: number[] = [];
            for (let j = 0; j < this.getDimenstion(); j++){
                singleRow.push(0);
            }
            boardArray.push(singleRow);
        }
        return boardArray;
    };

    addAtRandom(){
        let isAdded = false;
        const boxNumber = Math.floor(Math.random()*15+1);
        while (isAdded === false){

        }
    }

    moveLeft(): number[][] {
        console.log("Player Moved Left");

        return [[0],[0]];
    };

    moveRight(): number[][] {
        console.log("Player Moved Right");
        return [[0],[0]];
    };

    moveTop(): number[][] {
        console.log("Player Moved Top");
        return [[0],[0]];
    };

    moveBottom(): number[][] {
        console.log("Player Moved Bottom");
        return [[0],[0]];
    };
}
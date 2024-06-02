export class Board {
    constructor(d) {
        this.dimension = d;
        this.board = this._createBoard();
    }
    getDimenstion() {
        return this.dimension;
    }
    ;
    setBoard(newBoard) {
        this.board = newBoard;
    }
    getBoard() {
        return this.board;
    }
    _createBoard() {
        let boardArray = [];
        for (let i = 0; i < this.getDimenstion(); i++) {
            let singleRow = [];
            for (let j = 0; j < this.getDimenstion(); j++) {
                singleRow.push(0);
            }
            boardArray.push(singleRow);
        }
        return boardArray;
    }
    ;
    addAtRandom() {
        let isAdded = false;
        const boxNumber = Math.floor(Math.random() * 15 + 1);
        while (isAdded === false) {
        }
    }
    moveLeft() {
        console.log("Player Moved Left");
        return [[0], [0]];
    }
    ;
    moveRight() {
        console.log("Player Moved Right");
        return [[0], [0]];
    }
    ;
    moveTop() {
        console.log("Player Moved Top");
        return [[0], [0]];
    }
    ;
    moveBottom() {
        console.log("Player Moved Bottom");
        return [[0], [0]];
    }
    ;
}

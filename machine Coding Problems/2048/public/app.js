import { Board } from "./classes/board.js";
import { Player } from "./classes/player.js";
import { Directions } from "./ENUMS/directions.js";
class TwentyfortyEight {
    constructor(d, n) {
        this.dimension = d;
        this.name = n;
        let newBoard = new Board(d);
        this.board = newBoard;
        this.player = new Player(n);
    }
    getBoard() {
        let createdBoard = this.board.createBoard();
        return createdBoard;
    }
    getPlayer() {
        return this.player.getName();
    }
    playMove(move) {
        if (move === Directions.LEFT) {
            return this.board.moveLeft();
        }
        else if (move === Directions.RIGHT) {
            return this.board.moveRight();
        }
        else if (move === Directions.TOP) {
            return this.board.moveTop();
        }
        else {
            return this.board.moveBottom();
        }
    }
}
const New2048 = new TwentyfortyEight(4, "vaibhav");
console.log(New2048.getPlayer());
console.log(New2048.getBoard());
New2048.playMove(0);
New2048.playMove(1);
New2048.playMove(2);
New2048.playMove(3);

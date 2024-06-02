export class Player {
    constructor(n) {
        this.name = n;
        this.moves = [];
    }
    getName() {
        return this.name;
    }
    registerMove(m) {
        this.moves.push(m);
    }
    getAllMoves() {
        return this.moves;
    }
}

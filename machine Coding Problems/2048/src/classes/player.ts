import { MyPlayerInterface } from "../interface/playerInterface.js";

export class Player implements MyPlayerInterface{
    private name: string;
    readonly moves: number[];
    constructor(n: string){
        this.name = n;
        this.moves = []
    }
    getName(): string {
        return this.name;
    }

    registerMove(m: number): void{
        this.moves.push(m)
    }

    getAllMoves(): number[] {
        return this.moves;
    }
}
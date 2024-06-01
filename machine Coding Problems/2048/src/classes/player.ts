import { MyPlayerInterface } from "../interface/playerInterface.js";


export class Player implements MyPlayerInterface{

    getName(): string {
        throw new Error("Method not implemented.");
    }
    getAllMoves(): string {
        throw new Error("Method not implemented.");
    }
    moveWhere(direction: number): number[][] {
        throw new Error("Method not implemented.");
    }

}
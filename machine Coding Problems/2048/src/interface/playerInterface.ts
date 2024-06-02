import { Directions } from "../ENUMS/directions.js";

export interface MyPlayerInterface {
    getName(): string;
    getAllMoves(): number[];
    registerMove(move: number): void;
}
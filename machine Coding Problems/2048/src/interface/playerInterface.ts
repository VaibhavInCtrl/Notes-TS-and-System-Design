import { Directions } from "../ENUMS/directions";

export interface MyPlayerInterface {
    getName(): string;
    getAllMoves(): string;
    moveWhere(direction: Directions): number[][];
}
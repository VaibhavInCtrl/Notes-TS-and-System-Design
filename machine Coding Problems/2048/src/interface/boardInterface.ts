export interface MyBoardInterface {
    getDimenstion(): number;
    moveLeft(): number[][];
    moveRight(): number[][];
    moveTop(): number[][];
    moveBottom(): number[][];
    getBoard(): number[][];
    setBoard(board: number[][]): void;
}
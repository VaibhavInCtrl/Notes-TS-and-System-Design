export interface MyBoardInterface {
    getDimenstion(): number;
    createBoard(): number[][];
    moveLeft(): number[][];
    moveRight(): number[][];
    moveTop(): number[][];
    moveBottom(): number[][];
}
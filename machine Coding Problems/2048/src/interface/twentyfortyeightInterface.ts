export interface My2048Interface{
    getBoard(dimension: number): number[][];
    getPlayer(name: string): void;
    playMove(move: number): number[][];
}
import { generateUID } from "../utils.js";
import { Ladder } from "./ladder.js";
import { Snake } from "./snake.js";
export class Player {
    currentPos: number;
    nextPos: number;
    dicesRolled: number[];
    diceRolled: number;
    readonly name: string;
    private readonly id: string;
    constructor(n: string){
        this.currentPos = 0;
        this.nextPos = 0;
        this.dicesRolled = [];
        this.diceRolled = 0;
        this.id = generateUID();
        this.name = n;
    }
    rollDice(){
        this.diceRolled = Math.floor(Math.random()*5 + 1);
        this.dicesRolled.push(this.diceRolled);
        this.nextPos = this.currentPos + this.diceRolled;
        return this.diceRolled;
    }
    getPlayerInfo(boardSize: number, snakes: Snake[], ladders: Ladder[]){
        if (this.nextPos === boardSize){
            return `${this.name} wins the game`
        }
        else{
            snakes.forEach((snake: Snake) =>{
                if (snake.startPos === this.nextPos){
                    this.nextPos = snake.endPos;
                    // snake.playersBitten += 1;
                }
            })
            ladders.forEach((ladder: Ladder) => {
                if (ladder.startPos === this.nextPos){
                    this.nextPos = ladder.endPos;
                    // ladder.playersHelped += 1;
                }
            })
            return `${this.name} rolled a ${this.diceRolled} and moved from ${this.currentPos} to ${this.nextPos}`
        }
    }
}
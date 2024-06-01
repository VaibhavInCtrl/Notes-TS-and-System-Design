import { Player } from "./classes/player.js";
import { Snake } from "./classes/snake.js";
import { Ladder } from "./classes/ladder.js";
class SnakeAndLadders {
    constructor(p, s, l, bs, d) {
        this.players = p;
        this.snakes = s;
        this.ladders = l;
        this.boardSize = bs;
        this.numberOfDice = d;
        this.hasWon = false;
    }
    playTheGame() {
        console.log("game started");
        while (this.hasWon === false) {
            this.players.forEach((player) => {
                setTimeout(function () { }, 1000);
                console.log(player.name);
                player.rollDice();
                let platerInfo = player.getPlayerInfo(this.boardSize, this.snakes, this.ladders);
                console.log(platerInfo);
                if (platerInfo === `${player.name} wins the game`) {
                    this.hasWon = true;
                }
                else {
                }
            });
        }
    }
}
const snakeLadderInfo = `9
62 5
33 6
49 9
88 16
41 20
56 53
98 64
93 73
95 75
8
2 37
27 46
10 32
51 68
61 79
65 84
71 91
81 100
2
Gaurav
Sagar`;
const lines = snakeLadderInfo.split('\n').map(line => line.trim());
let currentIndex = 0;
const numberOfSnakes = parseInt(lines[currentIndex++]);
const snakes = [];
for (let i = 0; i < numberOfSnakes; i++) {
    const [head, tail] = lines[currentIndex++].split(' ').map(Number);
    let snake = new Snake(head, tail);
    snakes.push(snake);
}
const numberOfLadders = parseInt(lines[currentIndex++]);
const ladders = [];
for (let i = 0; i < numberOfLadders; i++) {
    const [start, end] = lines[currentIndex++].split(' ').map(Number);
    let ladder = new Ladder(start, end);
    ladders.push(ladder);
}
const numberOfPlayers = parseInt(lines[currentIndex++]);
const players = [];
for (let i = 0; i < numberOfPlayers; i++) {
    const name = lines[currentIndex++];
    let player = new Player(name);
    players.push(player);
}
const game = new SnakeAndLadders(players, snakes, ladders, 100, 1);
// game.playTheGame();

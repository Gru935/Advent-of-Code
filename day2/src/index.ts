import fs from "node:fs";
import { Cube } from "./cube";
import { Game } from "./game";

const file = fs.readFileSync("test.txt", "utf-8");
const lines = file.split("\r\n").filter((s) => s.length > 0);
const games = new Array<Game>();
lines.forEach((line) => {
  const [left, right] = line.split(":");
  const [, id] = left.split(" ");
  const gameId = parseInt(id);

  const gameSets = new Array<Array<Cube>>();
  const sets = right.split(";");
  for (const s of sets) {
    const trimmed = s.trim();
    const cubes = new Array<Cube>();
    for (let index = 0; index < trimmed.length; index++) {
      const c = s[index];
      if (!isNaN(parseInt(c))) {
        if (s[index + 2] == "r") {
          let cube = new Cube(parseInt(c), "r");
          cubes.push(cube);
        } else if (s[index + 2] == "g") {
          let cube = new Cube(parseInt(c), "g");
          cubes.push(cube);
        } else if (s[index + 2] == "b") {
          let cube = new Cube(parseInt(c), "b");
          cubes.push(cube);
        }
      }
    }
    gameSets.push(cubes);
  }
  let game = new Game(gameId, gameSets);
  games.push(game);
});
// console.log(games);
games.forEach((g) => {
  console.log(g.getSets());
});

import { Cube } from "./cube";

export class Game {
  private id: number;
  private sets: Array<Array<Cube>>;

  constructor(id: number, sets: Array<Array<Cube>>) {
    this.id = id;
    this.sets = sets;
  }

  getId(): number {
    return this.id;
  }

  getSets(): Array<Array<Cube>> {
    return this.sets;
  }
}

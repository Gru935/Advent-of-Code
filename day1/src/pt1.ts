import { readFile } from "fs/promises";

async function main() {
  const buffer = await readFile("input.txt");
  const txt = buffer.toString();
  const lines = txt.split("\r\n");

  const values: number[] = lines.map((line: string) => {
    let firstDigit = "";
    for (let index = 0; index < line.length; index++) {
      const char = line.charCodeAt(index);
      if (char >= 48 && char <= 57) {
        firstDigit = line[index];
        break;
      }
    }

    let secondDigit = "";
    for (let index = line.length; index >= 0; index--) {
      const char = line.charCodeAt(index);
      if (char >= 48 && char <= 57) {
        secondDigit = line[index];
        break;
      }
    }

    const v = firstDigit.concat(secondDigit);
    return Number(v);
  });

  const sum = values.reduce((prev, cur) => {
    return prev + cur;
  }, 0);

  console.log("sum", sum);
}

main();

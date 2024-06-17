import { readFile } from "fs/promises";

async function main() {
  const buffer = await readFile("input.txt");
  const txt = buffer.toString();
  const lines = txt.split("\r\n");
  let total = 0;

  lines.forEach((line) => {
    let v1 = 0; // dezena
    let v2 = 0; // unidade
    let v1Index = Number.MAX_SAFE_INTEGER;
    let v2Index = Number.MIN_SAFE_INTEGER;
    if (line.includes("one")) {
      if (v1Index > line.indexOf("one")) {
        v1Index = line.indexOf("one");
        v1 = 10;
      }
      if (v2Index < line.lastIndexOf("one")) {
        v2Index = line.lastIndexOf("one");
        v2 = 1;
      }
    }
    if (line.includes("1")) {
      if (v1Index > line.indexOf("1")) {
        v1Index = line.indexOf("1");
        v1 = 10;
      }
      if (v2Index < line.lastIndexOf("1")) {
        v2Index = line.lastIndexOf("1");
        v2 = 1;
      }
    }
    if (line.includes("two")) {
      if (v1Index > line.indexOf("two")) {
        v1Index = line.indexOf("two");
        v1 = 20;
      }
      if (v2Index < line.lastIndexOf("two")) {
        v2Index = line.lastIndexOf("two");
        v2 = 2;
      }
    }
    if (line.includes("2")) {
      if (v1Index > line.indexOf("2")) {
        v1Index = line.indexOf("2");
        v1 = 20;
      }
      if (v2Index < line.lastIndexOf("2")) {
        v2Index = line.lastIndexOf("2");
        v2 = 2;
      }
    }
    if (line.includes("three")) {
      if (v1Index > line.indexOf("three")) {
        v1Index = line.indexOf("three");
        v1 = 30;
      }
      if (v2Index < line.lastIndexOf("three")) {
        v2Index = line.lastIndexOf("three");
        v2 = 3;
      }
    }
    if (line.includes("3")) {
      if (v1Index > line.indexOf("3")) {
        v1Index = line.indexOf("3");
        v1 = 30;
      }
      if (v2Index < line.lastIndexOf("3")) {
        v2Index = line.lastIndexOf("3");
        v2 = 3;
      }
    }
    if (line.includes("four")) {
      if (v1Index > line.indexOf("four")) {
        v1Index = line.indexOf("four");
        v1 = 40;
      }
      if (v2Index < line.lastIndexOf("four")) {
        v2Index = line.lastIndexOf("four");
        v2 = 4;
      }
    }
    if (line.includes("4")) {
      if (v1Index > line.indexOf("4")) {
        v1Index = line.indexOf("4");
        v1 = 40;
      }
      if (v2Index < line.lastIndexOf("4")) {
        v2Index = line.lastIndexOf("4");
        v2 = 4;
      }
    }
    if (line.includes("five")) {
      if (v1Index > line.indexOf("five")) {
        v1Index = line.indexOf("five");
        v1 = 50;
      }
      if (v2Index < line.lastIndexOf("five")) {
        v2Index = line.lastIndexOf("five");
        v2 = 5;
      }
    }
    if (line.includes("5")) {
      if (v1Index > line.indexOf("5")) {
        v1Index = line.indexOf("5");
        v1 = 50;
      }
      if (v2Index < line.lastIndexOf("5")) {
        v2Index = line.lastIndexOf("5");
        v2 = 5;
      }
    }
    if (line.includes("six")) {
      if (v1Index > line.indexOf("six")) {
        v1Index = line.indexOf("six");
        v1 = 60;
      }
      if (v2Index < line.lastIndexOf("six")) {
        v2Index = line.lastIndexOf("six");
        v2 = 6;
      }
    }
    if (line.includes("6")) {
      if (v1Index > line.indexOf("6")) {
        v1Index = line.indexOf("6");
        v1 = 60;
      }
      if (v2Index < line.lastIndexOf("6")) {
        v2Index = line.lastIndexOf("6");
        v2 = 6;
      }
    }
    if (line.includes("seven")) {
      if (v1Index > line.indexOf("seven")) {
        v1Index = line.indexOf("seven");
        v1 = 70;
      }
      if (v2Index < line.lastIndexOf("seven")) {
        v2Index = line.lastIndexOf("seven");
        v2 = 7;
      }
    }
    if (line.includes("7")) {
      if (v1Index > line.indexOf("7")) {
        v1Index = line.indexOf("7");
        v1 = 70;
      }
      if (v2Index < line.lastIndexOf("7")) {
        v2Index = line.lastIndexOf("7");
        v2 = 7;
      }
    }
    if (line.includes("eight")) {
      if (v1Index > line.indexOf("eight")) {
        v1Index = line.indexOf("eight");
        v1 = 80;
      }
      if (v2Index < line.lastIndexOf("eight")) {
        v2Index = line.lastIndexOf("eight");
        v2 = 8;
      }
    }
    if (line.includes("8")) {
      if (v1Index > line.indexOf("8")) {
        v1Index = line.indexOf("8");
        v1 = 80;
      }
      if (v2Index < line.lastIndexOf("8")) {
        v2Index = line.lastIndexOf("8");
        v2 = 8;
      }
    }
    if (line.includes("nine")) {
      if (v1Index > line.indexOf("nine")) {
        v1Index = line.indexOf("nine");
        v1 = 90;
      }
      if (v2Index < line.lastIndexOf("nine")) {
        v2Index = line.lastIndexOf("nine");
        v2 = 9;
      }
    }
    if (line.includes("9")) {
      if (v1Index > line.indexOf("9")) {
        v1Index = line.indexOf("9");
        v1 = 90;
      }
      if (v2Index < line.lastIndexOf("9")) {
        v2Index = line.lastIndexOf("9");
        v2 = 9;
      }
    }
    total += v1 + v2;
    // console.log(v1 + v2);
  });
  console.log("total", total);
}

main();

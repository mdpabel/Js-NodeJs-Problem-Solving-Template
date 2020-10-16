process.stdin.resume();
process.stdin.setEncoding("utf-8");

let currentLine = 0;
let inputString = "";

process.stdin.on("data", (raw_data) => {
  inputString += raw_data;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((line) => {
      return line.trim();
    });
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/******** Main function *************/

function main() {
  var n = parseInt(readLine());

  var count = 0;
  for (var i = 0; i < n; i++) {
    var [Petya, Vasya, Tonya] = readLine().split(" ").map(Number);

    if (Petya + Vasya + Tonya >= 2) {
      count++;
    }
  }
  console.log(count);
}

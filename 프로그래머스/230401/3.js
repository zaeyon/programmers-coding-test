const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
  rl.close();
}).on("close", function () {
  for (let i = 1; i <= input[0]; i++) {
    console.log("*".padStart(i, "*"));
  }
});

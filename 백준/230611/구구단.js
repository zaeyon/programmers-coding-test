const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`${N} * ${i} = ${i * N}`);
  }
  rl.close();
});

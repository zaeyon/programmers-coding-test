function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    count++;

    if (count % 3 === 0 || count.toString().includes("3")) {
      while (count % 3 === 0 || count.toString().includes("3")) {
        count++;
      }
    }
  }

  console.log("count", count);
  return count;
}

solution(40);

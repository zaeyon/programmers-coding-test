function solution(n) {
  let numArr = new Array(n + 1).fill(true);
  let answer = [];

  for (let i = 2; i <= n; i++) {
    if (numArr[i] === false) {
      continue;
    }

    for (let j = i * 2; j <= n; j += i) {
      numArr[j] = false;
    }
  }

  for (let k = 2; k <= n; k++) {
    if (numArr[k]) answer.push(k);
  }

  return answer.length;
}

solution(5);

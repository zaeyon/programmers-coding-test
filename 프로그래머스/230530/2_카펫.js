function solution(brown, yellow) {
  const gridNum = brown + yellow;

  for (let i = 3; i <= gridNum; i++) {
    if (gridNum % i === 0 && (i - 2) * (gridNum / i - 2) === yellow) {
      return [gridNum / i, i];
    }
  }
}

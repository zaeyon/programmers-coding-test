function solution(arr) {
  var answer = 0;
  const max = Math.max(...arr);
  let mulNum = 1;
  let maxMultiple = max * mulNum;

  while (
    arr.map((item) => maxMultiple % item).reduce((a, b) => a + b, 0) !== 0
  ) {
    mulNum++;
    maxMultiple = max * mulNum;
  }

  return maxMultiple;
}

solution([1, 2, 3]);

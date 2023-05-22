function solution(numlist, n) {
  var answer = [];
  answer = numlist.sort((a, b) => {
    if (Math.abs(n - a) === Math.abs(n - b)) {
      return b - a;
    } else {
      return Math.abs(n - a) - Math.abs(n - b);
    }
  });

  console.log(answer);
  return answer;
}

solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30);

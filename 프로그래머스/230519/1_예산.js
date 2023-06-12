function solution(d, budget) {
  var answer = 0;
  var sum = 0;
  const sortedArr = d.sort((a, b) => a - b);
  sortedArr.forEach((item) => {
    sum += item;
    if (sum <= budget) answer++;
  });

  console.log(answer);
  return answer;
}

solution([2, 2, 3, 3], 10);

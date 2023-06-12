function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  A.forEach((item, index) => {
    answer += item * B[index];
  });

  console.log(answer);
  return answer;
}

solution([1, 2], [3, 4]);

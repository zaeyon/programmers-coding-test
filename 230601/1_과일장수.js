function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length / m; i++) {
    const slicedArr = score.slice(i * m, i * m + m);
    console.log("slicedArr", slicedArr);
    if (slicedArr[m - 1]) answer += slicedArr[m - 1] * m;

    console.log("answer", answer);
  }
  return answer;
}

solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);

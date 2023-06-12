function solution(dots) {
  var answer = 0;
  const incli_1_1 = (dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]);
  const incli_1_2 = (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0]);

  const incli_2_1 = (dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0]);
  const incli_2_2 = (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0]);

  const incli_3_1 = (dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0]);
  const incli_3_2 = (dots[1][1] - dots[2][1]) / (dots[1][0] - dots[2][0]);

  if (
    incli_1_1 === incli_1_2 ||
    incli_2_1 === incli_2_2 ||
    incli_3_1 === incli_3_2
  ) {
    console.log(1);
    return 1;
  } else {
    console.log(0);
    return 0;
  }
}

solution([
  [3, 5],
  [4, 1],
  [2, 4],
  [5, 10],
]);

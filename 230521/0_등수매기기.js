function solution(score) {
  var answer = [];

  let averArr = score.map((item) => {
    return (item[0] + item[1]) / 2;
  });

  const tmpAverArr = [...averArr];

  let sortedAverArr = averArr.sort((a, b) => b - a);

  const rankArr = tmpAverArr.map((item) => {
    return sortedAverArr.indexOf(item) + 1;
  });

  return rankArr;
}

solution([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]);

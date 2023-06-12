function solution(array, commands) {
  var answer = [];

  commands.forEach((item, index) => {
    const num = array.slice(item[0] - 1, item[1]).sort((a, b) => a - b)[
      item[2] - 1
    ];

    answer.push(num);
  });

  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);

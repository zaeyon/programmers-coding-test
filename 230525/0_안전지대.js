function solution(board) {
  let answer = 0;
  board.forEach((row, i1) => {
    row.forEach((item, i2) => {
      if (item === 1) {
        console.log("item === 1", i1, i2);
        if (board[i1][i2 - 1] === 0) {
          console.log("ss");
          board[i1][i2 - 1] = 2;
        }
        if (board?.[i1]?.[i2 + 1] === 0) board[i1][i2 + 1] = 2;
        if (board?.[i1 - 1]?.[i2 - 1] === 0) board[i1 - 1][i2 - 1] = 2;
        if (board?.[i1 - 1]?.[i2] === 0) board[i1 - 1][i2] = 2;
        if (board?.[i1 - 1]?.[i2 + 1] === 0) board[i1 - 1][i2 + 1] = 2;
        if (board?.[i1 + 1]?.[i2 - 1] === 0) board[i1 + 1][i2 - 1] = 2;
        if (board?.[i1 + 1]?.[i2] === 0) board[i1 + 1][i2] = 2;
        if (board?.[i1 + 1]?.[i2 + 1] === 0) board[i1 + 1][i2 + 1] = 2;
      }
    });
  });

  board.forEach((row, i1) => {
    row.forEach((item, i2) => {
      if (item === 0) answer++;
    });
  });

  console.log("answer", answer);
}

solution([
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
]);

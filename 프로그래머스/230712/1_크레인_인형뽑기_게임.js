function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((item) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][item - 1] !== 0) {
        if (stack[stack.length - 1] === board[i][item - 1]) {
          answer++;
          stack.pop();
        } else {
          stack.push(board[i][item - 1]);
        }
        board[i][item - 1] = 0;
        break;
      }
    }
  });

  console.log("answer", answer * 2);
  return answer * 2;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

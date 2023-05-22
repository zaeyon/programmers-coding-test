function solution(board) {
  answer = 0;

  board.forEach((line, index1) => {
    line.forEach((room, index2) => {
      if (room === 1) {
        /*
        if (board[index1][index2 - 1] !== undefined)
          board[index1][index2 - 1] = 1;
        if (board[index1][index2 + 1] !== undefined)
          board[index1][index2 + 1] = 1;
        if (board[index1 - 1][index2] !== undefined)
          board[index1 - 1][index2] = 1;
        if (board[index1 - 1][index2 - 1] !== undefined)
          board[index1 - 1][index2 - 1] = 1;
        if (board[index1 - 1][index2 + 1] !== undefined)
          board[index1 - 1][index2 + 1] = 1;
        if (board[index1 + 1][index2 - 1] !== undefined)
          board[index1 + 1][index2 - 1] = 1;
        if (board[index1 + 1][index2] !== undefined)
          board[index1 + 1][index2] = 1;
        if (board[index1 + 1][index2 + 1] !== undefined)
          board[index1 + 1][index2 + 1] = 1;
          */

          if(index1 === 0) {
            
          }
      }
    });
  });

  console.log("수정된 board", board);
}

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]);

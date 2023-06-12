function solution(keyinput, board) {
  var answer = [0, 0];
  const width = parseInt(board[0] / 2);
  console.log("width", parseInt(board[0] / 2));
  const height = parseInt(board[1] / 2);

  console.log("height", parseInt(board[1] / 2));

  keyinput.forEach((item) => {
    switch (item) {
      case "left":
        if (Math.abs(answer[0]) < width || answer[0] === width) {
          answer[0] -= 1;

          console.log("left", answer);
        }
        break;
      case "right":
        if (Math.abs(answer[0]) < width || answer[0] === -1 * width) {
          answer[0] += 1;
          console.log("right", answer);
        }
        break;
      case "up":
        if (Math.abs(answer[1]) < height || answer[1] === -1 * height) {
          answer[1] += 1;

          console.log("up", answer);
        }
        break;
      case "down":
        if (Math.abs(answer[1]) < height || answer[1] === height) {
          answer[1] -= 1;

          console.log("down", answer);
        }

      default:
    }
  });
  console.log("정답", answer);
  return answer;
}

solution(
  ["left", "left", "left", "left", "right", "right", "right", "right"],
  [5, 5]
);

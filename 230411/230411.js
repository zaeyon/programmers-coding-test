function solution(quiz) {
  var answer = [];
  answer = quiz.map((item) => {
    const itemArr = item.split(" ");
    console.log(itemArr);

    if (itemArr[1] === "+") {
      return +itemArr[0] + +itemArr[2] === +itemArr[4] ? "O" : "X";
    } else if (itemArr[1] === "-") {
      return +itemArr[0] - +itemArr[2] === +itemArr[4] ? "O" : "X";
    }
  });

  console.log(answer);

  return answer;
}

solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]);

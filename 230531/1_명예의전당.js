function solution(k, score) {
  var answer = [];
  let hallOfFameArr = [];

  score.forEach((item) => {
    hallOfFameArr.push(item);
    hallOfFameArr.sort((a, b) => b - a);

    if (hallOfFameArr.length < k) {
      answer.push(hallOfFameArr[hallOfFameArr.length - 1]);
    } else {
      answer.push(hallOfFameArr[k - 1]);
    }
  });

  console.log(answer);
}

solution(3, [10, 100, 20, 150, 1, 100, 200]);

function solution(answers) {
  var answer = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const thrid = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let firstScore = 0;
  let secondScore = 0;
  let thridScore = 0;
  let max = 0;

  answers.forEach((item, index) => {
    if (item === first[index % 5]) {
      firstScore++;
      if (firstScore > max) max = firstScore;
    }
    if (item === second[index % 8]) {
      secondScore++;
      if (secondScore > max) max = secondScore;
    }
    if (item === thrid[index % 10]) {
      thridScore++;
      if (thridScore > max) max = thridScore;
    }
  });

  answer = [
    { score: firstScore, id: 1 },
    { score: secondScore, id: 2 },
    { score: thridScore, id: 3 },
  ]
    .filter((item) => {
      return item.score >= max;
    })
    .map((item) => item.id);

  console.log(answer);

  return answer;
}

solution([1, 3, 2, 4, 2]);

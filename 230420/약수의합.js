function solution(n) {
  var answer = 0;
  var answerArr = [];

  let i = 1;

  if (n === 0) {
    return 0;
  } else {
    do {
      if (n % i === 0 && answerArr.indexOf(i) === -1) {
        if (i === n / i) {
          answerArr.push(i);
        } else {
          answerArr.push(i);
          answerArr.push(n / i);
        }
      }
      i++;
    } while (i < n / 2);

    console.log(answerArr);
    return answerArr.reduce((acc, item) => (acc += item), 0);
  }
}

solution(0);

function solution(dartResult) {
  var answer = 0;
  let scoreArr = [];
  const dartResultArr = dartResult.split("");
  let sum = 0;

  dartResultArr.forEach((item, index) => {
    if (item === "S") {
      if (+dartResultArr[index - 1] === 0 && +dartResultArr[index - 2] === 1) {
        scoreArr.push(10);
      } else {
        scoreArr.push(+dartResultArr[index - 1]);
      }
    }
    if (item === "D") {
      if (+dartResultArr[index - 1] === 0 && +dartResultArr[index - 2] === 1) {
        scoreArr.push(100);
      } else {
        scoreArr.push(dartResultArr[index - 1] ** 2);
      }
    }
    if (item === "T") {
      if (+dartResultArr[index - 1] === 0 && +dartResultArr[index - 2] === 1) {
        scoreArr.push(1000);
      } else {
        scoreArr.push(dartResultArr[index - 1] ** 3);
      }
    }

    if (item === "*") {
      scoreArr[scoreArr.length - 1] *= 2;
      if (index > 0) {
        scoreArr[scoreArr.length - 2] *= 2;
      }
    }

    if (item === "#") {
      scoreArr[scoreArr.length - 1] *= -1;
    }
  });

  return scoreArr.reduce((a, c) => a + c, 0);
}

solution("1D2S3T*");

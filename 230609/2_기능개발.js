function solution(progresses, speeds) {
  var answer = [];
  let tmpArr = [...progresses];

  for (let i = 1; i < 100; i++) {
    tmpArr = tmpArr.map((item, index) => {
      return progresses[index] + i * speeds[index];
    });

    if (tmpArr[0] >= 100) {
      let count = 0;
      while (tmpArr[0] >= 100) {
        count++;
        tmpArr.shift();
        speeds.shift();
        progresses.shift();
      }
      answer.push(count);
    }

    if (progresses.length === 0) break;
  }

  console.log("answer", answer);
  return answer;
}

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);

function solution(number) {
  var answer = 0;
  var answerSet = new Set();

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let w = j + 1; w < number.length; w++) {
        if (number[i] + number[j] + number[w] === 0) {
          console.log("i + j + w === 0");
          answerSet.add([number[i], number[j], number[w]]);
        }
      }
    }
  }

  return answerSet.size;
}

solution([-3, -2, -1, 0, 1, 2, 3]);

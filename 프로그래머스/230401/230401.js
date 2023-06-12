function solution(emergency) {
  var answer = [];
  const tmpArray = [...emergency];
  tmpArray.sort((a, b) => {
    return b - a;
  });

  console.log("sorted array", tmpArray);

  tmpArray.forEach((item1, index1) => {
    emergency.forEach((item2, index2) => {
      if (item1 === item2) {
        answer[index2] = index1 + 1;
      }
    });
  });

  console.log("answer", answer);

  return answer;
}

solution([1, 2, 3, 4, 5, 6, 7]);

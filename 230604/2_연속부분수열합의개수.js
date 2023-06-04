function solution(elements) {
  var answer = 0;
  var sumSet = new Set();
  for (let i = 1; i <= elements.length; i++) {
    const sliced = elements.slice(0, i - 1);
    console.log("sliced", sliced);

    const concated = elements.concat(sliced);
    for (let j = 0; j < elements.length; j++) {
      let sum = 0;
      const tmpArr = concated.slice(j, i + j);
      console.log("tmpArr", tmpArr);
      tmpArr.forEach((value) => {
        sum += value;
      });

      sumSet.add(sum);
    }
  }

  return answer;
}

solution([7, 9, 1, 1, 4]);

function solution(num, total) {
  let answer = [];
  let numArr = [];

  for (let i = -2; i <= Math.ceil(total); i++) {
    for (let j = i; j < num + i; j++) {
      numArr.push(j);
      console.log(numArr);
    }

    const sum = numArr.reduce((acc, cur) => acc + cur, 0);

    if (sum === total) {
      console.log(numArr);
      answer = numArr;
      break;
    } else {
      numArr = [];
    }
  }

  return answer;
}

solution(1, 10);

console.log("Math.ceil", Math.ceil(5));

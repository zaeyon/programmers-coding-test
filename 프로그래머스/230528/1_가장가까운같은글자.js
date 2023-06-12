function solution(s) {
  var answer = [];
  let unshiftedArr = [];

  for (let i of s) {
    if (unshiftedArr.includes(i)) {
      unshiftedArr.unshift(i);
      answer.push(unshiftedArr.indexOf(i, 1));
    } else {
      unshiftedArr.unshift(i);
      answer.push(-1);
    }
  }

  console.log("answer", answer);
  return answer;
}

solution("banana");

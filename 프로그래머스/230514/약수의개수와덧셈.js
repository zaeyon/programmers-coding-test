function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }

    if (count % 2 === 0) answer += i;
    else answer -= i;
  }

  console.log(answer);
  return answer;
}

solution(24, 27);

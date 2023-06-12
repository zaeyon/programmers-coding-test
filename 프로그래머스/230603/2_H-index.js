function solution(citations) {
  var answer = 0;

  const max = Math.max(...citations);

  for (let i = 0; i <= max; i++) {
    let count = 0;

    citations.forEach((value) => {
      if (value >= i) count++;
    });

    if (count >= i) {
      answer = i;
    }
  }

  console.log("answer", answer);
  return answer;
}

solution([3, 0, 6, 1, 5]);

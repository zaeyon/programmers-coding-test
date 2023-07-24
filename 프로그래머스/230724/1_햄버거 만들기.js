function solution(ingredient) {
  var answer = 0;
  for (let i = 0; i < ingredient.length; i++) {
    if (i >= 3) {
      if (
        ingredient[i - 3] === 1 &&
        ingredient[i - 2] === 2 &&
        ingredient[i - 1] === 3 &&
        ingredient[i] === 1
      ) {
        ingredient.splice(i - 3, 4);
        i = i - 3;
        answer++;
      }
    }
  }
  console.log("answer", answer);
  return answer;
}

solution([1, 3, 2, 1, 2, 1, 3, 1, 2]);

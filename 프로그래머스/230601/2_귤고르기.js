function solution(k, tangerine) {
  let answer = 0;

  let arr = [];
  const dupObj = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  arr = Object.values(dupObj).sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
    if (answer >= k) return i + 1;
  }
}

solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);

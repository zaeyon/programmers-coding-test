function solution(numbers) {
  var answer = [];
  let numberSet = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      numberSet.add(numbers[i] + numbers[j]);
    }
  }

  console.log([...numberSet].sort((a, b) => a - b));
  return [...numberSet].sort((a, b) => a - b);
}

solution([2, 1, 3, 4, 1]);

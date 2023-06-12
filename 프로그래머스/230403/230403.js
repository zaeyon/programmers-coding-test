function solution(numbers, k) {
  var answer = 0;
  let tmpArray = [...numbers];
  let tmpArray2 = [...numbers];

  if (2 * (k - 1) < numbers.length) {
    answer = numbers[2 * (k - 1)];
  } else {
    for (let i = 0; i < 1000 * 2; i++) {
      tmpArray2 = tmpArray2.concat(tmpArray);
    }
    console.log(tmpArray2);
    answer = tmpArray2[2 * (k - 1)];
  }

  return answer;
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);

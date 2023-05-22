function solution(n, arr1, arr2) {
  var answer = [];

  const binaryArr = arr1.map((item, index) => {
    return (item | arr2[index])
      .toString(2)
      .padStart(n, 0)
      .replace(/[1]/g, "#")
      .replace(/[0]/g, " ");
  });

  console.log(binaryArr);
  return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);

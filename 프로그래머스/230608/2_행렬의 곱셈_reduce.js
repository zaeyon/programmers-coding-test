function solution(arr1, arr2) {
  return arr1.map((row) => {
    return arr2[0].map((_, index1) => {
      return row.reduce((acc, cur, index2) => {
        return acc + cur * arr2[index2][index1];
      }, 0);
    });
  });
}

solution();

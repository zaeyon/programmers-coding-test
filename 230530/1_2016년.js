function solution(a, b) {
  var answer = "";
  const dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const dayNumArr =
    a === 1 || a === 4 || a === 7
      ? [3, 4, 5, 6, 0, 1, 2]
      : a === 2 || a === 8
      ? [0, 1, 2, 3, 4, 5, 6]
      : a === 3 || a === 11
      ? [6, 0, 1, 2, 3, 4, 5]
      : a === 6
      ? [5, 6, 0, 1, 2, 3, 4]
      : a === 5
      ? [1, 2, 3, 4, 5, 6, 0]
      : a === 9 || a === 12
      ? [4, 5, 6, 0, 1, 2, 3]
      : a === 10
      ? [2, 3, 4, 5, 6, 0, 1]
      : "";

  const dayIndex = dayNumArr.indexOf(b % 7);

  console.log(dayArr[dayIndex]);
  return dayArr[dayIndex];
}

solution(2, 7);

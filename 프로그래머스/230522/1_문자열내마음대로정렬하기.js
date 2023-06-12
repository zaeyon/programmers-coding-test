function solution(strings, n) {
  var answer = [];
  strings.sort((a, b) => {
    if (a[n] < b[n]) {
      return -1;
    } else if (a[n] > b[n]) {
      return 1;
    } else if (a[n] === b[n]) {
      if (a < b) {
        return -1;
      } else if (a >= b) {
        return 1;
      }
    }
  });

  console.log("strings", strings);

  return strings;
}

solution(["abce", "abcd", "cdx"], 2);

function solution(name, yearning, photo) {
  var answer = [];

  photo.forEach((item) => {
    let yearningSum = 0;
    item.forEach((n) => {
      if (name.includes(n)) {
        yearningSum += yearning[name.indexOf(n)];
      } else {
        yearningSum += 0;
      }
    });
    answer.push(yearningSum);
  });

  console.log(answer);

  return answer;
}

solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
);

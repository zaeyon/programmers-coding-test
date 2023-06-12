function solution(n, m, section) {
  var answer = 0;

  let entireArr = new Array(section[section.length - 1] - section[0] + 1)
    .fill(0)
    .map((_, index) => {
      if (section.includes(section[0] + index)) {
        return {
          value: section[0] + index,
          filled: false,
        };
      } else {
        return {
          value: section[0] + index,
          filled: true,
        };
      }
    });

  console.log("entireArr", entireArr);

  if (entireArr.length <= m) {
    answer = 1;
  } else {
    for (let i = 0; i <= entireArr.length - m; i++) {
      let isPainting = false;
      for (let j = i; j < i + m; j++) {
        if (!entireArr[j].filled) {
          isPainting = true;
          entireArr[j].filled = true;
        }
      }
      if (isPainting) {
        answer++;
      }
    }
  }

  console.log("answer", answer);

  return answer;
}

solution(4, 1, [1, 2, 3, 4]);

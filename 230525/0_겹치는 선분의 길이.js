function solution(lines) {
  let answer = 0;
  let line1 = [];
  let line2 = [];
  let line3 = [];
  let overlap = new Set();
  let overlapArr = [];

  for (let i = lines[0][0]; i <= lines[0][1]; i++) {
    line1.push(i);
  }
  for (let j = lines[1][0]; j <= lines[1][1]; j++) {
    line2.push(j);
  }
  for (let w = lines[2][0]; w <= lines[2][1]; w++) {
    line3.push(w);
  }

  let overlapArr1 = [];
  let overlapArr2 = [];
  let overlapArr3 = [];
  let overlap1 = 0;
  let overlap2 = 0;
  let overlap3 = 0;

  line1.forEach((item1, index) => {
    if (line2.includes(item1)) {
      overlapArr1.push(item1);
    }

    if (line3.includes(item1)) {
      overlapArr2.push(item1);
    }
  });

  line2.forEach((item2, index) => {
    if (line3.includes(item2)) {
      overlapArr3.push(item2);
    }
  });

  if (overlapArr1.length >= 2) {
    overlapArr1.forEach((item) => {
      overlap.add(item);
    });
  }
  if (overlapArr2.length >= 2) {
    overlapArr2.forEach((item) => {
      overlap.add(item);
    });
  }
  if (overlapArr3.length >= 2) {
    overlapArr3.forEach((item) => {
      overlap.add(item);
    });
  }

  console.log(line1);
  console.log(line2);
  console.log(line3);
  console.log("overlap", overlap);
  console.log("overlapArr3", overlapArr3);

  overlapArr = Array.from(overlap).sort((a, b) => a - b);
  overlapArr.forEach((item, index) => {
    if (item === overlapArr[index + 1] - 1) answer++;
  });

  console.log("answer", answer);
  return answer;
}

solution([
  [-1, 1],
  [1, 3],
  [3, 9],
]);

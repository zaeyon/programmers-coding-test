function solution(s) {
  var answer = 0;
  var strArr = s.split("");
  const startArr = ["(", "{", "["];
  const endArr = [")", "}", "]"];

  for (let i = 0; i < strArr.length; i++) {
    const sliced = strArr.slice(0, i);
    const rotatedStrArr = strArr.concat(sliced).filter((_, j) => j >= i);
    if (
      endArr.includes(rotatedStrArr[0]) ||
      startArr.includes(rotatedStrArr[rotatedStrArr.length - 1])
    ) {
      continue;
    }

    let stack = [];
    for (let k = 0; k < rotatedStrArr.length; k++) {
      if (startArr.includes(rotatedStrArr[k])) {
        stack.push(rotatedStrArr[k]);
      } else if (endArr.includes(rotatedStrArr[k])) {
        console.log("rotatedStrArr k", rotatedStrArr, k);
        if (
          stack[stack.length - 1] === startArr[endArr.indexOf(rotatedStrArr[k])]
        ) {
          stack.pop();
        }
      }

      console.log("stack", stack);
    }

    if (stack.length === 0) {
      answer++;
    }
  }

  console.log("answer", answer);

  return answer;
}

solution("}}}");

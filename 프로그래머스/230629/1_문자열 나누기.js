function solution(s) {
  var answer = 0;
  let x = s[0];
  let numX = 0;
  let num = 0;

  while (s !== "") {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === x) numX++;
      else num++;

      if (numX === num) {
        s = s.substring(i + 1, s.length + 1);
        x = s[0];
        console.log("s", s);
        answer++;
        numX = 0;
        num = 0;
        break;
      }

      if (i === s.length - 1 && numX !== num) {
        answer++;
        console.log("answer", answer);
        return answer;
      }
    }
  }

  console.log("answer", answer);

  return answer;
}

solution("aaabbaccccabba");

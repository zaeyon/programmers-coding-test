function solution(s) {
  var answer = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      const preStr = s.substring(0, i);
      const nextStr = s.substring(i + 2);

      s = preStr + nextStr;
      i = 0;
    }
  }

  if ((s.length === 2 && s[0] === s[1]) || s.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

solution("cdcd");

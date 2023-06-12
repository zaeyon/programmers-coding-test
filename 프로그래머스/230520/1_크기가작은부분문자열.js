function solution(t, p) {
  var answer = 0;
  for (let i = 0; i < t.length; i++) {
    const slicedStr = t.slice(i, i + p.length);
    if (slicedStr.length === p.length && slicedStr <= p) {
      answer++;
    }
  }

  console.log(answer);
  return answer;
}

solution("10203", "15");

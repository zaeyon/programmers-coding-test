function solution(my_string) {
  var answer = 0;
  const reg = /[^1-9]/g;
  const numStr = my_string.replace(reg, " ");
  answer = numStr.split(" ").reduce((acc, cur) => acc + +cur, 0);

  console.log(answer);

  return answer;
}

solution("123134a232141414ffff24012");

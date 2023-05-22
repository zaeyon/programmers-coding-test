function solution(chicken) {
  var answer = 0;
  var num = chicken;

  while (num !== 0) {
    num = Math.floor(chicken / 10);
    answer += Math.floor(chicken / 10);
    chicken = Math.floor(chicken / 10) + (chicken % 10);
  }

  console.log(answer);
  return answer;
}

solution(1999);

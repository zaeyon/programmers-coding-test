function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);


  console.log("answer", answer);
  return answer;
}

solution([70, 50, 80, 50]);

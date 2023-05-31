function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);

  for (let i = 0; i < people.length; i++) {
    if (people[i] + people[i + 1] <= limit) {
      answer++;
      i++;
    } else {
      answer++;
    }
  }

  console.log("answer", answer);
  return answer;
}

solution([70, 50, 80, 50]);

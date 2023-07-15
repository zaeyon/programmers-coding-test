function solution(s, skip, index) {
  var answer = "";
  var alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i of skip) {
    const index = alphabetArr.findIndex((alphabet) => alphabet === i);
    alphabetArr.splice(index, 1);
  }

  answer = s.split("").reduce((prev, cur) => {
    return (
      prev +
      alphabetArr[
        (alphabetArr.findIndex((i) => i === cur) + index) % alphabetArr.length
      ]
    );
  }, "");

  console.log("answer", answer);
  return answer;
}

solution("aukks", "wbqd", 5);

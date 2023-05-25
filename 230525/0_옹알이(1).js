function solution(babbling) {
  const regExp = /aya|ye|woo|ma/;
  var answer = 0;

  babbling.forEach((babblingItem) => {
    const splited = babblingItem.split(regExp);
    if (splited.join("") === "") answer++;
  });

  console.log("answer", answer);
  return answer;
}

solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);

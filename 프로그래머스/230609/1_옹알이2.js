function solution(babbling) {
  var answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    if (babbling[i].includes("ayaaya")) continue;
    if (babbling[i].includes("yeye")) continue;
    if (babbling[i].includes("woowoo")) continue;
    if (babbling[i].includes("mama")) continue;

    while (
      (babbling[i].trim() !== "" && babbling[i].includes("aya")) ||
      babbling[i].includes("ye") ||
      babbling[i].includes("woo") ||
      babbling[i].includes("ma")
    ) {
      console.log("babbling[i]", babbling[i]);
      babbling[i] = babbling[i].replace("aya", " ");
      babbling[i] = babbling[i].replace("ye", " ");
      babbling[i] = babbling[i].replace("woo", " ");
      babbling[i] = babbling[i].replace("ma", " ");
    }

    if (babbling[i].trim() === "") {
      answer++;
    }
  }

  console.log("answer", answer);

  return answer;
}

solution(["aya", "yee", "u", "maa"]);

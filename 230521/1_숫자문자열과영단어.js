function solution(s) {
  var answer = s;
  const strArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  strArr.forEach((item, index) => {
    const regex = new RegExp(`${item}`, "g");
    answer = answer.replace(regex, index);
  });

  console.log(answer);

  return Number(answer);
}

solution("23four5six7");

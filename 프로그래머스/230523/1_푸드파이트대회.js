function solution(food) {
  var answer = "";
  food.forEach((item, index) => {
    if (index > 0) {
      answer = answer.padEnd(Math.floor(item / 2) + answer.length, index);
    }
  });

  console.log(answer + "0" + answer.split("").reverse().join(""));

  return answer + "0" + answer.split("").reverse().join("");
}

function solution(polynomial) {
  var answer = "";
  const arr = polynomial.split(" + ");
  let x_coef = 0;
  let cons = 0;
  console.log(arr);

  arr.forEach((item) => {
    if (item.includes("x")) {
      if (item === "x") {
        x_coef += 1;
      } else {
        x_coef += 1 * item.substring(0, item.length - 1);
      }
    } else {
      cons += +item;
    }
  });

  answer =
    x_coef === 0
      ? `${cons}`
      : cons === 0
      ? x_coef === 1
        ? `x`
        : `${x_coef}x`
      : x_coef === 1
      ? `x + ${cons}`
      : `${x_coef}x + ${cons}`;

  console.log("answer", answer);

  return answer;
}

solution("x");

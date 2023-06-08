function solution(X, Y) {
  var answer = "";

  const arrX = X.split("");
  const arrY = Y.split("");

  for (let i = 9; i >= 0; i--) {
    const numInXLength = arrX.filter((num) => Number(num) === i).length;
    const numInYLength = arrY.filter((num) => Number(num) === i).length;

    answer += String(i).repeat(Math.min(numInXLength, numInYLength));
  }

  if (answer === "") answer = "-1";
  if (Number(answer) === 0) answer = "0";

  return answer;
}

solution("5525", "1255");

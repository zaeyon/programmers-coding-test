function solution(X, Y) {
  var answer = "";

  const arrX = X.split("");
  const arrY = Y.split("");
  const arr = [];

  if (arrX.length < arrY.length) {
    for (let i = 0; i < arrX.length; i++) {
      if (arrY.indexOf(arrX[i]) !== -1) {
        arrY.splice(arrY.indexOf(arrX[i]), 1);
        arr.push(arrX[i]);
        console.log("arrY", arrY);
      }
    }
  } else if (arrX.length >= arrY.length) {
    for (let j = 0; j < arrY.length; j++) {
      if (arrX.indexOf(arrY[j]) !== -1) {
        arrX.splice(arrX.indexOf(arrY[j]), 1);
        arr.push(arrY[j]);
      }
    }
  }

  console.log("arr", arr);
  if (arr.length === 0) return "-1";
  else {
    arr.sort((a, b) => Number(b) - Number(a));
    if (arr.join("") * 1 === 0) {
      return "0";
    } else {
      console.log("arr.join()", arr.join(""));
      return arr.join("");
    }
  }
}

solution("100", "123450");

function solution(s) {
  let answer = true;
  let arr = [];
  const strArr = s.split("");

  if (strArr[0] === ")" || strArr[strArr.length - 1] === "(") {
    console.log("ddd");
    return false;
  }

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "(") arr.push(1);
    else arr.pop();
  }

  if (arr.length === 0) return true;
  else return false;
}

solution("(())");

function solution(s, n) {
  var answer = "";
  const tmpArr = s.split("");
  tmpArr.forEach((item, index) => {
    if (item === " ") {
      answer += " ";
    } else if (item === item.toLowerCase()) {
      if (item.charCodeAt() + n > 122) {
        console.log("1", item);
        answer += String.fromCharCode(item.charCodeAt() + n - 122 + 96);
      } else {
        console.log("2", item);
        answer += String.fromCharCode(item.charCodeAt() + n);
      }
    } else {
      if (item.charCodeAt() + n > 90) {
        console.log("3", item);
        answer += String.fromCharCode(item.charCodeAt() + n - 90 + 64);
      } else {
        console.log("4", item);
        answer += String.fromCharCode(item.charCodeAt() + n);
      }
    }
  });

  console.log("answer", answer);
  return answer;
}

solution("a B z", 4);

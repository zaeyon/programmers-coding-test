function solution(n) {
  var answer = 0;
  var isAnswer = false;
  let tmp = n;

  while (!isAnswer) {
    tmp++;
    if (tmp.toString(2).replace(/0/g, "") === n.toString(2).replace(/0/g, "")) {
      isAnswer = true;
      console.log("tmp", tmp);
      return tmp;
    }
  }
}

solution(15);

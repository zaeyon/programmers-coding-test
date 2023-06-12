function solution(A, B) {
  var answer = 0;
  let arrA = A.split("");

  if (A === B) return 0;
  for (let i = 0; i < arrA.length; i++) {
    answer++;
    const lastItem = arrA[arrA.length - 1];
    arrA.pop();
    arrA.unshift(lastItem);

    if (arrA.join("") === B) {
      console.log("answer", answer);
      return answer;
    }
  }

  console.log("-1");
  return -1;
}

solution("atat", "tata");

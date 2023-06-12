function solution(a, b, n) {
  var answer = 0;
  let newCoke = n;
  let remain = n % a;

  while (newCoke >= a) {
    answer += Math.floor(newCoke / a) * b;
    remain = newCoke % a;
    newCoke = Math.floor(newCoke / a) * b + remain;
  }

  return answer;
}

solution(2, 1, 20);

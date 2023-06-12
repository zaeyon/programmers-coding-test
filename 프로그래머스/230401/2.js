function solution(price) {
  var answer = 0;
  if (100000 <= price && price < 300000) answer = price - price * 0.05;
  else if (300000 <= price && price < 500000) answer = price - price * 0.1;
  else if (500000 <= price) answer = price - price * 0.2;

  return answer;
}

solution(150000);

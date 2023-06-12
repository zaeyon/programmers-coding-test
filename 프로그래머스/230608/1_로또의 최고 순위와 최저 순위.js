function solution(lottos, win_nums) {
  var answer = [];
  let rankArr = [6, 5, 4, 3, 2, 1];
  let zeroNum = 0;
  let matched = 0;

  lottos.forEach((value, index) => {
    if (win_nums.includes(value)) matched++;
    if (value === 0) zeroNum++;
  });

  answer[0] =
    matched + zeroNum > 0 ? rankArr.indexOf(matched + zeroNum) + 1 : 6;
  answer[1] = matched > 0 ? rankArr.indexOf(matched) + 1 : 6;

  console.log("answer", answer);

  return answer;
}

solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);

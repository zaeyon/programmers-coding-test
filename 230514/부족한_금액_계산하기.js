function solution(price, money, count) {
  let accPrice = 0;
  for (let i = 1; i <= count; i++) {
    accPrice += price * i;
  }

  if (accPrice <= money) {
    return 0;
  } else {
    console.log(accPrice - money);
    return accPrice - money;
  }
}

solution(3, 20, 4);

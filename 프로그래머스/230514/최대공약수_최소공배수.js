function solution(n, m) {
  var GCD;
  var LCM;
  var max = n > m ? n : m;
  var min = n > m ? m : n;

  let min2 = min;

  if (max % min === 0) {
    GCD = min;
    LCM = (max * min) / GCD;

    console.log([GCD, LCM]);

    return [GCD, LCM];
  } else {
    let remain = max % min;

    while (min % remain !== 0) {
      remain = min % remain;
    }

    GCD = min / remain;
    LCM = (max * min) / GCD;

    console.log([GCD, LCM]);

    return [GCD, LCM];
  }
}

solution(2, 10);

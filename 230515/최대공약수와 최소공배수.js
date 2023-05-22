function solution(n, m) {
  var GCD;
  var LCM;
  var max = n > m ? n : m;
  var min = n > m ? m : n;

  console.log("max", max);
  console.log("min", min);

  if (max % min === 0) {
    GCD = min;
    LCM = (max * min) / GCD;

    console.log([GCD, LCM]);

    return [GCD, LCM];
  } else {
    let tmpMin = min;
    let remain = max % min;
    while (tmpMin % remain !== 0) {
      const tmpRemain = tmpMin % remain;
      tmpMin = remain;
      remain = tmpRemain;
    }

    GCD = remain;
    LCM = (max * min) / GCD;

    console.log([GCD, LCM]);

    return [GCD, LCM];
  }
}

solution(2, 5);

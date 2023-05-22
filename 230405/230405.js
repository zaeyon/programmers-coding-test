function solution(n) {
  let answer = [];
  const isPrimeNumber = (n) => {
    if (n === 2) {
      return true;
    }

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  };

  const getFactorization = (n) => {
    if (isPrimeNumber(n)) {
      if (answer.indexOf(n) === -1) {
        answer.push(n);
      }
      return;
    } else {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          if (answer.indexOf(i) === -1) {
            answer.push(i);
          }
          getFactorization(n / i);
          return;
        }
      }
    }
  };

  getFactorization(n);
  console.log(answer);
}

solution(4);

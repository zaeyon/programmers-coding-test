function solution(n, lost, reserve) {
  let num = lost.reduce(
    (acc, cur) => (reserve.includes(cur) ? acc + 1 : acc),
    0
  );
  const filteredLost = lost
    .filter((item) => !reserve.includes(item))
    .sort((a, b) => a - b);
  const filteredReserve = reserve
    .filter((item) => !lost.includes(item))
    .sort((a, b) => a - b);

  console.log("lost", filteredLost);
  console.log("reserve", filteredReserve);

  for (let i = 0; i < filteredLost.length; i++) {
    if (filteredReserve.includes(filteredLost[i])) {
      filteredReserve.splice(filteredReserve.indexOf(filteredLost[i]), 1);
      num++;
    } else {
      if (filteredReserve.includes(filteredLost[i] - 1)) {
        filteredReserve.splice(filteredReserve.indexOf(filteredLost[i] - 1), 1);
        num++;
        continue;
      }
      if (filteredReserve.includes(filteredLost[i] + 1)) {
        filteredReserve.splice(filteredReserve.indexOf(filteredLost[i] + 1), 1);
        num++;
        continue;
      }
    }
  }

  console.log("answer", n - lost.length + num);

  return n - lost.length + num;
}

solution(4, [3, 1], [2, 4]);

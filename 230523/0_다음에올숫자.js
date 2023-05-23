function solution(common) {
  const aritArr = common.map((_, index) => {
    return common[0] + index * (common[1] - common[0]);
  });

  let geoArr = common.map((_, index) => {
    return common[0] * index * (common[1] / common[0]);
  });

  geoArr[0] = common[0];

  const equals = (a, b) => {
    if (a.length === b.length) {
      return a.every((v, i) => v === b[i]);
    }
  };

  console.log(common);
  console.log(aritArr);
  console.log(geoArr);

  if (equals(common, aritArr)) {
    return common[0] + common.length * (common[1] - common[0]);
  } else if (equals(common, geoArr)) {
    return common[0] * common.length * (common[1] / common[0]);
  }
}

solution([2, 4, 8]);

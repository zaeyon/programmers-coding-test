function solution(s) {
  let zeroNum = 0;
  let changeNum = 0;
  let tmpLength = s;

  while (tmpLength !== "1") {
    changeNum++;
    const zeroArr = tmpLength.match(/0/g);
    if (zeroArr) {
      zeroNum += zeroArr.length;
    }
    tmpLength = tmpLength.replace(/0/g, "").length.toString(2);
  }

  console.log([changeNum, zeroNum]);

  return [changeNum, zeroNum];
}

solution("1111111");

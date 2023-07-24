function solution(numbers, hand) {
  var answer = "";
  var leftNum = [1, 4, 7];
  var rightNum = [3, 6, 9];
  var centerNum = {
    2: [1, 3],
    5: [1, 2],
    8: [1, 1],
    0: [1, 0],
  };

  var leftHand = [0, 0];
  var rightHand = [2, 0];

  answer = numbers.map((num) => {
    console.log("leftHand", leftHand);
    console.log("rightHand", rightHand);
    if (leftNum.includes(num)) {
      if (num === 1) leftHand = [0, 3];
      if (num === 4) leftHand = [0, 2];
      if (num === 7) leftHand = [0, 1];
      return "L";
    }
    if (rightNum.includes(num)) {
      if (num === 3) rightHand = [2, 3];
      if (num === 6) rightHand = [2, 2];
      if (num === 9) rightHand = [2, 1];
      return "R";
    }

    const coor = centerNum[num];
    const leftDistance =
      Math.abs(coor[0] - leftHand[0]) + Math.abs(coor[1] - leftHand[1]);
    const rightDistance =
      Math.abs(coor[0] - rightHand[0]) + Math.abs(coor[1] - rightHand[1]);

    if (leftDistance > rightDistance) {
      rightHand = coor;
      return "R";
    } else if (leftDistance < rightDistance) {
      leftHand = coor;
      return "L";
    } else {
      if (hand === "right") {
        rightHand = coor;
        return "R";
      } else {
        leftHand = coor;
        return "L";
      }
    }
  });

  console.log("answer", answer.join(""));

  return answer;
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right");

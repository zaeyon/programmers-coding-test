function solution(N, stages) {
  var stageArr = new Array(N).fill(0).map((_, index) => index + 1);
  console.log("stageArr", stageArr);

  var percenArr = new Array(N).fill(0);

  stageArr.forEach((stage, index) => {
    const curStageNum = stages.filter((item) => item === stage).length;
    const reaStageNum = stages.filter((item) => item >= stage).length;
    percenArr[index] = { per: curStageNum / reaStageNum, stage: index + 1 };
  });

  percenArr.sort((a, b) => {
    if (a.per === b.per) {
      return 0;
    } else {
      return b.per - a.per;
    }
  });

  console.log("percenArr", percenArr);
  return percenArr.map((item) => item.stage);
}

solution(4, [4, 4, 4, 4, 4]);

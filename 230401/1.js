function solution(array) {
  const tmpArray = [...new Set(array)];
  let answer = 0;
  let maxElement;
  let maxFreq = 1;
  let maxElements = [];

  if (tmpArray.length === 1) {
    maxElement = tmpArray[0];
  } else {
    tmpArray.forEach((tmpElement) => {
      let freq = 0;
      array.forEach((element, index) => {
        if (tmpElement === element) {
          console.log("element", element);
          freq++;
        }
      });
      if (maxFreq < freq) {
        maxElement = tmpElement;
        maxFreq = freq;
        maxElements = [tmpElement];
      } else if (maxFreq === freq) {
        maxElements.push(tmpElement);
      }
      console.log("maxElement", maxElement);
    });
  }
  if (maxElements.length > 1) {
    answer = -1;
  } else {
    answer = maxElement;
  }
  console.log("answer", answer);
  return answer;
}

solution([1, 1, 2, 2]);

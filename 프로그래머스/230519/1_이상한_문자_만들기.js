function solution(s) {
  const wordArr = s.split(" ");

  wordArr.forEach((item, index1) => {
    const itemArr = item.split("");
    itemArr.forEach((i, index2) => {
      if (index2 % 2 === 0) {
        itemArr[index2] = i.toUpperCase();
      } else {
        itemArr[index2] = i.toLowerCase();
      }
    });

    wordArr[index1] = itemArr.join("");
  });

  console.log(wordArr.join(" "));

  return wordArr.join(" ");
}

solution("try hello world");

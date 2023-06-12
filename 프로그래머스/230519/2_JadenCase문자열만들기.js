function solution(s) {
  let lowerArr = s.split("").map((item, index) => item.toLowerCase());
  let jadenArr = lowerArr.map((item, index) => {
    if (item !== " " && (lowerArr[index - 1] === " " || index === 0)) {
      return item.toUpperCase();
    } else {
      return item;
    }
  });

  return jadenArr.join("");
}

solution("3people unFollowed  me");

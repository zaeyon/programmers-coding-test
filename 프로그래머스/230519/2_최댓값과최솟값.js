function solution(s) {
  var answer = "";
  const tmpArr = s.split(" ");

  return `${Math.min(tmpArr) + " " + Math.max(tmpArr)}`;
}

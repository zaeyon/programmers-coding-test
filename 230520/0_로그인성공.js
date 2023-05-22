// forEach에는 return 사용할경우 반복문 종료X, continue처럼 동작

function solution(id_pw, db) {
  var answer = "";

  for (let i = 0; i < db.length; i++) {
    if (db[i][0] === id_pw[0]) {
      if (db[i][1] === id_pw[1]) {
        return "login";
      } else {
        return "wrong pw";
      }
    }
  }

  return "fail";
}

solution(
  ["meosseugi", "1234"],
  [
    ["rardss", "123"],
    ["yyoom", "1234"],
    ["meosseugi", "1234"],
  ]
);

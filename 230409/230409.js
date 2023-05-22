function solution(numbers) {
  const regArr = [
    { reg: /zero/g, str: "zero" },
    { reg: /one/g, str: "one" },
    { reg: /two/g, str: "two" },
    { reg: /three/g, str: "three" },
    { reg: /four/g, str: "four" },
    { reg: /five/g, str: "five" },
    { reg: /six/g, str: "six" },
    { reg: /seven/g, str: "seven" },
    { reg: /eight/g, str: "eight" },
    { reg: /nine/g, str: "nine" },
  ];

  regArr.forEach((item, index) => {
    if (numbers.indexOf(item.str) > -1) {
      const tmpStr = numbers.replace(item.reg, index);
      console.log(tmpStr);
      numbers = tmpStr;
    }
  });

  return Number(numbers);
}

solution(
  "onetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothree"
);

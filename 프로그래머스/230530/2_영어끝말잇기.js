function solution(n, words) {
  for (let i = 0; i < words.length; i++) {
    if (
      i !== words.indexOf(words[i]) ||
      (words[i][0] !== words?.[i - 1]?.[words?.[i - 1]?.length - 1] && i > 0)
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
  }

  return [0, 0];
}

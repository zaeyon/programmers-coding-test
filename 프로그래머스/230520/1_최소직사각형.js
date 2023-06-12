// 배열 구조 분해 할당

function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (h > w ? [h, w] : [w, h]));

  const [maxW, maxH] = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxW) maxW = w;
    if (h > maxH) maxH = h;
  });

  return maxW * maxH;
}

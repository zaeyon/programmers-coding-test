function solution(nums) {
  const numsSet = new Set(nums);
  if (numsSet.size >= nums.length / 2) {
    return nums.length / 2;
  } else {
    return numsSet.size;
  }
}

solution([3, 3, 3, 2, 2, 2]);

function solution(nums) {
  var answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let w = j + 1; w < nums.length; w++) {
        const num = nums[i] + nums[j] + nums[w];
        let isNoPrime = false;

        for (let z = 2; z <= Math.sqrt(num); z++) {
          if (Number.isInteger(num / z)) isNoPrime = true;
        }

        if (!isNoPrime) answer++;
      }
    }
  }

  return answer;
}

solution([1, 2, 7, 6, 4]);

function solution(cards1, cards2, goal) {
  let index1 = 0;
  let index2 = 0;

  for (let i = 0; i < goal.length; i++) {
    if (cards1.includes(goal[i])) {
      if (cards1.indexOf(goal[i]) !== index1 + 1) {
        return "No";
      }

      index1 = cards1.indexOf(goal[i]);
    }

    if (cards2.includes(goal[i])) {
      if (cards2.indexOf(goal[i]) !== index2 + 1) {
        return "No";
      }

      index2 = cards2.indexOf(goal[i]);
    }
  }

  return "Yes";
}

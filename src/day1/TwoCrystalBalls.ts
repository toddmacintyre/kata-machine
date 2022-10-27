function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let break1 = -1;

  for (let i = jumpAmount; i < breaks.length; i+= jumpAmount) {
    if (breaks[i] === true) {
      break1 = i;
      break;
    }
  }

  for (let j = break1 - jumpAmount; j <= break1; j++) {
    if (breaks[j] === true) {
      return j;
    }
  }

  return -1;
}














function two_crystal_balls2(breaks: boolean[]): number {
  const jumpIncrement = Math.pow(breaks.length, 1/2);

  let breaksAt = -1;
  for (let i = 0; i < breaks.length; i += jumpIncrement) {
    if (breaks[i]) {
      breaksAt = i;
      break;
    }
  }

  if (breaksAt !== -1) {
    for (let j = breaksAt - jumpIncrement; j <= breaksAt; j++) {
      if (breaks[j]) {
        return j;
      }
    }
  }

  return breaksAt;

}


















export default two_crystal_balls2;


// key is traversing with the first ball in increments of a factor of n. this allows for more effient time complexity at scale. ex, O(sqrt n) vs O(n).
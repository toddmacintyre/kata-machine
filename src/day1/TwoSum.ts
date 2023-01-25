// Two-sum: given an array and an integer N, find all the non-repeating pairs that sum to N.

export default function twoSum(array: number[], n: number): [number, number][] {
  let result: [number, number][] = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === n) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

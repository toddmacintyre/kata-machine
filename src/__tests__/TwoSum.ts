import two_sum from "@code/TwoSum";

test("two sum", function () {
    const array = [1,2,3,4,5,6,7,8,9];
    const N = 3;
    const result = two_sum(array, N);
    expect(result.includes([1, 2]));
});

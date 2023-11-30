function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const neededValue = target - nums[i];

    if (neededValue in numMap) {
      return [numMap[neededValue], i];
    }

    numMap[nums[i]] = i;
  }

  return [];
}

let nums = [2, 7, 4, 9];
let target = 11;

let result = twoSum(nums, target);
console.log(result);

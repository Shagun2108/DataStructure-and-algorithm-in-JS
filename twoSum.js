function twoSum(nums, target) {
  let start = 0;
  let last = nums.length - 1;
  let result = [];

  while (start <= last) {
    let sum = nums[start] + nums[last];
    if (sum == target) {
      return { start, last };
    } else if (sum > target) {
      last--;
    } else {
      start++;
    }
  }
  return {};
}

const num = [2, 4, 7, 8, 10];
const target = 9;

console.log(twoSum(num, target));

function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (compliment in numMap && numMap[compliment] !== i) {
      return [numMap[compliment], i];
    }

    numMap[nums[i]] = i;
  }
}

let arr = [3, 2, 4];
let target = 6;
// let arr = [2, 7, 11, 15];
// let target = 9;
/**
 * 哈希表
 * 我们遍历到数字 2 时，用 9 减去 2，就会得到 7，
 * 若 7 不存在，那么我们需要将 7作为 key，将 7 的索引作为value，存入哈希表
 * 若 7 存在于哈希表中，我们就可以直接返回 7 在哈希表里所在的项的value，以及当前遍历到的下标
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
console.log(twoSum(arr, target));

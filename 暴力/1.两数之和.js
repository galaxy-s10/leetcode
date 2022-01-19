let arr = [3, 2, 4];
let target = 6;
// let arr = [2, 7, 11, 15];
// let target = 9;
/**
 * 思想：两层for循环。
 * 第1次循环：第1个数和后面的（arr.leng-1）数相加比较...
 * 第2次循环：第2个数和后面的（arr.leng-1）数相加比较...
 * 第3次循环：第3个数和后面的（arr.leng-1）数相加比较...
 * ...
 * 第arr.length-1次循环，第arr.length个数和后面的（arr.leng-1）数相加比较...
 * 注意：
 * 1，边界问题，因为内层循环的指针等于外层指针+1，因此为了防止内层指针
 * 越界，外层的遍历的最多次数应该为arr的长度-2，即指针最大值要小于（而
 * 且不能小于等于）arr.length-1
 * 2，每次循环，第二层的指针都要从第一层的指针后开始，
 * 不能固定从零开始，否则第一层指针移动到2了，如果第二层指针还是从0开始
 * 的话，这样会导致重复比较（因为第一层指针移动到2的时候，代表了下标为2
 * 的之前的数都是比较过了，），
 * 而且还会导致错乱。
 */
var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
        return result;
      }
    }
  }
  return result;
};
console.log(twoSum(arr, target));

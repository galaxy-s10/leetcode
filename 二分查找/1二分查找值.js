/**
 * 描述:请实现无重复数字的升序数组的二分查找
 * 给定一个升序的、无重复数字的整型数组和一个目标值写一个函数搜索中的，如果目标值存在返回下标（下标从 0 开始），否则返回 -1
 * 输入：[-1,0,3,4,6,10,13,14],13
 * 返回值：6
 * 说明：13 出现在nums中并且下标为 6
 */

/**
 * @param nums int整型一维数组
 * @param target int整型
 * @return int整型
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.ceil((right + left) / 2);
  // 左右指针是有可能重合的
  while (left <= right) {
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      // 因为nums是升序的，如果中间值比target小，则代表target一定在中间值的右边，则要在mid的右边开始继续找
      left = mid + 1; //排除掉已经查找过的mid
      mid = Math.ceil((right + left) / 2);
    } else {
      // 因为nums是升序的，如果中间值比target大，则代表target一定在中间值的左边，则要在mid的左边开始继续找
      right = mid - 1; //排除掉已经查找过的mid
      mid = Math.ceil((right + left) / 2);
    }
  }
  return -1;
}

// 优化版
function search1(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // 左右指针是有可能重合的
  while (left <= right) {
    let mid = Math.ceil((right + left) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      // 因为nums是升序的，如果中间值比target小，则代表target一定在中间值的右边，则要在mid的右边开始继续找
      left = mid + 1; //排除掉已经查找过的mid
    } else {
      // 因为nums是升序的，如果中间值比target大，则代表target一定在中间值的左边，则要在mid的左边开始继续找
      right = mid - 1; //排除掉已经查找过的mid
    }
  }
  return -1;
}

let nums = [-1, 0, 3, 4, 6, 10, 13, 14];
let target = 13;
console.log(search(nums, target));
console.log(search1(nums, target));

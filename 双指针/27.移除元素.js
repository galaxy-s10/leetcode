/**
 * 27.移除元素
 * 给你一个数组 nums 和一个值 val，
 * 你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 输入：nums = [3,2,2,3], val = 3 输出：2, nums = [2,2]
 * 输入：nums = [0,1,2,2,3,0,4,2], val = 2 输出：5, nums = [0,1,4,0,3]
 * 总结：即只要保证数组的新长度内没有val就可
 */
//TODO 这道题和移动0有点类似，区别是：val是给定的而不是固定0，而且移动0要求相对顺序不变。
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  /**
   * 思路一❎：将val全都移到最后。一次顺序遍历，遍历到item等于val，
   * 则将该item和他的后一项交换位置（冒泡），
   * 如果该item和后一项item是一样的，如nums=[2,2,1],val=2，第一个2和第二个2交换位置，
   * 导致第二个2放到了第一位，很明显最终的nums第一位就是val，就有问题
   * 思路二❎：不和后一项交换，而是和数组最后的一项交换位置，
   * 如果该item和最后item都是等于val，也是会出错。
   */
  // let len = nums.length;
  // for (let i = 0; i < len; i++) {
  //   if (nums[i] === val) {
  //     len = len - 1;
  //     [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  //   }
  // }
  // return len;
  /**
   * 思路：二次遍历，将val移到最后面
   * 优点：能将所有val移到最后。
   * 缺点：同一个val可能会被移动多次才能最终移到最后，因此获取不到最新的length
   */
  // let len = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length - 1 - i; j++) {
  //     if (nums[j] === val) {
  //       len += 1;
  //       [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
  //     }
  //   }
  // }
  // return len;
  /**
   * 正确思路✅：一次顺序遍历，遍历到的item不等于val，
   * 则将item插入到已经处理好的数组尾部。
   * 快慢指针，快指针每次往后移一位，判断快指针指向的值是否等于val，
   * 不等于的话，则把当前快指针的值设置到慢指针的位置，然后慢指针加一
   * 即慢指针之前的数据都是处理好的
   */
  var slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
};
let nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3));

// let nums = [0, 1, 2, 2, 3, 0, 4, 2];
// console.log(removeElement(nums, 2));

// let nums = [2, 2];
// console.log(removeElement(nums, 2));

// let nums = [0, 1, 2, 2, 3, 0, 4, 2];
// console.log(removeElement(nums, 2));

// let nums = [3, 2, 2, 3];
// console.log(removeElement(nums, 2));
console.log(nums, 44444444);

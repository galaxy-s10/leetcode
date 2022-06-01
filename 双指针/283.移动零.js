/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，
 * 同时保持非零元素的相对顺序。
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * 返回值是数组
 */

/**
 * 方法1✅
 * 1,一次遍历（固定nums.length次）,将找到的0改成false,并插入0到数组末尾
 * 2,再一次遍历将false删掉。
 * 缺点：性能垃圾
 * @param {number[]} nums
 */
var moveZeroes1 = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.push(0);
      nums[i] = false;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === false) {
      nums.splice(i, 1);
    }
  }
  console.log("方法1✅");
};

/**
 * 方法2✅
 * 一次倒序遍历（固定nums.length次）,将找到的0插入到数组末尾,
 * 同时将该0删掉。因为插入了一个元素然后又删除了一个元素,对消了,
 * 相当于把这个0移到了最后。
 * 而且，因为是倒序遍历，执行完上面的操作后，继续遍历的时候，遍历的
 * 元素仍旧是未遍历过的，这样遍历一轮其实就得到了结果。
 * 缺点：性能垃圾
 * @param {number[]} nums
 */
var moveZeroes2 = function (nums) {
  let len = nums.length;
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums[nums.length] = 0;
      nums.splice(i, 1);
    }
  }
  console.log("方法2✅");
};

/**
 * 一次顺序遍历,将所有0移到最后,[0,0,1]===>[0,1,0]❌,非零数不移动导致的相对顺序乱了
 * 一次顺序遍历,将所有非0移到开头❌,[0,1,2]===>[2,1,0],移到开头的非零数的相对位置乱了
 */

/**
 * 方法3✅
 * 一次顺序遍历,将所有0移到开头,并记录一共有几个0
 * 遍历完后，再把开头的所有0删掉，然后放到最后。
 * 缺点：性能垃圾。
 * @param {number[]} nums
 */
var moveZeroes3 = function (nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      total++;
      nums.splice(i, 1);
      nums.unshift(0);
    }
  }
  nums.splice(0, total);
  for (let i = 0; i < total; i++) {
    nums.push(0);
  }
  console.log("方法3✅");
};

/**
 * 方法4✅
 * 一次倒序遍历,删掉所有0,并记录一共有几个0
 * 遍历完后，再把记录到的所有0都插入到最后
 * 缺点：性能差，但不算垃圾。
 * @param {number[]} nums
 */
var moveZeroes4 = function (nums) {
  let total = 0;
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === 0) {
      total++;
      nums.splice(i, 1);
    }
  }
  for (let i = 0; i < total; i++) {
    nums.push(0);
  }
  console.log("方法4✅");
};

/**
 * 方法5✅，无脑冒泡
 * 一共循环arr.length轮，每轮循环交换arr.length-1次
 * [0, 1, 0, 3, 12]：
 * 第一轮：[1, 0, 3, 12, 0]
 * 第二轮：[1, 3, 12, 0, 0]
 * 第三轮：[1, 3, 12, 0, 0]
 * 第四轮：[1, 3, 12, 0, 0]
 * 第五轮：[1, 3, 12, 0, 0]
 * 缺点：性能极其垃圾。
 * @param {number[]} nums
 */
var moveZeroes5 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] === 0) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  console.log("方法5✅，无脑冒泡");
};

/**
 * 方法6✅，升级版冒泡
 * 缺点：性能差
 * @param {number[]} nums
 */
var moveZeroes6 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] === 0) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  console.log("方法6✅，升级版冒泡");
};

/**
 * 方法7✅
 * 一次遍历，直接将遍历到的不是0的数字从数组的下标0开始赋值，
 * 这样不是0的数就会按照之前的顺序重新排到前面，最后再补剩余的0
 * 优点：性能好
 * @param {number[]} nums
 */
var moveZeroes7 = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log("方法7✅");
};

/**
 * 方法8✅
 * 双指针,其实核心思想还是将非0数往前移动：
 * 快慢两个指针，一开始在同一起点，然后慢指针不动，快指针一步步
 * 往前走，快指针指到的数不为0，就和慢指针的数交换，然后慢指针
 * 向前走一步，这样如果一共交换了n次，其实就是有n个不为0的数按顺序
 * 移到开头了，最后剩下的就都是0。
 * [0, 1, 0, 3, 12]
 * 第1次：[0, 1, 0, 3, 12]，slow:0，fast:0
 * 第2次：[1, 0, 0, 3, 12]，slow:0，fast:1
 * 第3次：[1, 0, 0, 3, 12]，slow:1，fast:2
 * 第4次：[1, 3, 0, 0, 12]，slow:2，fast:3
 * 第5次：[1, 3, 12, 0, 0]，slow:3，fast:4
 * 优点：性能好
 * @param {number[]} nums
 */
var moveZeroes8 = function (nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
  console.log("方法7✅");
};

var arr = [0, 1, 0, 3, 12];
console.log("原数组", arr);
moveZeroes8(arr);
console.log("结果", arr);

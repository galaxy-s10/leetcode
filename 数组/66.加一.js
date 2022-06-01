/**
 * 输入：digits = [1,2,3]，输出：[1,2,4]，解释：输入数组表示数字 123。
 * 输入：digits = [4,3,2,1]，输出：[4,3,2,2]，解释：输入数组表示数字 4321。
 * 输入：digits = [0]，输出：[1]
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += 1;
    if (digits[i] > 9) {
      /**
       * 这是错的，不是表面上的个位数满十，十位数就加一，
       * 因为如果十位数加一的话，可能是10，也就是两位数了，
       * 个十百千万亿位数的数字应该都是0-9，
       * 因此应该是每位数都加一，满十就变成0，
       * 即个位数加一满10，变成0，十位数加一满10，变成0，以此类推。
       */
      // digits[i-1] += 1;//错误！
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  //如果for循环里面没有中途return，则代表数组的第一位（因为是倒序遍历，
  //因此第一位就是最大位，即[9,9]代表数字99，它的第一位就是9）加一大于10，
  //因此需要在数组开头补一个一
  digits.unshift(1);
  return digits;
};
// @lc code=end

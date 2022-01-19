// 版本号：[1:true,2:true,3:true,4:true,5:false,6:false]

// 这个是题目提供的判断版本n是否是错误的版本
function isBadVersion(n) {
  if (n < 5) {
    // 5以下都不是错误的版本，所以返回false
    return false;
  } else {
    // 大于和等于5的版本都是错误的版本，所以返回true
    return true;
  }
}

/**
具体地，将左右边界分别初始化为 1 和 n，其中 n 是给定的版本数量。
设定左右边界之后，每次我们都依据左右边界找到其中间的版本，检查其是否为正确版本。
如果该版本为正确版本，那么第一个错误的版本必然位于该版本的右侧，我们缩紧左边界；
否则第一个错误的版本必然位于该版本及该版本的左侧，我们缩紧右边界。
 */

// 这是要求写的判断方法，n是给定的版本数量
var solution = function (n) {
  let left = -1;
  let right = n;
  let num = 0;
  while (left < right) {
    num++;
    // const mid = Math.floor(left + (right - left) / 2); // 防止计算时溢出
    const mid = Math.floor((left + right) / 2);
    console.log('当前中间值', mid);
    if (isBadVersion(mid)) {
      // 如果当前的中间版本是错误的版本，则代表第一个错误的版本一定在中间版本的左边！
      // 即答案在区间 [left,mid] 中
      right = mid; //这里因为mid没判断过，所以不用加一
    } else {
      // 如果当前的中间版本不是错误的版本，则代表第一个错误的版本一定在中间版本的右边！
      // 即答案在区间 [mid,right] 中
      left = mid + 1; //这里mid已经判断过了，因此排除加一，少判断一次mid
    }
  }
  console.log(`循环了${num}次`);
  // 此时有 left == right，区间缩为一个点，即为答案
  return left;
};

console.log(solution(10));

// 当然也可以用依次遍历的方法
try {
  for (let i = 1; i < 10; i++) {
    if (isBadVersion(i)) {
      throw new Error(`循环了${i}次`);
    }
  }
} catch (err) {
  console.log('结束循环', err.message);
}

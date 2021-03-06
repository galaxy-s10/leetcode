// 在元素升序，不重复的数组里面插入一个target值
let arr = [0, 1, 2, 4, 5, 6, 7];
let arr1 = [1, 3];

// 二分查找
function searchInsert(arr, target) {
  // 遍历有序数组
  let left = 0;
  let right = arr.length - 1;
  // 左右指针是有可能重合的(当数组只有两项时，第一次：left的下标是0,right的下标是1，第二次：left的下标是0,right的下标也是0)
  while (left <= right) {
    let mid = Math.ceil((right + left) / 2);
    if (target < arr[mid]) {
      // 因为数组是升序的，所以如果要插入的target值比中间值小，那么就代表要插入的target一定在中间值的左边
      right = mid - 1;
    } else if (target > arr[mid]) {
      // 因为数组是升序的，所以如果要插入的target值比中间值大，那么就代表要插入的target一定在中间值的右边
      left = mid + 1;
    }
  }
  return left;
}
console.log('插入位置：', searchInsert(arr, 3));
console.log(arr);
console.log('插入位置：', searchInsert(arr1, 2));
console.log(arr1);

// find the nth element from fibonacci series
//f(n) = f(n-1) + f(n-2)

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(9));

// time complexity = O(2^n)

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === mid) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([2, 4], 4));

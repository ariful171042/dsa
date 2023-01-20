// [1,4,6,4,5,] ----->  4

function linearSearch(arr, target) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([3, 65, 3, 54, 6, 3], 6));
console.log(linearSearch([3, 65, 3, 54, 6, 3], 2));


//o(n) ---> linear time 
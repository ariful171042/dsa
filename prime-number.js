// function isPrime(num) {
//   if (num <= 0) {
//     return false;
//   }

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

function prime(num) {
  if (num <= 0) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(prime(11));
console.log(prime(0));


// time complexity = O(n);
// [0, 1, 1, 2, 3, 5, 8, 13 ..........] ---> fibonacai
// n = (n-1) + (n-2)

// function fibonacci(n) {
//   let fibo = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }

// console.log(fibonacci(8)); //13

// function fibonacci2(n) {
//   fibo = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }
// console.log(fibonacci2(10));

function fibon(n) {
  const fibo = [0, 1];

  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.log(fibon(7));

//algorithms
// an algothms is a set of instructions or steps for solbing a problem.

//why you should learn algotitms?
//01. critical thinking and abstraction
//02. problem solving
//03. computer science
//04. career advancement
//05. understaning new techs

//time complexity,space complexity

// time complexity is a way to analyze the total time or performance of an algotithms

// space complexity is a way to analyze the total space or memory need for an algoithms

//asymtotic notation
//describe time complexity or space complexity

//big o notation, big omega notation, and ig theta notation

//big o notation
// O(n)
// O(1) ----> constant // base time or space complexity
// O(Log n) -----> Logarithmic input size decreases half
// O(n) ---> Linear input size biged time is big input size low  time low
//O(n Log n)---> Linear Logarithmic
//O(n^c) --->poLynomial time  / c = power

//o(c^n) ------> exponential time
//o(n!)--->factorial

// given an array , find the largest eliment

function largestEl(arr) {
  let largeEl = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largeEl) {
      largeEl = arr[i];
    }
  }
  return largeEl;
}

console.log(largestEl([22, 44, 55, 65, 34])); //65

// el = 5, run = 5
// el = 1000, run = 1000;
// el = n, run = n;
//O(n) ---> linear time complexity

// given the array , find the first number

function findFirstN(arr) {
  return arr.at(0);
}

console.log(findFirstN([22, 44, 33, 22, 44, 66, 54, 42]));

// el = 10, run = 1,
//el = 1000, run = 1000,
// el = n, run = 1,
// o(1) ----> constant time complexity

function findFirst(arr) {
  const first = arr.at(0);
  return first;
}

console.log(findFirst([1, 4, 5, 3, 5]));

function findLargestNumber(arr) {
  let largestElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}

console.log(findLargestNumber([3, 44, 22, 66, 44, 33, 22, 100000]));

function lowestNumbwr(arr) {
  let lowestN = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowestN) {
      lowestN = arr[i];
    }
  }
  return lowestN;
}

console.log(lowestNumbwr([33, 44, 8, 9, 9])); //5

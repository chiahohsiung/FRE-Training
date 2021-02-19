// 1. Reverse a number
const reverseNum = (num) => {
  let isNegative = false,
    digit,
    reverse = 0;
  if (num < 0) (isNegative = true), (num *= -1);

  while (num) {
    digit = num % 10;
    reverse *= 10;
    reverse += digit;
    num = Math.floor(num / 10);
  }
  return isNegative ? reverse * -1 : reverse;
};

// 2. Valid palindrome
const isPalindrome = (str1, str2) => {
  return str1 === [...str2].reverse().join("");
};

// 3. String combo
const strCombo = (str) => {
  const combo = [];
  for (let i = 0; i < str.length; i++) {
    let comboStr = "";
    for (let j = i; j < str.length; j++) {
      comboStr += str[j];
      combo.push(comboStr);
    }
  }
  return combo;
};

// 4. Sort characters in a string
const sortChar = (str) => {
  return [...str].sort().join("");
};

// 5. Convert first letter of each word to uppercase
const convertFirstChar = (str) => {
  return str
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
};

// 6. Find longest work in string
const findLongestWord = (str) => {
  return str.split(" ").reduce((acc, cV) => {
    return acc.length < cV.length ? (acc = cV) : acc;
  });
};

// 7. Count vowels in string
const countVowels = (str) => {
  // const vowels = { a: true, e: true, i: true, o: true, u: true };
  // let sum = 0;
  // for (const char of str) {
  //   if (vowels[char.toLowerCase()]) sum++;
  // }
  // return sum;
  return str.match(/a|e|i|o|u/g).length;
};

// 8. IsPrime
const isPrime = (num) => {
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) return false;
  return true;
};

console.log(isPrime(100));
// 9. Check input type
const checkInputType = (input) => {
  return typeof input;
};

// 10. Generate matrix based on input
// const matrix = (n) => {
//   const arr = []
//   for (let i = 0; i <= n; i++){
//     arr.push([])
//     for (let j = 0; j <= n; j++){

//     }
//   }
// }

// 11. Find second smallest and biggest numbers
const secondMost = (arr) => {
  arr.sort((a, b) => a - b);
  return [arr[1], arr[arr.length - 2]];
};
console.log(secondMost([1, 2, 3, 4, 5]));

// 12. Perfect number
const isPerfectNum = (num) => {
  if (num === 0) return false;
  let store = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) store += i;
  }
  return store === num;
};

// 13. Find factors of positive integer
const positiveFactors = (num) => {
  const factors = [];
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) factors.push(i);
  }
  factors.push(num);
  return factors;
};

// 14. Convert amount to coins
const amountToCoins = (amount, coins) => {
  if (amount === 0) return [];

  coins.sort((a, b) => b - a);
  const coinArr = [];
  let p = 0;

  while (amount > 0) {
    if (amount >= coins[p]) {
      amount -= coins[p];
      coinArr.push(coins[p]);
      continue;
    }
    p++;
  }
  return coinArr;
};
const coins = [25, 10, 5, 2, 1];

// 15. Compute exponent
const findExponent = (base, num) => {
  return Math.pow(base, num);
};

// 16. Extract unique char from a string
const uniqueChar = (str) => {
  return [...new Set(str)].join("");
};

// 17. Frequency of character occurrences in string
const charOccurence = (str) => {
  const occurrence = {};
  for (char of str) {
    occurrence[char] = (occurrence[char] || 0) + 1;
  }
  return occurrence;
};

// 18. Search arrays using binary search
const binarySearchArr = (arr, val) => {
  arr.sort((a, b) => a - b);
  let midLength = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, midLength);
  let secondHalf = arr.slice(midLength);

  if (val === firstHalf[firstHalf.length - 1]) return true;
  if (val > firstHalf[firstHalf.length - 1]) {
    return binarySearchArr(secondHalf, val);
  } else if (val < firstHalf[firstHalf.length - 1]) {
    return binarySearchArr(firstHalf, val);
  }
  return false;
};

// 19. Return arr els larger than input val
const greaterThanNum = (arr, num) => {
  return arr.filter((val) => val > num);
};

// 20. Generate string ID of random characters
const genStrID = (length) => {
  const store = [];
  let str = "";
  for (let i = 48; i <= 57; i++) {
    store.push(String.fromCharCode(i));
  }
  for (let i = 65; i <= 90; i++) {
    store.push(String.fromCharCode(i));
  }
  for (let i = 97; i <= 122; i++) {
    store.push(String.fromCharCode(i));
  }
  for (let i = 1; i <= length; i++) {
    let random = Math.floor(Math.random(1) * store.length);
    str += store[random];
  }

  return str;
};

// 21. Get subset of fixed length
// const fixedSubset = (arr, length) => {
//   arr.reduce((acc, cV) => {}, []);
// };

// 22. Find occurrences of a character
const countChar = (str, letter) => {
  let count = 0;
  for (const char of str) {
    if (char === letter) count++;
  }
  return count;
};

// 23. Find the first distinct letter
const firstDistinctLetter = (str) => {
  const store = new Map();
  let distinct;
  for (const char of str) {
    if (!store.has(char)) {
      store.set(char, 1);
    } else {
      let count = store.get(char);
      store.set(char, ++count);
    }
  }

  for (const [char, count] of store) {
    if (count === 1) {
      distinct = char;
      break;
    }
  }
  return distinct;
};

// 24. Bubble sort algo
const bubbleSort = (arr) => {
  let count = 0;
  while (count < arr.length - 1) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      } else {
        count++;
      }
    }
  }
  return arr;
};

// 25. Find longest name of country
const longestCountryName = (arr) => {
  return arr.reduce((acc, cV) => {
    if (acc.length < cV.length) acc = cV;
    return acc;
  });
};

// 26. Find longest substring in string without repeating characters
const longestDistinctSubstring = (input) => {
  let longest = "";
  const obj = new Map();
  for (const char of input) {
    if (obj.has(char)) {
      if (longest.length) longest = "";
      longest += char;
    } else {
      obj.set(char, true);
      longest += char;
    }
  }
  return longest;
};

// 27. Find longest palindrome in string

// 28. Pass a function as a param
const cb = () => {
  return "hello";
};
const cbFunc = (cb) => {
  return cb();
};

// 29. Get function name
const getFuncName = (func) => {
  if (typeof func === "function") {
    return func.name;
  }
  return "input is not a function";
};

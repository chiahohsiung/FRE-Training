// Problem 1
// Write a JavaScript function that reverse a number. 
function reverseNumber(num) {

  let reversed = 0;
  while (num > 0) {

    reversed = reversed * 10 + num % 10;
    num = Math.floor(num/10);
  }

  return reversed;

}

// console.log("P1 test: the reverse of 32243 is: " + reverseNumber(32243));

// Problem 2
// Write a JavaScript function that checks whether a passed string is palindrome or not? 
function checkPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right && str[left] === str[right]) {
    left += 1;
    right -= 1;
  }
  return right <= left;
}
// console.log("problem 2:");
// console.log("aabaa is palindrome: ", checkPalindrome("aabaa"));
// console.log("bbaabb is palindrome: ", checkPalindrome("bbaabb"));
// console.log("bbaacbb is palindrome: ", checkPalindrome("bbaacbb"));

// Problem 3
// Write a JavaScript function that generates all combinations of a string. 
function combination(str) {
  let result = []
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i; j < str.length; j += 1) {
      result.push(str.substring(i, j + 1));
    }
  }

  return result;
}
// console.log("Problem 3:");
// console.log("combinations of dog are: ", combination("dog"));

// Problem 4
// Write a JavaScript function that returns 
// a passed string with letters in alphabetical order. 
function sortString(str) {
  let strArr = str.split('');
  strArr.sort();
  return strArr.join('');
}
// console.log("Problem 4:");
// console.log("string: webmaster; sorted: " + sortString("webmaster"));

// Problem 5
// Write a JavaScript function that accepts a string as a parameter 
// and converts the first letter of each word of the string in upper case. 
function toTitleCase(str) {
  let strArr = str.split(" ");
  return strArr.map(s => { return s.charAt(0).toUpperCase() + s.slice(1) }).join(" ");
}
// console.log("Problem 5:");
// console.log("'the quick brown fox' to title case: " + toTitleCase("the quick brown fox"));

// Problem 6
// Write a JavaScript function that accepts a string as a parameter 
// and find the longest word within the string. 
function findLongest(str) {
  let strArr = str.split(" ");
  return strArr.reduce((longestWord, cur) => { 
    if (cur.length > longestWord.length) {
       return cur;
    } 
    else {
      return longestWord;
    }
  }, "");
}
// console.log("Problem 6:");
// console.log("longest word in 'Web Development Tutorial': " 
//   + findLongest("Web Development Tutorial"));

// Problem 7
// Write a JavaScript function that accepts a string as a parameter 
// and counts the number of vowels within the string. 
function countVowels(str) {
  vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  reducer = (counter ,x) => vowels.has(x) ? counter + 1: counter;
  return str.split('').reduce(reducer, 0);
}
// console.log("Problem 7:");
// console.log("number of vowels in 'The quick brown fox': " 
//   + countVowels('The quick brown fox') + " (should be 5)");

// Problem 8
// Write a JavaScript function that accepts a number as a parameter 
// and check the number is prime or not. 
function checkPrime(num) {
  sqroot = Math.sqrt(num);
  for (let i = 2; i < sqroot; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log("Problem 8:");
// console.log("119 is prime?: " + checkPrime(119));
// console.log("79 is prime?: " + checkPrime(79));

// Problem 9
// Write a JavaScript function which accepts an argument 
// and returns the type. 
function typeIs(obj) {
  return typeof(obj);
}
// console.log("Problem 9:");
// console.log("119: " + typeIs(119));
// console.log("'string': " + typeIs('string'));
// console.log("[1,2,3]: " + typeIs([1, 2, 3]));
// // console.log("aaa: " + typeIs(aaa));
// console.log("checkPrime: " + typeIs(checkPrime));

// Problem 10
function identity(num) {
  let matrix = [...new Array(num).fill(0)].map(elem => new Array(num).fill(0));
  for (let i = 0; i < num; i += 1) {
    matrix[i][i] = 1;
  }
  return matrix;
}
// console.log("Problem 10:");
// console.log("identity matrix of size 10:");
// console.log(identity(10));

// Problem 11
// Write a JavaScript function which will take an array of numbers stored 
// and find the second lowest and second greatest numbers, respectively. 
function findSecond(arr) {
  let secGrt = arr.reduce((max, elem) => {
    if (elem > max[0]) {
      max[1] = max[0];
      max[0] = elem;
    } else if (elem > max[1]) {
      max[1] = elem;
    }
    return max;
  }, [-Infinity, -Infinity]);
  let secLow = arr.reduce((min, elem) => {
    if (elem < min[0]) {
      min[1] = min[0];
      min[0] = elem;
    } else if (elem < min[1]) {
      min[1] = elem;
    }
    return min;
  }, [Infinity, Infinity]);
  // console.log(secLow);
  // console.log(secGrt);
  // console.log([secLow[1], secGrt[1]]);
  return [secLow[1], secGrt[1]];
}

// console.log(findSecond([1,2,3,4,5,6,7,8]))
// console.log(findSecond([100,1,2,3,4,5,6,7,8,0]))

// Problem 12
// Write a JavaScript function which says whether a number is perfect. 
function isPerfect(num) {
  sumOfDiv = 0;
  // find the divisors
  for (let i = 2; i <= Math.sqrt(num) && sumOfDiv < num; i += 1) {
    if (num % i === 0) {
      sumOfDiv += i + num / i;
    }
  }
  return sumOfDiv + 1 === num;
}
// console.log("6: ", isPerfect(6));
// console.log("28: ", isPerfect(28));
// console.log("496: ", isPerfect(496));
// console.log("8128: ", isPerfect(8128));
// console.log("100: ", isPerfect(100));
// console.log("999: ", isPerfect(999));

// Problem 13
// Write a JavaScript function to compute the factors of a positive integer.
function factors(num) {
  let factorsList = [];
  let temp = []
  for (let i = 1; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      factorsList.push(i);
      temp.push(num / i);
    }
  }
  if (Math.floor(Math.sqrt(num)) === Math.sqrt(num)) {
    factorsList.push(Math.sqrt(num));
  }
  return factorsList.concat(temp.reverse());
}
// console.log(factors(6));
// console.log(factors(100));

// Problem 14
// Write a JavaScript function to convert an amount to coins. 
function convertCoin(amount, coins) {
  let result = [];
  coins.sort((x, y) => y - x).forEach(elem => {
    console.log(elem);
    while (amount >= elem) {
      result.push(elem);
      amount -= elem;
    }
  })
  return result;
}
// console.log(convertCoin(46, [25, 10, 5, 2, 1]))

// Problem 15
// Write a JavaScript function to compute the value of bn 
// where n is the exponent and b is the bases. Accept b and n 
// from the user and display the result. 
function power(b, n) {
  const result = Math.pow(b, n);
  return result;
}
// console.log(power(2, 3));

// Problem 16
// Write a JavaScript function to extract unique characters from a string. 
function findUnique(str) {
  charCount = new Set();
  str.split('').forEach( chr => {
    charCount.add(chr);
  });
  result = [...charCount];
  return result.join("");
}
// console.log(findUnique("aaabbbc"));
// console.log(findUnique("thequickbrownfoxjumpsoverthelazydog"));

// Problem 17
// Write a JavaScript function to get the number of 
// occurrences of each letter in specified string. 
function countOccurance(str) {
  let charCount = new Map();
  str.split('').forEach( chr => {
    console.log(chr, "charCount has: ", charCount.has(chr), charCount[chr]);
    if (!charCount.has(chr)) {
      charCount.set(chr, 0);
    }
    let count = charCount.get(chr);
    charCount.set(chr, count + 1);
  });
  // result = [...charCount];
  // console.log(charCount);
  // return result.join("");
  console.log(`the input string is ${str}`);
  charCount.forEach( (value, key, map) => {
    console.log(`the occurance of ${key} is ${value}`);
  })
}
// countOccurance("aaabbbbc");

// Problem 18
// Write a function for searching JavaScript arrays with a binary search. 
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (arr[left] != target) {
    return -1;
  }
  return left;
}

// console.log(binarySearch([0,1,2,3,4,5,6,7,8], 4));
// console.log(binarySearch([0,1,2,3,4,5,6,7], 4));
// console.log(binarySearch([0,1,2,3,4,5,6,7], 0));
// console.log(binarySearch([0,1,2,3,4,5,6,7], 7));
// console.log(binarySearch([0,1,2,3,4,5,6,7], -1));
// console.log(binarySearch([0,1,2,3,4,5,6,7], 8));

// Problem 19
// Write a JavaScript function that 
// returns array elements larger than a number. 
function findLarger(arr, num) {
  return arr.filter( elem => elem > num );
}
// console.log(findLarger([0,1,2,3,4,5,6,7,8], 7));
// console.log(findLarger([0,1,2,3,4,5,6,7,8], 0));
// console.log(findLarger([0,2,100,3,4,5,2,3,9,99,99,100,7], 2));

// Problem 20
// Write a JavaScript function that generates  
// a string id (specified length) of random characters. 
function genStrId(len) {
  result = [];
  lst = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (let i = 0; i < len; ++i) {
    let chr = lst.charAt(Math.floor(Math.random() * lst.length));
    result.push(chr);
  }
  return result.join('');
}
// console.log(genStrId(20));

// Problem 21
// Write a JavaScript function to get all possible subset 
// with a fixed length (for example 2) combinations in an array. 
function getSubset(arr, len) {
  if (len === 0) {
    return [[]];
  }
  let result = [];
  arr.forEach( (value, i) => {
    let subset = getSubset(arr.slice(i + 1), len - 1);
    subset.forEach(elem => elem.unshift(value))
    result = result.concat(subset);
  });
  return result; 
}
// console.log(getSubset([1,2,3],2));

// Problem 22
// Write a JavaScript function that accepts two arguments, 
// a string and a letter, and the function will count the number 
// of occurrences of the specified letter within the string. 
function countOccurance(str, chr) {
  return str.split('').reduce((count, elem) => { return count + (elem === chr ? 1 : 0)}, 0);
}
// console.log(countOccurance("a1bba2bsbba3ba4a5a6a7", 'a'));

// Problem 23
// Write a JavaScript function to find the first not repeated character. 
function findFirstNonUnique(str) {
  let count = new Map();
  const arr = str.split('');
  arr.forEach( elem => count.has(elem) && count.set(elem, count.get(elem) + 1) || count.set(elem, 1));
  return arr.find(elem => count.get(elem) === 1);
}
console.log(findFirstNonUnique('abacddbec'));

// Problem 24
// Write a JavaScript function to apply Bubble Sort algorithm. 
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j + 1] > arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
test = [2,3,4,1,5,6,1];
bubbleSort(test);
console.log(test);

// Problem 25
// Write a JavaScript function that accept a list of 
// country names as input and returns the longest country name as output. 
function longestCountry(arr) {
  return arr.reduce((longest, elem) => longest.length < elem.length ? elem : longest, "");
}
console.log(longestCountry(["Australia", "Germany", "United States of America"]));

// Problem 26
// Write a JavaScript function to find longest substring in a given a string without repeating characters.
function findNonRptSubstring(str) {
  let start = 0;
  let last = new Map();
  let substr = { start: 0, len: 0};
  for (let i = 0; i < str.length; ++i) {
    if (last.has(str[i]) && last.get(str[i]) >= start) {
      start = last.get(str[i]) + 1;
    } else if (substr.len < i - start + 1) {
      substr.start = start;
      substr.len = i - start + 1;
    }
    last.set(str[i], i);
  }
  return str.substring(substr.start, substr.start + substr.len);
}
console.log(findNonRptSubstring("abcdefggabcdefhg"));

// Problem 27
// Write a JavaScript function that returns the longest palindrome in a given string. 
function longestPalindrome(str) {
  // str.split('').forEach( (value, i) => {
    
  // })
  let longest = "";
  const checkSubPalindrome = (left, right) => {
    while (left >= 0 && right < str.length 
      && str.charAt(left) === str.charAt(right)) {
      --left;
      ++right;
    }
    if (right - left - 1 > longest.length) {
      longest = str.substring(left + 1, right);
    }
  };
  for (let i = 0; i < str.length; ++i) {
    checkSubPalindrome(i, i);
    checkSubPalindrome(i, i + 1);
  }
  return longest;
}
console.log(longestPalindrome("bananas"))
console.log(longestPalindrome("abracadabra"))

// Problem 28
// Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function execute(func) {
  func("that");
}
execute(console.log);


// Problem 29
// Write a JavaScript function to get the function name. 
function getFuncName(func) {
  return func.name;
}
console.log(getFuncName(execute));
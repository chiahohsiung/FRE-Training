// Q1.")
const reverse = (number) => {
  let arr = (number + "").split("");
  let reducer = (accum, curr) => curr + accum;
  return arr.reduce(reducer);
};
console.log(`Q1: reverser ${123} => ${reverse(123)}`);

console.log("\n Q2");
const isPalindrome = (string) => {
  const len = string.length - 1;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - i]) {
      return false;
    }
  }
  return true;
};
console.log(`Q2 is 'murum a palindrome: ${isPalindrome("murum")}`);

console.log("\n Q3");
const stringPermutations = (string) => {
  const arr = string.split("");
  let result = [];
  arr.map((ch, i) => {
    result = [...result, ch, ...result.map((str) => str + ch)];
  });
  return result;
};
console.log(stringPermutations("mark"));

console.log("\n Q4");
const alphabetical = (string) => {
  arr = string.split("").sort(function (a, b) {
    return a.charCodeAt(0) - b.charCodeAt(0);
  });
  string = arr.reduce(function (accum, curr) {
    return (accum += curr);
  });
  return string;
};
console.log(`mamawang in alphabetical order is ${alphabetical("mamawang")}`);

console.log("\n Q5");
const capitalizeWord = (string) => {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === " ") {
      result += string.substring(i, i + 1).toUpperCase();
    } else result += string.substring(i, i + 1);
  }
  return result;
};
console.log(capitalizeWord("she sells sea shells on the sea shore"));

console.log("\n Q6");
const longestWord = (string) => {
  const words = string.split(" ").sort((a, b) => b.length - a.length);
  return words[0];
};
console.log(
  `Longest word in string "Tom and Jerry" is${longestWord("Tom and Jerry")}`
);

console.log("\n Q7");
const noVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const arr = string.split("").filter((a) => vowels.indexOf(a) !== -1);
  return arr.length;
};
console.log(
  `Number of vowels in this very sentence is ${noVowels(
    "Number of vowels in this very sentence is"
  )}`
);

console.log("\n Q8");
const isPrime = (number) => {
  let takeout = [];
  for (let i = 2; i < number / 2; i++) {
    if (takeout.indexOf(i) !== -1) continue;
    if (number % i === 0) {
      console.log(number / i);
      return false;
    } else takeout = [...takeout, ...multiples(i, number / 2)];
  }
  //   console.log(takeout);
  return true;
};
const multiples = (num, till) => {
  let arr = [];
  let i = 1;
  while (num * i <= till) {
    arr.push(num * i);
    i++;
  }
  return arr;
};

console.log(`is 97 prime? ${isPrime(97) ? "yes" : "no"}`);

console.log("\nQ9");
const whatAmI = (obj) => {
  return typeof obj;
};
console.log(whatAmI(function () {}));

console.log("\n Q10");
const identity = (n) => {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      if (i === j) row.push(1);
      else row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
};
console.log(`identity matrix of size 5 is: `);
console.log(identity(5));

console.log("\nQ11");
const secondEverything = (numbers) => {
  numbers.sort();
  console.log(numbers[1]);
  return `${numbers[1]}, ${numbers[numbers.length - 2]}`;
};
console.log(
  `The second smallest and largest numbers in [1,2,4,12,60, 9] are ${secondEverything(
    [1, 2, 4, 12, 60, 9]
  )}`
);

console.log("\nQ12");
const isPerfect = (number) => {
  let divisors = [];
  for (let i = 1; i < number / 2; i++) {
    if (number % i === 0 && divisors.indexOf(i) === -1)
      divisors = [
        ...divisors,
        ...properMultiples(i, number).filter(
          (n) => divisors.indexOf(n) === -1 && n !== number
        ),
      ];
  }
  let sum = 0;
  for (let i = 0; i < divisors.length; i++) {
    sum += divisors[i];
  }
  if (sum == number) return true;
  else return false;
};

const properMultiples = (num, till) => {
  let arr = [];
  let i = 1;
  while (num * i <= till) {
    if (till % (num * i) === 0) arr.push(num * i);
    i++;
  }
  return arr;
};

console.log(`is 8128 a perfect number? ${isPerfect(8128) ? "yes" : "no"}`);

console.log("\n Q13");
const factors = (number) => {
  let factors = [];
  for (let i = 1; i < number / 2; i++) {
    if (factors.indexOf(i) === -1) {
      factors = [
        ...factors,
        ...multiples(i, number / 2).filter((n) => number % n === 0),
      ];
    }
  }
  return factors;
};
console.log(`The factors of 90 are ${factors(90)}`);

console.log("\nQ14");
const convertToCoins = (total) => {
  const coins = [25, 10, 5, 2, 1];
  let index = 0;
  let change = [];
  while (total > 0) {
    if (total - coins[index] >= 0) {
      total -= coins[index];
      change.push(coins[index]);
    } else {
      index++;
    }
  }
  return change;
};
console.log(`67 in coins is ${convertToCoins(67)}`);

console.log("\n Q15");
const bn = () => {
  const prompt = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let base = 0;
  console.log("Base: ");

  prompt.on("line", function (input) {
    base = input;
    console.log("Power ");
    let power = 0;
    prompt.on("line", function (input) {
      power = input;
      console.log(`${b} raised to ${n} is ${Math.pow(base, power)}`);
      prompt.close();
    });
  });
};

// bn();

console.log("\n Q16");
const uniqueChars = (string) => {
  let list = string.split("");

  let result = [];
  list.map((ch) => {
    if (result.indexOf(ch) === -1) {
      result.push(ch);
    }
  });
  return result.reduce(function (accum, curr) {
    return (accum += curr);
  });
};
console.log(
  `The unique characters in "thequickbrownfoxjumpsoverthelazydog" are ${uniqueChars(
    "thequickbrownfoxjumpsoverthelazydog"
  )}`
);

console.log("\n Q17");
const occurences = (string) => {
  let occur = {};
  let arr = string.split("").filter((ch) => ch !== " ");

  arr.map((ch) => {
    if (ch in occur) {
      occur[ch] += 1;
    } else {
      occur[ch] = 1;
    }
  });
  return occur;
};

console.log(`The occurences of each character in this very string is`);
console.log(
  occurences("The occurences of each character in this very string is")
);

console.log("\n Q18");
const binarySearch = (arr, target, left, right) => {
  if (left > right) {
    if (arr[left] !== target) return -1;
  } else {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    } else {
      if (target > arr[mid]) return binarySearch(arr, target, mid + 1, right);
      else return binarySearch(arr, target, left, mid - 1);
    }
  }
};

arr = [1, 2, 5, 7, 8, 9, 60];
console.log(
  `Find the index of 5 in the array [1,2,5,7,8,9,60]: ${binarySearch(
    arr,
    5,
    0,
    arr.length - 1
  )}`
);

console.log("\nQ19");
const largerThanNum = (arr, number) => {
  return arr.filter((num) => num > number);
};
console.log(
  `All the numbers greater than 8 in the array [ 2,7,88,2,4,6,56,3,45,0] are ${largerThanNum(
    [2, 7, 88, 2, 4, 6, 56, 3, 45, 0],
    8
  )}`
);

console.log("\nQ20");
const generateId = (length) => {
  let str = "";
  for (let i = 0; i < length; i++) {
    let ch = Math.random() * 93;
    str += String.fromCharCode(33 + ch);
  }
  return str;
};

console.log(`A random string of length 12 is ${generateId(12)}`);

console.log("\n Q21");
const getSubsetsOfLength = (arr, l) => {
  let result = [];
  arr.map((n, i) => {
    result = [
      ...result,
      [n],
      ...result
        .filter((ele) => ele.length < l)
        .map((el) => {
          return el.push(n);
        }),
    ];
  });
  console.log(result.filter((el) => el.length === l));
  //   return result.filter((el) => el.length === l);
};

console.log(`All subsets of length 3 in [ 1, 3, 5, 6, 7, 8, 9, 10, 13] is: `);
getSubsetsOfLength([1, 3, 5, 6, 7, 8, 9, 10, 13], 3);

console.log("\n Q22");
const occurencesOfChar = (string, letter) => {
  let list = string.split("");

  list = list.filter((ch) => ch === letter);
  return list.length;
};
console.log(
  `The number of occurences of letter "c" in "chicharito chachacha" is ${occurencesOfChar(
    "chicharito chachacha",
    "c"
  )}`
);

console.log("\nQ23");
const firstNonRepeated = (string) => {
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (occurencesOfChar(string, arr[i]) === 1) {
      return arr[i];
    }
  }
  return -1;
};
console.log(
  `The first unique character in the string "abacddbec" is ${firstNonRepeated(
    "abacddbec"
  )}`
);

console.log("\nQ24");
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log("Let's Bubble sort some array: ");
console.log(
  bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

console.log("\nQ25");
const Longest_Country_Name = (list) => {
  list.sort((a, b) => b.length - a.length);
  return list[0];
};
console.log(
  `In this list: ["Australia", "Germany", "United States of America"], the longest country name is: ${Longest_Country_Name(
    ["Australia", "Germany", "United States of America"]
  )}`
);

console.log("\nQ26");
const longestUniqueSubstr = (string) => {
  let str = string.split("");
  let curr = [];
  let substrings = [];
  for (let i = 0; i < str.length; i++) {
    if (curr.indexOf(str[i]) !== -1) {
      substrings.push(curr);
      curr = [];
    } else {
      //   console.log(curr);
      curr.push(str[i]);
    }
  }
  substrings.sort((a, b) => b.length - a.length);
  return substrings[0].reduce((acc, curr) => acc + curr);
};
console.log(`The longest unique substring in the string "donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft
" is ${longestUniqueSubstr(
  "donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft"
)}`);

console.log("\nQ27");
const longestPalin = (string) => {
  let arr = string.split("");
  let palindromes = [];
  for (let i = 0; i < arr.length; i++) {
    // Two cases - where the palindrome is even
    for (let j = 0; j <= i; j++) {
      if (arr[i + j] !== arr[i - j]) {
        palindromes.push(string.substring(i - (j - 1), i + j));
        break;
      }
    }
  }
  palindromes = palindromes.sort((a, b) => b.length - a.length);
  return palindromes[0];
};
console.log(
  `The longest substring in the string "banana" is ${longestPalin("bananas")}`
);

console.log("\nQ28");
const me = (callMe) => callMe("I have been called by another function");
me(console.log);

console.log("\nQ29");
const getFnName = (func) =>
  console.log(`This function is called: ${func.name}`);
getFnName(Array.prototype.toString);

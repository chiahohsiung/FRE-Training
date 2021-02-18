// 1.Write a JavaScript function that reverse a number.

const reverseNum = num =>  +[...num + ''].reverse().join('');

// 2. function that checks whether a passed string is palindrome or not? 

const isPalindrome = (str) => {
  str = str.replace(/ /g, '');
  return str == [...str].reverse().join('');
};

// 3. function that generates all combinations of a string

const strCombine = str => {
  strArr = [...str];
  let world;
  result =[]
  for (i in strArr){
      world ='';
    while (i < strArr.length) {
      world = world + strArr[i];
      result.push(world);
      i++;
    }
  }
  return result
};

// 4.function that returns a passed string with letters in alphabetical order.

const sortString = str => [...str].sort().join('');

// 5.function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

const capitalize = str => {
  result = str.trim().split(' ').map(ele => ele[0].toUpperCase() + ele.slice(1));
  return result.join(' ');
};

// 6. function that accepts a string as a parameter and find the longest word within the string.

const longestWord = str => {
  return str.trim().split(' ').sort((a, b) => b.length - a.length)[0]
}

// 7. counts the number of vowels within the string

const countVowel = str => {
  return [...str.match(/a|i|o|e|u/g)].length;
}

// 8. check the number is prime or not

const isPrime = num => {
  checks = Math.floor(num/2);
  for (i = 2; i <= checks; i++){
    if (num%i == 0) {
      return false
    } 
  }
  return true
};

// 9. function return type

const type = input => typeof input;

// 10. function which returns the n rows by n columns identity matrix

// 11. function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

const second = arr => {
  let result = [];
  result.push(arr.sort()[1]);
  result.push(arr.sort()[arr.length - 2]);
  return result
}

// 12. perfect number

const isPerfect = num => {
  let check = Math.floor(num / 2);
  let result = 0;
  for (i=1; i <= check; i++){
    num%i == 0? result += i: result = result;
  }
  if (result === num){
    return true;
  }
  return false
};

//13. function to compute the factors of a positive integer

const findFactor = num => {
  let check = Math.floor(num/2);
  let result = [];
  for (i=1; i <= check; i++){
    num%i == 0? result.push(i) : console.log('');
  }
  result.push(num);
  return result;
}

// 14. function amount to coins

const amountToCoins = (amt, coins = [25,10,5,2,1]) => {
  let result = [];
  while (amt > 0) {
    
  }
}

console.log(amountToCoins(46));

// 18. function for searching JavaScript arrays with a binary search
const binarySearch = (arr, num) => {
  arr = arr.sort();
  let split;
  while (arr.length > 1){
    split = Math.floor(arr.length/2);
    num > arr[split]? arr = arr.slice(split): arr = arr.slice(0,split+1);
    console.log(arr);
    if (num === arr[split]) return true
  }
  return false
}

// 24.function to apply Bubble Sort algorithm.

const bubbleSort = arr => {
  let check = arr.length -1;
  let a=0;
  while (a < check){
    for (i in arr){
      if (arr[i]>arr[+i+1]) {[arr[i], arr[+i+1]] = [arr[+i+1], arr[i]]}
   }
    a++;
  } 
  return arr
}

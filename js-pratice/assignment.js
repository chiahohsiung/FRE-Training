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

console.log(isPrime(76))
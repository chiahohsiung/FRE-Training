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



// JavaScript Assignment

// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function reverseNumber(num){
    return parseInt(num.toString().split('').reverse().join(''));
  }
  console.log(reverseNumber(1234))
  
  // 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
  // A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
  
  function palindromeString(str){
    return str === str.split('').reverse().join('');
  }
  console.log(palindromeString('madm'))
  
  // 3. Write a JavaScript function that generates all combinations of a string.
  // Example string : 'dog'
  // Expected Output : d,do,dog,o,og,g
  
  function genCombination(str){
    let arr = []
     for(let i=0;i<str.length;i++) {
         for(let j=i+1;j<str.length+1;j++) {
             arr.push(str.slice(i, j));
         }
     }
     return arr;
  }
  console.log(genCombination('dog'))
  //
  // 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
  // Example string : 'webmaster'
  // Expected Output : 'abeemrstw'
  // Assume punctuation and numbers symbols are not included in the passed string.
  
  function sortString(str){
    return str.split('').sort().join('');
  }
  console.log(sortString('webmaster'))
  //
  // 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
  // Example string : 'the quick brown fox'
  // Expected Output : 'The Quick Brown Fox '
  
  function firstLetterToUpperCase(str){
    return str.split('').map((char,index)=> char === '' ? str[index+1].toUpperCase() : char).join('');
  }
  console.log(firstLetterToUpperCase('The Quick Brown Fox'))
  //
  // 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
  // Example string : 'Web Development Tutorial'
  // Expected Output : 'Development'
  
  function longWord(str){
    return str.split(' ').reduce((acc, cur) => cur.length > acc.length ? acc = cur : acc, '');
  }
  console.log(longWord('Web Development Tutorial'))
  //
  // 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
  // Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
  // Example string : 'The quick brown fox'
  // Expected Output : 5
  
  function countVows(str){
    let vowel_list = 'aeiouAEIOU';
    let vcount = 0;
  
    for(var x = 0; x < str.length ; x++)
    {
      if (vowel_list.indexOf(str[x]) !== -1)
      {
        vcount += 1;
      }
  
    }
    return vcount;
  }
  console.log(countVows("The quick brown fox"));
  //
  // 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
  // Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
  
  function checkPrime(num){
    for (let i = 2 ; i < num ; i++){
      if(num % i == 0) return false;
    }
    return true;
  }
  console.log(checkPrime(14))
  //
  // 9. Write a JavaScript function which accepts an argument and returns the type.
  // Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
  
  function returnType(arg){
    return typeof(arg);
  }
  console.log(returnType(1))
  //
  // 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
  function returnMatrix(n){
    for (let i=0; i < n; i++)
    {
      for (let j=0; j < n; j++)
      {
           if (i === j)
           {
             console.log(' 1 ');
           }
  
           else
            {
             console.log(' 0 ');}
            }
         console.log('----------');
       }
  }
  returnMatrix(7)
  //
  // 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
  // Sample array : [1,2,3,4,5]
  // Expected Output : 2,4
  function returnSpecificNum(arr){
    return arr.sort((a,b)=>a-b).filter((x,index) => index === 1 || index === arr[arr.length-1])
  }
  console.log(returnSpecificNum([5,3,1,4,5,3,5,3]))
  //
  // 12. Write a JavaScript function which says whether a number is perfect.
  // According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
  // Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
  function perfectNumber(num){
    var temp = 0;
    for(var i=1;i<=num/2;i++)
      {
          if(num%i === 0)
          {
            temp += i;
          }
     }
        if(temp === num && temp !== 0){
          return true
        }
       else{
         return false
       }
  }
  console.log(perfectNumber(6))
  // 13. Write a JavaScript function to compute the factors of a positive integer.
  function returnFactors(num){
    let ans = []
    for(let i = 1 ; i < num ; i++){
      if(num%i===0) ans.push(i)
    }
    return ans;
  }
  // console.log(returnFactors(121)
  
  // 14. Write a JavaScript function to convert an amount to coins.
  // Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
  // Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
  // Output : 25, 10, 10, 1
  function convertAmount(amount, arr){
    if (amount === 0)
      {
         return [];
       }
     else
       {
         if (amount >= arr[0])
           {
            let left = (amount - arr[0]);
            return [arr[0]].concat( convertAmount(left, arr) );
            }
          else
            {
             arr.shift();
             return convertAmount(amount, arr);
            }
        }
  }
  console.log(convertAmount(46, [25, 10, 5, 2, 1]))
  
  //
  // 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
  function exponent(base, n){
    return Math.pow(base, n)
  }
  // console.log(exponent(2,8))
  
  // 16. Write a JavaScript function to extract unique characters from a string.
  // Example string : "thequickbrownfoxjumpsoverthelazydog"
  // Expected Output : "thequickbrownfxjmpsvlazydg"
  function removeDuplicate(str){
    return [...new Set(str.split(''))].join('')
  }
  // console.log(removeDuplicate("thequickbrownfoxjumpsoverthelazydog"))
  
  //
  // 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
  function occurTimes(str){
    let ans = {}
    let arr = str.split('')
    for(let char of arr){
      console.log(char)
      if (ans[char] >= 0){ans[char] += 1;}
      else {ans[char] = 0;}
    }
    return ans;
  }
  // console.log(occurTimes('aabbbcccaaabbbcssbc'))
  //
  // 18. Write a function for searching JavaScript arrays with a binary search.
  // Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
  function binary_Search(items, value){
      var firstIndex  = 0,
          lastIndex   = items.length - 1,
          middleIndex = Math.floor((lastIndex + firstIndex)/2);
  
      while(items[middleIndex] != value && firstIndex < lastIndex)
      {
         if (value < items[middleIndex])
          {
              lastIndex = middleIndex - 1;
          }
        else if (value > items[middleIndex])
          {
              firstIndex = middleIndex + 1;
          }
          middleIndex = Math.floor((lastIndex + firstIndex)/2);
      }
  
   return (items[middleIndex] != value) ? -1 : middleIndex;
  }
  
  console.log(binary_Search([1, 2, 3, 4, 5, 7, 8, 9], 1));
  //
  // 19. Write a JavaScript function that returns array elements larger than a number.
  function filterLarger(arr, num){
    return arr.filter(x=>x>num)
  }
  console.log(filterLarger([1,2,3,4,5,5,6,7], 5))
  //
  // 20. Write a JavaScript function that generates a string id (specified length) of random characters.
  // Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  function randomString(length){
    let text = "";
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0; i < length; i++ )
    {
      text += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return text;
  }
  console.log(randomString(9))
  
  //
  // 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
  // Sample array : [1, 2, 3] and subset length is 2
  // Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
  function subsetFixLength(arr, length){
    let result_set = [],
          result;
  
  
    for(let x = 0; x < Math.pow(2, arr.length); x++)
      {
        result = [];
        let i = arr.length - 1;
         do
        {
            if( (x & (1 << i)) !== 0)
                {
                   result.push(arr[i]);
                 }
              }  while(i--);
  
          if( result.length >= length)
             {
                result_set.push(result);
              }
        }
  
        return result_set;
  }
  console.log(subsetFixLength([1,2,3],2))
  
  //
  // 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
  // Sample arguments : 'microsoft.com', 'o'
  // Expected output : 3
  function countChar(str,char){
    return str.split('').reduce((acc,cur)=> cur === char ? acc+=1 : acc, 0)
  }
  console.log(countChar('microsoft.com', 'o'))
  //
  // 23. Write a JavaScript function to find the first not repeated character.
  // Sample arguments : 'abacddbec'
  // Expected output : 'e'
  function firstNotRepeated(str){
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
          return char;
        }
      }
      return null;
  }
  console.log(firstNotRepeated('aaabcccdeeef'))
  //
  // 24. Write a JavaScript function to apply Bubble Sort algorithm.
  // Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
  // Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
  // Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
  function bubbleSort(arr){
    let swap;
    let n = arr.length-1;
    let res = arr;
    do {
        swap = false;
        for (let i=0; i < n; i++)
        {
            if (res[i] < res[i+1])
            {
               let temp = res[i];
               res[i] = res[i+1];
               res[i+1] = temp;
               swap = true;
            }
        }
        n--;
    }
    while (swap);
   return res;
  }
  console.log(bubbleSort([912, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))
  //
  // 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
  // Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
  // Expected output : "United States of America"
  function Longest_Country_Name(arr){
    return arr.reduce((acc,cur) => cur.length>acc.length? acc=cur: acc,'')
  }
  // console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]))
  //
  // 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
  function longestSubstring(str){
    let string="";
    let res="";
    let arr= str.split("");
    for(let j=0;j<arr.length;j++) {
        for(let i=j;i<arr.length;i++) {
            if(string.includes(arr[i]))
                break;
            else
                string+=arr[i];
         }
         if(res.length<string.length)
             res=string;
         string="";
    }
    return res;
  }
  console.log(longestSubstring("abcabcbb"))
  // 27. Write a JavaScript function that returns the longest palindrome in a given string.
  // Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
  // In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
  //
  // 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
  function callBack(callback, num){
    return callback(num);
  }
  
  function add(num){
    let total = 0;
    for (let i = 0 ; i < num ; i++){
      total += i
    }
    return total;
  }
  console.log(callBack(add, 5))
  
  
  //
  // 29. Write a JavaScript function to get the function name.
  function getName(){
    console.log(arguments.callee.name) ;
  }
  getName()
  
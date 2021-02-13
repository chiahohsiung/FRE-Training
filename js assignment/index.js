
 console.log("Q1");
const reverse = (number) => {
    let arr = (number + "").split("");
    let reducer = (accum, curr) => curr + accum;
    return arr.reduce(reducer);
  };
  console.log(`Q1: reverse 32243 => ${reverse(32243)}`);
  
  console.log("Q2");
  const isPalindrome = (string) => {
    const len = string.length - 1;
    let s = 0;
    let e = len-1;
    let ispalindrome = true;
    while (s < e && ispalindrome) {
      while (string[s] == ' ') s++;
      while (string[e] == ' ') e--;
      if (string[s++] != string[e--])
              ispalindrome = false;
    }
    
    return true;
  };
  console.log(`Q2 is nurses run a palindrome: ${isPalindrome("nurses run")}`);
  
  console.log("Q3");
  const stringCombinations = (chars) => {
      let result = [];
      let f = function(prefix, chars) {
        for (let i = 0; i < chars.length; i++) {
          result.push(prefix + chars[i]);
          f(prefix + chars[i], chars.slice(i + 1));
        }
      }
      f('', chars);
      return result;
    }

  console.log(`dog combination is ${stringCombinations("dog")}`);
  
  console.log("Q4");
  const alphabetical = (string) => {
    let arr = string.split("").sort(function (a, b) {
      return a.charCodeAt(0) - b.charCodeAt(0);
    });
    string = arr.reduce(function (accum, curr) {
      return (accum += curr);
    });
    return string;
  };
  console.log(`webmaster in alphabetical order is ${alphabetical("webmaster")}`);
  
  console.log("Q5");
  const capitalizeWord = (string) => {
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] =  arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    let reducer = (accum, curr) => accum + " " + curr;
    return arr.reduce(reducer);
  };
  console.log(capitalizeWord("the quick brown fox"));
  
  console.log("Q6");
  const longestWord = (string) => {
    const words = string.split(" ").sort((a, b) => b.length - a.length);
    return words[0];
  };
  console.log(
    `Longest word in string "Web Development Tutorial" is ${longestWord("Web Development Tutorial")}`
  );
  
  console.log("Q7");
  const noVowels = (string) => {
    const vowels = ["a", "e", "i", "o", "u"];
    const arr = string.split("").filter((a) => vowels.indexOf(a) !== -1);
    return arr.length;
  };
  console.log(
    `The quick brown fox ${noVowels(
      "The quick brown fox"
    )}`
  );
  console.log("Q8");
  const isPrime = (num) => {

    for(let i = 2; i < num; i++){
      if(num % i === 0) {return false;}
    }
    return num > 1;
    }
  
  console.log(`is 13 prime? ${isPrime(13)}`);
  

  
  console.log("Q9");
  const whatAmI = (obj) => {
    return typeof obj;
  };
  console.log(whatAmI(function () {}));
  
  console.log("Q10");
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
  
  console.log("Q11");
  const secondEverything = (numbers) => {
    numbers.sort();
    console.log(numbers[1]);
    return `${numbers[1]}, ${numbers[numbers.length - 2]}`;
  };
  console.log(
    `The second smallest and largest numbers in [1,2,3,4,5] are ${secondEverything(
      [1, 2, 3, 4, 5]
    )}`
  );
  
  console.log("Q12");
  const isPerfect = (number) => {
    let temp = 0;
       for(let i = 1;i <= number / 2;i++)
         {
             if(number % i === 0)
              {
                temp += i;
              }
         }
       
         if(temp === number && temp !== 0)
            {
              return true;
            } 
         else
            {
           return false;
            }   
     } 

  
  console.log(`is 8128 a perfect number? ${isPerfect(8128)}`);
  
  console.log("Q13");
  const computerFactor = (number) => {
    let result = [];
    for(let i = 1;i <= number;i++)
      {
          if(number % i === 0)
           {
             result.push(i);
           }
      }
      return result;
  }
    console.log(`factor of 36 is ${computerFactor(36)}`);
  console.log("Q14");
  const convertToCoins = (total, arr) => {
  
    let coins = arr.sort(function (a, b) {
      return b - a;
    });
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
  console.log(`46 in coins is ${convertToCoins(46, [25, 10, 5, 2, 1])}`);
  
  console.log("Q15");
  const bn = (b, n) => {
    return 3**2;
  
  };
  
  console.log(`3 to the power of 2 is ${bn(3, 2)}`);
  
  console.log("Q16");
  const uniqueChars = (string) => {
    let list = string.split("");
  
    let result = [];
    list.map((ch) => {
      if (result.indexOf(ch) === -1) {
        result.push(ch);
      }
    });
    let reducer = (accum, curr) =>  accum + curr;
    return result.reduce(reducer);

  };
  console.log(
    `The unique characters in "thequickbrownfoxjumpsoverthelazydog" are ${uniqueChars(
      "thequickbrownfoxjumpsoverthelazydog"
    )}`
  );
  
  console.log("Q17");
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
  
  console.log("Q18");
  const binarySearch = (arr, target, left, right) => {
    
    while (left + 1 < right) {
        let mid = (right - left)/2;
        if (arr[mid] < target){
          left = mid;
        }
        else{
          right = mid;
        }
    }
    if(arr[left] === target) return left;
    if(arr[right] === target) return right;
    return -1;
  };
  
  arr = [1, 2, 3];
  console.log(
    `Find the index of 2 in the array [1,2,3]: ${binarySearch(
      arr,
      2,
      0,
      arr.length-1
    )}`
  );
  
  console.log("Q19");
  const largerThanNum = (arr, number) => {
    return arr.filter((num) => num > number);
  };
  console.log(
    `All the numbers greater than 8 in the array [ 2,7,88,2,4,6,56,3,45,0] are ${largerThanNum(
      [2, 7, 88, 2, 4, 6, 56, 3, 45, 0],
      8
    )}`
  );
  
  console.log("Q20");
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
      let sortArr = arr.sort();
      dfs(sortArr, 0, [], result);
      

    function dfs(nums, index, combination, result) {
      result.push(combination);
      for(let i = index; i < nums.length; i++) {
          combination.push(nums[i]);
          dfs(nums, i + 1, combination.slice(0, combination.length), result)
          combination.pop()
      }
  }
    console.log(result.filter((result) => result.length === l));
    
  };
  
  console.log(`All subsets of length 3 in [1, 2, 3] is: `);
  getSubsetsOfLength([1,2,3], 2);
  
  console.log("Q22");
  const occurencesOfChar = (string, letter) => {
    let list = string.split("");
  
    list = list.filter((ch) => ch === letter);
    return list.length;
  };
  console.log(
    `The number of occurences of letter "o" in "microsoft.com" is ${occurencesOfChar(
      "microsoft.com",
      "o"
    )}`
  );
  
  console.log("Q23");
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
  
  console.log("Q24");
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
  
  console.log("Q25");
  const Longest_Country_Name = (list) => {
    list.sort((a, b) => b.length - a.length);
    return list[0];
  };
  console.log(
    `In this list: ["Australia", "Germany", "United States of America"], the longest country name is: ${Longest_Country_Name(
      ["Australia", "Germany", "United States of America"]
    )}`
  );
  
  console.log("Q26");
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
  
  console.log("Q27");
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
  
  console.log("Q28");
  const me = (callMe) => callMe("I have been called by another function");
  me(console.log);
  
  console.log("Q29");
  const getFnName = (func) =>
    console.log(`This function is called: ${func.name}`);
  getFnName(Array.prototype.toString);
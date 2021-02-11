//1
function reverseNumber(num){
  var reversedNum = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
  return reversedNum;
}
//2
function palindromeString(string){
  if(string.length === 0) return undefined;
  var backwardArray = [];
  for(var i = 0; i < string.length; i++){
    backwardArray.unshift(string[i]);
  }
  var backwardString = backwardArray.join('')
  if(backwardString !== string){
    return false;
  } 
  return true;
}
//3


//4
function alphabeticalString(string){
  var chars=[];
  for(var i = 0; i < string.length; i++){
    chars.push(string[i]);
  }
  var sortedChars = chars.sort().join('');
  return sortedChars;
}

//5
function upperCaseWords(string){
  var stringArray = string.split('');
  var upperCaseArray = [];
  for(var i = stringArray.length; i >= 0; i--){
    var char = stringArray[i];
    if(stringArray[i-1] === ' ' || stringArray[i-1] === undefined){
      char = char.toUpperCase();
    }
    upperCaseArray.unshift(char);
  }
  var upperCaseString = upperCaseArray.join('')
  return upperCaseString;
}

//6


//7
function countVowels(string){
  if(string.length === 0) return undefined;
  let charArray = string.split('');
  let count = 0;
  for(var i = 0; i < charArray.length; i++){
    if(charArray[i].match(/[aeiou]/gi)){
      count++;
    }
  }
  return count;
}

//8


//9
function typeOfArg(arg){
  return typeof arg;
}

//10



//11
function findSecondLowHigh(array){
  let secondLow = array[1];
  let secondHigh = array[array.length-2];
  let secondLowHigh = [secondLow, secondHigh];
  return secondLowHigh;
}

//16
function uniqueChars(string){
  if(string.length === 0) return undefined;
  var stringChars = string.split('');
  let uniqueArray = [];
  for(var i = 0; i < stringChars.length; i++){
    if(!uniqueArray.includes(stringChars[i])){
      uniqueArray.push(stringChars[i]);
    };
  }
  let uniqueCharsString = uniqueArray.join('');
  return uniqueCharsString;
}

//17
function charCount(string){
  if(string.length === 0) return undefined;
  let charArray = string.split('');
  let charCount = {};
  for(var i = 0; i < charArray.length; i++){
    let char = charArray[i];
    if(charCount[char]){
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}


//22
function charInStringCount(string, letter){
  if(string.length === 0) return undefined;
  let stringCharsArray = string.split('');
  let letterCount = 0;
  for(var i = 0; i < stringCharsArray.length; i++){
    if(stringCharsArray[i] === letter){
      letterCount++;
    }
  }
  return letterCount;
}

//23
function firstNoRepeatChar(string){
  if(string.length === 0) return undefined;
  let charArray = string.split('');
  let charCount = {};
  for(var i = 0; i < charArray.length; i++){
    let char = charArray[i];
    if(!charCount[char]){
      charCount[char] = 1;
    } else{
      charCount[char]++;
    }
  }
  for(let key in charCount){
    if(charCount[key] === 1){
      return key;
    }
  }
}

//25
function longestCountryName(countryArray){
  if(countryArray === 0) return undefined;
  let countryCharCount = {};
  let maxChars = 0;
  for(var i = 0; i < countryArray.length; i++){
    let country = countryArray[i];
    countryCharCount[country] = country.length;
    if(country.length > maxChars){
      maxChars = country.length;
    }
  }
  for(let key in countryCharCount){
    if(countryCharCount[key] === maxChars){
      return key;
    }
  }
}




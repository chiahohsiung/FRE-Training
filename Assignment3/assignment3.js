//1.reverse a number
//input: 12345
const reverseNumber = (number) => {
    let numStr = "" + number;
    return numStr.split('').reverse().join('')
}
console.log(reverseNumber(12345));

//2.Whether palindrome
const isPalindrome = (str) =>{
    if(! str instanceof String){
        return false;
    }
    else{
        let strArr = str.split('');
        for(let i = 0; i < strArr.length; i++ ){
            if(strArr[i] !== strArr[strArr.length - i - 1]){
                return false;
            }
            if(i ===  strArr.length - i - 1 || i > strArr.length - i){
                break;
            }
        }
        return true;
    }
}

console.log(isPalindrome('madam')); //true
console.log(isPalindrome('ada')); //true
console.log(isPalindrome('nurses')); //false

//3. generate all combinations of a string
const combinationGenerator = (str) =>{
    if(! str instanceof String){
        return [];
    }
    let len = str.length;
    let set = new Set();
    for(let i = 1; i <= len; i ++){
        //i: length of the substring
        for(let j = 0; j + i <= len; j ++){
            //j starting index
            let subStr = str.substring(j, j + i);
            if(!set.has(subStr)){
                set.add(subStr);
            }
        }
    }
    return [...set]; 
}
console.log(combinationGenerator('dog')); //[ 'd', 'o', 'g', 'do', 'og', 'dog' ]


//4.return alphabetical order
const alphabeticalOrder = (str) => {
    if(!str instanceof String){
        return null;
    }
    let strArr = str.split('');
    return strArr.sort().join('');
}
console.log(alphabeticalOrder('webmaster')); //'abeemrstw'


//5.change the first letter of word to Uppercase
const firstLetterUpperCaser = (str) => {
    if(!str instanceof String){
        return str;
    }
    let res = '';
    let indicator = true;
    for(let char of str){
        if(char === ' '){
            indicator = true;
            res += char;
        }
        else{
            res += indicator === true ? char.toUpperCase() : char;
            indicator = false;
        }
    }
    return res;
}

console.log(firstLetterUpperCaser('the quick brown fox')); //'The Quick Brown Fox'

//6.find longest word
const findLongestWord = (str) => {
    if(!str instanceof String){
        return null;
    }

    let res = '';
    let index = 0;
    let maxLen = 0;
    let curLen = 0;
    let trimedStr = str.trim();
    for(let char of trimedStr){
        curLen ++;
        if(char === ' '){
            if(curLen - 1 > maxLen){ //would not change if the length equals
                maxLen = curLen - 1;
                res = trimedStr.substring(index, curLen);
            }
            index += curLen;
        }
    }
    return res;
}

console.log(findLongestWord('Web Development Tutorial')); //'Development'

//7.counts vowels
const countVowels = (str) => {
    if(!str instanceof String){
        return null;
    }
    let vowels = ['a', 'e', 'i', 'o' ,'u', 'A', 'E', 'I' ,'O', 'U'];
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)){
            count ++;
        }
    }
    return count;
}
console.log(countVowels('The quick brown fox')); //5


//8. isPrime()
const isPrime = (number) => {
    if(! number instanceof Number){
        return false;
    }
    if(number <= 2){
        return true;
    }
    let divisor = 2;
    while(divisor < number){
        if(number % divisor === 0){
            return false;
        }
        divisor ++;
    }
    return true;
}

console.log(isPrime(1)); //true
console.log(isPrime(2)); //true
console.log(isPrime(4)); //false
console.log(isPrime(17)); //true
console.log(isPrime(18)); //false
console.log(isPrime(19)); //true

//9. return the type
const getType = (obj) => {
    return Object.prototype.toString.call(obj);
}
console.log(getType(123)); //[object Number]

//10.new matrix
const newMatrix = (rows, columns) => {
    let matrix = [];
    let index = 0;
    while(index < rows){
        matrix.push(new Array(columns));
        index ++;
    }
    return matrix;
}
let matrix = newMatrix(2, 3);
console.log(matrix.length); //2
console.log(matrix[0].length); //3

//11. get second lowest and second greatest
const getSecond = (arr) => {
    if(!Array.isArray(arr)){
        return null;
    }
    if(arr.length < 2){
        return null;
    }
    let res = [];
    arr.sort();
    res.push(arr[1]);
    res.push(arr[arr.length - 2]);
    return res.join(',')
}
console.log(getSecond([1, 2, 3, 4, 5])) //2,4


//12. isPerfect()
const isPerfect = (number) => {
    if(! number instanceof Number){
        return false;
    }
    if(number <= 1){
        return false;
    }
    let divisor = 2;
    let sum = 1;
    while(divisor < number){
        if(number % divisor === 0){
            sum += divisor;
        }
        divisor ++;
    }
    return sum === number;
}

console.log(isPerfect(2)); //false
console.log(isPerfect(5)); //false
console.log(isPerfect(6)); //true
console.log(isPerfect(27)); //false
console.log(isPerfect(28)); //true
console.log(isPerfect(495)); //false
console.log(isPerfect(496)); //true
console.log(isPerfect(8128)); //true

//13.get positive integers
const getFactors = (number) => {
    if(! number instanceof Number){
        return [];
    }
    if(number <= 0){
        return [];
    }
    let res = [1];
    let divisor = 2;
    while(divisor <= number){
        if(number % divisor === 0){
            res.push(divisor);
        }
        divisor ++;
    }
    return res;
}
console.log(getFactors(1)); //[1]
console.log(getFactors(2)); //[1,2]
console.log(getFactors(3)); //[1, 3]
console.log(getFactors(4)); //[1, 2, 4]

//14.amountToCoins
const amountToCoins = (amount, coinsArr) => {
    if(!amount instanceof Number){
        return '';
    }
    if(coinsArr === null || coinsArr.length === 0){
        return '';
    }
    let coins = []
    let index = 0;
    while(amount > 0){
        let coin = coinsArr[index];
        if(amount >= coin){
            coins.push(coin);
            amount -= coin;
        }else{
            if(index === coinsArr.length - 1){
                break;
            }else{
                index ++;
            }
        }
    }
    return coins.join(',');
}
console.log(amountToCoins(46, [25,10,5,2,1])); //25,10,10,1

//15. get exponation from user
const getExponation = () =>{
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Please enter the base : ', (base) => {
        rl.question('Please enter the exponent : ', (exponent) => {
            let result = Math.pow(base, exponent);
            console.log(`The result is ${result}`);
            rl.close();
        });
    });

}
//Interactive user input:
//getExponation();

//16.extract unique input
const extractUnique = (str) =>{
    if(!str instanceof String){
        return null;
    }
    const set = new Set();
    let res = '';
    for(let char of str){
        if(set.has(char)){
            continue;
        }
        set.add(char);
        res += char;
    }
    return res;
}
console.log(extractUnique('i am quite good')); // i amqutegod

//17. get the occurrences of each letter
//uppercase sensitive
const countOccurrences = (str) => {
    let map = new Map();
    for(let char of str){
        if(map.has(char)){
            map.set(char, map.get(char) + 1);
        }else{
            map.set(char, 1);
        }
    }
    for(let entry of map.entries()){
        console.log(`${entry[0]} : ${entry[1]}`);
    }
}

countOccurrences('GOOD');
// G : 1
// O : 2
// D : 1

//18. binary search
//arr need to be sorted
const binarySearch = (target, arr) => {
    if(!Array.isArray(arr)){
        return null;
    }
    if(!target instanceof Number){
        return null;
    }
    let start = 0;
    let end = arr.length - 1;
    while(start + 1 < end){
        let mid = (end - start)/2 + start;
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            start = mid;
        }
        else{
            end = mid;
        }
    }
    if(arr[start] === target){
        return start;
    }
    if(arr[end] === target){
        return end;
    }
    return null;
}
console.log(binarySearch(3, [1, 3, 4, 5, 6])) //1


//19. return array elements larger than a number
const getlargerArray = (number, arr) => {
    if(!number instanceof Number){
        return [];
    }
    if(!Array.isArray(arr)){
        return [];
    }
    let res = [];
    arr.map((val) => {
        if(val > number){
            res.push(val);
        }
    })
    return res;
}

console.log(getlargerArray(4, [2, 3, 1 ,5 ,6, 4])); //[5, 6]

//20. generate a string id of random characters
const generateId = (length, randomCharacters) =>{
    if(!length instanceof Number || !randomCharacters instanceof String){
        return null;
    }
    let result = '';
    for(let i = 0; i < length; i ++){
        result += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
    }
    return result;
}
console.log(generateId(5, 'czuxjhfcqwpiu21389hajskfbcjkzxhuj124'));  //i9psj

//21. generate subsets

//get all the subsets of length for arr form index start to index end
const subSetHelper = (length, arr, start, end) => {
    let result = [];
    if(length === 0){
        return result;
    }
    if(length === 1){
        let slicedArr = arr.slice(start, end + 1);
        let set = new Set();
        let res = [];
        slicedArr.map(v => {
            if(!set.has(v)){
                set.add(v);
                res.push([v]);
            }
        })
        return res;
    }
    if(start > end){
        return result;
    }
    if(start === end){
        return [[arr[start]]];
    }
    for(let i = start; i + length - 1 <= end; i ++){
        let cur = arr[i];
        let subsets = subSetHelper(length - 1, arr, i + 1, end);
        let set = new Set();
        for(let subset of subsets){
            let tempArr = subset.concat([cur]);
            tempArr.sort();
            let testStr = tempArr.join(',');
            if(!set.has(testStr)){
                set.add(testStr);
                result.push(tempArr);
            }
        }
    }
    return result;
}


const getSubsets = (length, arr) => {
    if(!length instanceof Number){
        return [];
    }
    if(! Array.isArray(arr)){
        return [];
    }
    if(length > arr.length || length < 0){
        return [];
    }
    if(length === 0){
        return [[]];
    }
    return subSetHelper(length, arr, 0, arr.length - 1);
}

console.log(getSubsets(1, [1, 2, 2])) //[ [ 1 ], [ 2 ] ]
console.log(getSubsets(2, [1, 2, 2])) //[ [ 1, 2 ], [ 2, 2 ] ]
console.log(getSubsets(3, [1, 2, 2])) //[ [ 1, 2, 2 ] ]



//22. get the Occurrences of a specified letter within the string
const getOccurrences = (letter, str) => {
    if(! letter instanceof String){
        return 0;
    }
    if(! str instanceof String){
        return 0;
    }
    let strPointer = 0;
    let letterPointer = 0;
    let occurences = 0;
    while(strPointer < str.length){
        if(str.charAt(strPointer) === letter.charAt(letterPointer)){
            if(letterPointer === letter.length - 1){
                occurences += 1;
                letterPointer = 0;
            }else{
                letterPointer ++;
            }
        }
        strPointer ++;
    }
    return occurences;
}
console.log(getOccurrences('is','this is the template string')); //2
console.log(getOccurrences('i','this is the template string')); //3
console.log(getOccurrences('o','Microsoft.com')); //3

//23.find first not repeated character
const findFirstNotRepeated = (str) => {
    if(!str instanceof String){
        return '';
    }
    let map = new Map();
    for(let char of str){
        if(map.has(char)){
           map.set(char, map.get(char) + 1); 
        }else{
            map.set(char, 1);
        }
    }
    for(let entry of map){
        if(entry[1] === 1){
            return entry[0];
        }
    }
    return '';
}

console.log(findFirstNotRepeated('abacddbec')) //'e'
console.log(findFirstNotRepeated('abacddbefgsc')) //'e'

//24. bubble sort in descending
const bubbleSort = (arr) => {
    if(!Array.isArray(arr)){
        return arr;
    }
    let count = 1;
    while(count > 0){
        count = 0;
        for(let i = 0; i < arr.length - 1; i ++){
            if(arr[i] < arr[i + 1]){
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                count ++;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([12,345,4,546,122,84])) //[ 546, 345, 122, 84, 12, 4 ]

//25.get longest country name
const getLongestCountryName = (countriesArr) => {
    if(!Array.isArray(countriesArr)){
        return '';
    }
    let maxLen = 0;
    let result = '';
    countriesArr.map( (country) => {
        if(country.length > maxLen){
            maxLen = country.length;
            result = country;
        }
    })
    return result;
}
console.log(getLongestCountryName(['Australia', 'Germany', 'United States of America'])); //United States of America

//26. return longest no repeating substring
const getLongestNonRepeatSubstring = (str) => {
    if(!str instanceof String){
        return '';
    }
    let start = 0;
    let end = 0;
    let maxLen = 0;
    let curLen = 0;
    let set = new Set();
    let result = '';
    while(end < str.length){
        if(!set.has(str.charAt(end))){
            set.add(str.charAt(end));
            curLen = end - start + 1;
            if(curLen > maxLen){
                maxLen = curLen;
                result = str.substring(start, end + 1);
            }
        }else{
            let repeatChar = str.charAt(end);
            while(str.charAt(start) !== repeatChar){
                set.delete(str.charAt(start));
                start ++;
            }
            start ++;
        }
        end ++;
    }
    return result;
}

console.log(getLongestNonRepeatSubstring('abcde')); //'abcde'
console.log(getLongestNonRepeatSubstring('abcccdef')) //'cdef'

//27.return the longest palindrome
const getLongestPalindrome = (str) => {
    if(!str instanceof String){
        return '';
    }
    let maxLen = 0;
    let result = [];
    for(let i = 0; i < str.length; i++){
        for(let len = 1; i + len <= str.length; len ++){
            if(len < maxLen){
                continue;
            }
            let subStr = str.substring(i, i + len);
            if(isPalindrome(subStr)){
                if(result.length > 0 && result[0].length < len){
                    result = [];
                }
                maxLen = len;
                result.push(subStr);
            }
        }
    }
    let set = new Set([...result]) //delete duplicate
    return [...set].join(',')
}

console.log(getLongestPalindrome('abcd')) //a,b,c,d
console.log(getLongestPalindrome('bananas')); //anana
console.log(getLongestPalindrome('abracadabraca')); //aca, ada


//28. pass function as the parameter
const myHighOrder = (func , myNumber) =>{
    if(!func instanceof Function){
        console.log('Need Function')
    }
    console.log(func(myNumber));
}

myHighOrder( a => a + 1, 1); //2

//29.get function name
const getFunctionName = (func) => {
    if(!func instanceof Function){
        return '';
    }
    return func.name === '' ? 'Anonymous Function': func.name;
}
console.log(getFunctionName( function func1(){})); //func1
console.log(getFunctionName( function (){})); //Anonymous Function
console.log(getFunctionName( () => {} )); //Anonymous Function


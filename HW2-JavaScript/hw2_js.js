/*1. Reverse a number*/
function reverseNum(num) {
    return parseFloat(
        num
            .toString()
            .split('')
            .reverse()
            .join('')
    ) * Math.sign(num);
}

console.log(reverseNum(12345));
console.log(reverseNum(-12345));

/*2. Check palindrome*/
function checkPalidrome(str) {
    let lo = 0, hi = str.length - 1;
    while(lo < hi) {
        if(str[lo] !== str[hi])
            return false;
        lo++;
        hi--;  
    }
    return true;
}

console.log(checkPalidrome('abcba'));
console.log(checkPalidrome('hello'));

/*3. All combinations of a string*/
const allCombination = str => {
    const result = [];
    let high = 1;
    while(high <= str.length) {
        let start = 0;
        while(start < str.length) {
            result.push(str.substring(start, start + high));
            start++;
        }
        high++;
    }
    return result;
};

console.log(allCombination('dog'));

/*4. Sorting string*/
const sortStr = str => {
    return str
                .split('')
                .sort()
                .join('')
};

console.log(sortStr("dcba"));

/*5. Convert first letter of each word in upper letter.*/
const convertFirstUpper = str => {
    let arr = str.split(' ');
    let result = []
    for(let ele of arr) {
        result.push(ele[0].toUpperCase() + ele.slice(1));
    }
    return result.join(' ');
};

console.log(convertFirstUpper('the quick brown fox'));

/*6. Find the longest word whithin the string*/
const findLongestWord = str => {
    let arr = str.split(' ');
    let result = '';
    let maxLength = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > maxLength) {
            result = arr[i];
            maxLength = arr[i].length;
        }
    }
    return result;
};

console.log(findLongestWord('Web Development Tutorial'));

/*7. Count Vowels*/
const countVowels = str => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let result = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowels.has(str[i])) {
            result++;
        }
    }
    return result;
};

console.log(countVowels('The quick brown fox'));

/*8. Check Prime Number*/
const checkPrime = num => {
    if(num < 3) {
        return num === 2;
    }
    if(num % 2 === 0) {
        return false;
    }
    for(let i = 3; i < num; i += 2) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(checkPrime(4)); //should be false
console.log(checkPrime(19)); //should be true

/*9. Return Type*/
const checkType = arg => {
    return typeof arg;
}

console.log(checkType('123')); //should be string
console.log(checkType(123)); //should be number

/*10. n rows by n columns identity matrix*/
const nBynMatrix = n => {
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr[i] = new Array(n).fill(0);
        arr[i][i] = 1;
    }
    return arr;
};

console.log(nBynMatrix(3));

/*11. Find the second lowest and second greatest numbers in an array*/
const findSecondNum = arr => {
    if(arr.length < 3) {
        return [];
    }
    arr.sort();
    return [arr[1], arr[arr.length - 2]];
}

console.log(findSecondNum([3,2,1,5,4]));

/*12. Perfect Number*/
const isPerfect = num => {
    let sum = 0;
    for(let i = 1; i < num; i++) {
        if(num%i === 0) {
            sum += i;
        }
    }
    return sum === num;
};

console.log(isPerfect(8128));

/*13. Factors of positive integer*/
const findFactors = num => {
    const res = [];
    for(let i = 1; i <= num; i++) {
        if(num%i === 0) {
            res.push(i);
        }
    }
    return res;
};

console.log(findFactors(66));

/*14. Amount to coins*/
const amountToCoins = (target, coins) => {
    const res = [];
    coins.sort((a,b) => b-a);
    let currIdx = 0;
    while(target != 0) {
        if(target - coins[currIdx] < 0) {
            currIdx++;
        }
        else {
            res.push(coins[currIdx]);
            target -= coins[currIdx];
        }
    }
    return res;
};

console.log(amountToCoins(46, [1, 2, 5, 10, 25]));

/*15. Compute power n of b*/
const powerN = (b, n) => {
    return b**n;
};

console.log(powerN(4,2));

/*16. Extract unique characters from a string*/
const uniqueChars = str => {
    let res = new Set();
    for(let i = 0; i < str.length; i++) {
        res.add(str[i]);
    }
    return [...res].join('');
};

console.log(uniqueChars('thequickbrownfoxjumpsoverthelazydog'));

/*17. Get the number of occurrences of each letter in specified string*/
const countOccur = str => {
    let map = new Map(); 
    
    for(let i = 0; i < str.length; i++) {
        if(!map.has(str[i])) {
            map.set(str[i], 0);
        }
        console.log("count = ", i);
        console.log(str[i]);
        map.set(str[i], map.get(str[i]) + 1);
        
    }
    return [...map]
};

console.log(countOccur("show me the money again, show them again, and again"));
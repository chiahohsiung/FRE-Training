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
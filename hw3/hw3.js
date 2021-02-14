// common variables
let x = 0; // number
let str = '', str1 = '', str2 = ''; // string
let arr = []; // general array
let nums = []; // number array

// 1. Write a function to reverse a number.
// input: 32243
// output: 34223
function reverseNum(x) {
	let res = 0, t = x;
	while(t > 0) {
		res = (res * 10 + t % 10);
		t = Math.floor(t / 10);
	}
	return res;
}

x = 32243;
console.log('q1', reverseNum(x));

// 2. Write a function to check whether a string is palindrome or not.
function isPalindrome(str) {
	let left = 0, right = str.length-1;
	while(left < right) {
		if(str[left] !== str[right]) return false;
		left += 1;
		right -= 1;
	}
	return true;
}

str1 = '1234321';
str2 = 'abcdba';
console.log('q2', isPalindrome(str1));
console.log('q2', isPalindrome(str2));

// 3. Write a function to get all substrings of a string.
// input: 'dog'
// output: 'd', 'do', 'dog', 'o', 'og', 'g'
function getSubstrings(str) {
	let res = [];
	for(let i = 0; i < str.length; i++) {
		for(let j = i+1; j <= str.length; j++) {
			res.push(str.slice(i, j));
		}
	}
	return res;
}

str = 'dog';
console.log('q3', getSubstrings(str));

// 4. Write a function that to sort a string in alphabetical order.
// Assume no punctuation and number included.
// input: 'webmaster'
// output: 'abeemrstw'

function quickSort(arr) {
	if(arr.length <= 1) return arr;
    let i = 0, j = arr.length-1;
    while(i < j) {
    	let left, right, temp;
        if(arr[i] >= arr[i+1]) {
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            i += 1;
        }
        else {
            temp = arr[i+1];
            arr[i+1] = arr[j];
            arr[j] = temp;
            j -= 1;
        }
    }
    let left = quickSort(arr.slice(0, i));
    let right = quickSort(arr.slice(i+1));
    left.push(arr[i], ...right);
    return left;
}

function sortString(str) {
	let arr = str.split('');
	let res = quickSort(arr);
	return res.join('');
}

str = 'webmaster';
console.log('q4', sortString(str));

// 5. Write a function to convert the first letter of each word within a string to uppercase.
// input: 'the quick brown fox'
// output: 'The Quick Brown Fox'
function convertFirstLetter(str) {
	let arr = str.split(' ');
	for(let i in arr) {
		arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
	}
	return arr.join(' ');
}

str = 'the quick brown fox';
console.log('q5', convertFirstLetter(str));

// 6. Write a function to find the longest word within a string.
// input: 'Web Development Tutorial'
// output: 'Development'
function findLongestWord(str) {
	let arr = str.split(' ');
	let res = '';
	arr.forEach(w => {
		if(w.length > res.length) res = w;
	});
	return res;
}

str = 'Web Development Tutorial';
console.log('q6', findLongestWord(str));

// 7. Write a function to count the number of vowels within a string.
// Note: letter 'y' is not a vowel here.
// input: 'The quick brown fox'
// output: 5
function countVowels(str) {
	let res = 0;
	let vowels = {a: 0, e: 0, i: 0, o: 0, u: 0};
	for(let c of str) {
		if(c in vowels) {
			vowels[c] += 1;
		}
	}
	for(let k in vowels) res += vowels[k];
	return res;
}

str = 'The quick brown fox';
console.log('q7', countVowels(str));

// 8. Write a function to check whether a number is prime or not.
function isPrime(x) {
	for(let i = 2; i <= Math.sqrt(x); i++) {
		if(x % i === 0) return true;
	}
	return false;
}

console.log('q8', 79, isPrime(79));
console.log('q8', 25, isPrime(25));

// 9. Write a function to return the type of the a variable.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function getType(varb) {
	return typeof varb;
}

let args = [{}, true, setTimeout, 12, 'abc', undefined, Number];
console.log('q9', args.map(e => getType(e)));

// 10. Write a function to create a n*n identity matrix.
function genIdentityMatrix(n) {
	let res = [];
	for(let i = 0; i < n; i++) {
		res[i] = new Array(n).fill(0);
		res[i][i] = 1;
	}
	return res;
}

console.log('q10', genIdentityMatrix(5));

// 11. Write a function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// input: [5, 2, 3, 1, 4]
// output: [2, 4]
function find2ndMinMax(nums) {
	let mx = [-Infinity, -Infinity];
	let mn = [Infinity, Infinity];
	nums.forEach(v => {
		if(v >= mx[0]) {
			mx[1] = mx[0];
			mx[0] = v;
		}
		else if(v > mx[1]) {
			mx[1] = v;
		}

		if(v <= mn[0]) {
			mn[1] = mn[0];
			mn[0] = v;
		}
		else if(v < mn[1]) {
			mn[1] = v;
		}
	});
	return [mn[1], mx[1]];
}

nums = [5, 2, 3, 1, 4];
console.log('q11', find2ndMinMax(nums));

// 12. Write a function to check whether a number is perfect or not.
// Notes: A perfect number is a positive integer that is equal to the sum of its proper positive divisors.
// input: 6 = 1 * 2 * 3 = 1 + 2 + 3
// output: true
function isPerfectNumber(x) {
	if(x === 1) {return false;}
	let sum = 0;
	for(let i = 1; i <= Math.sqrt(x); i++) {
		if(x % i === 0) {
			sum += (i + x/i)
		}
	}
	return sum === 2 * x;
}

console.log('q12', 496, isPerfectNumber(496));
console.log('q12', 8128, isPerfectNumber(8128));

// 13. Write a function to get all the factors of a positive integer.
function countFactors(x) {
	let res = [];
	for(let i = 1; i < Math.sqrt(x); i++) {
		if(x % i === 0) {
			res.push(i);
			res.push(x / i);
		}
	}
	if(x % Math.sqrt(x) === 0) {
		res.push(Math.sqrt(x));
	}
	return res;
}

console.log('q13', 24, countFactors(24));
console.log('q13', 36, countFactors(36));

// 14. Write a function to compute the fewest number of coins that you need to make up the amount of money.
// input: amount = 46, coins = [25, 10, 5, 2, 1]
// output: [25, 10, 10, 1]

function coinChange(coins, amount) {
	let i = 0, x = amount;
	let res = [];
	while(x > 0 && i < coins.length) {
		for(let j = 0; j < Math.floor(x / coins[i]); j++) {
			res.push(coins[i]);
		}
		x %= coins[i];
		i += 1; 
	}
	return res;
}

let coins = [25, 10, 5, 2, 1];
console.log('q14', coinChange(46, coins));

// 15. Write a function to calculate x raised to the power n.
function power(base, exp) {
	let k = Math.abs(exp);
	let prev = base, res = 1;
	while(k > 0) {
		res *= k % 2 === 1 ? prev : 1;
		prev *= prev;
		k >>= 1;
	}
	return exp > 0 ? res : 1/res;
}

console.log('q15', power(2, 13));
console.log('q15', power(2, -3));

// 16. Write a function to extract unique characters from a string.
// input: 'thequickbrownfoxjumpsoverthelazydog'
// output: 'thequickbrownfxjmpsvlazydg'
function extractUniqueChar(str) {
	let pool = new Set();
	let res = [];
	for(let c of str) {
		if(!pool.has(c)) {
			res.push(c);
			pool.add(c);
		}
	}
	return res.join('');
}

str = 'thequickbrownfoxjumpsoverthelazydog';
console.log('q16', extractUniqueChar(str));

// 17. Write a JavaScript function to count the number of occurrences for each letter in a string.
function countLetters(str) {
	let count = {};
	for(let c of str) {
		if(!count[c]) {
			count[c] = 0;
		}
		count[c] += 1;
	}
	return count;
}

str = 'aodhalfaolfihjleflwfw';
console.log('q17', countLetters(str));

// 18. Write a function to implement a binary search.
function binarySearch(nums, target) {
	let left = 0, right = nums.length, mid = 0;
	while(left < right) {
		mid = Math.floor((left + right) / 2);
		if(nums[mid] === target) {
			return mid
		}
		else if(nums[mid] > target) {
			right = mid;
		}
		else {
			left = mid + 1;
		}
	}
	return -1;
}

nums = [-1, 0, 3, 5, 9, 12];
console.log('q18', binarySearch(nums, 9));
console.log('q18', binarySearch(nums, 2));

// 19. Write a function to return the all array elements that are larger than a given number.
nums = [6, 11, 1, 10, 8, 12, 4];
console.log('q19', nums.filter(v => v > 9));

// 20. Write a function to create a string Id (with a fixed length) for a string.
// input: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function createId(str, len) {
	let res = '';
	for(let i = 0; i < len; i++) {
		res += str[Math.floor(Math.random() * str.length)];
	}
	return res;
}

console.log('q20', createId(str, 8));

// 21. Write a function to get all possible subsets (with a fixed length) of an array.
// input: array = [1, 2, 3, 3, 4], length = 2
// output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
function getSubsets(arr, len) {
	// let set_arr = [...new Set(arr)];
	if(len === 1) {
		return arr.map(e => [e]);
	}
	let res = [];
	for(let i = 0; i < arr.length-len+1; i++) {
		let rest = getSubsets(arr.slice(i+1), len-1);
		rest.forEach(e => e.push(arr[i]));
		res.push(...rest);
	}
	return res;
}

arr = [1, 4, 2, 3, 3];
let set_arr = [...new Set(arr)];
console.log('q21', getSubsets(set_arr, 2));

// 22. Write a function that to count the number of occurrences of the specified character within a string. 
// input: string = 'microsoft.com', target = 'o'
// output: 3
function countLetter(str, target) {
	let res = 0;
	for(let c of str) {
		res += c === target ? 1 : 0;
	}
	return res
}

str = 'microsoft.com';
console.log('q22', countLetter(str, 'o'));

// 23. Write a JavaScript function to find the first not repeated character.
// input: 'abacddbec'
// output: 'e'
function find1stUnqiue(str) {
	let count = {};
	for(let c of str) {
		if(!count[c]) {
			count[c] = 0;
		}
		count[c] += 1;
	}
	for(let c of str) {
		if(count[c] === 1) {
			return c
		}
	}
	return '';
}

str = 'abacddbec';
console.log('q23', find1stUnqiue(str));

// 24. Write a function to implement Bubble Sort.
// input: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(nums) {
	let temp = 0, sorted = true;
	for(let i = nums.length-1; i > 0; i--) {
		for(let j = 0; j < i; j++) {
			if(nums[j] < nums[j+1]) {
				temp = nums[j];
				nums[j] = nums[j+1];
				nums[j+1] = temp;
				sorted = false;
			}
		}
		if(sorted) break;
	}
	return nums;
}

nums = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log('q24', bubbleSort(nums));

// 25. Write a function to return the longest country name within an array of country names.
// input: ['Australia', 'Germany', 'United States of America']
// output: 'United States of America'
arr = ['Australia', 'Germany', 'United States of America'];
console.log('q25', arr.reduce((acc, cur) => cur.length > acc.length ? cur : acc, ''));

// 26. Write a function to find the longest substring without repeating characters. 
function longestUniqueSubstring(str) {
	let res = '';
	let pool = new Set();
	let left = 0, right = 0;
	while(right < str.length) {
		while(left < right) {
            pool.delete(str[left]);
			if(str[left] === str[right]) {
                left += 1;
				break;
			}
			left += 1;
		}

		while(right < str.length) {
			if(pool.has(str[right])) {
				break;
			}
			pool.add(str[right]);
			right += 1;
		}

		if(right-left > res) {
			res = str.slice(left, right);
		};
	}
    return res;
}

str = 'abcabcbb';
console.log('q26', longestUniqueSubstring(str));

// 27. Write a function to find the longest palindrome substring.
function longestPalindromicSubstring(str) {
	let res = str[0];
	let dp = [];
	for(let i = 0; i < str.length; i++) {
		dp[i] = new Array(str.length).fill(false);
        dp[i][i] = true;
	}

	for(let i = str.length-2; i >= 0; i--) {
        if(str[i] === str[i+1]) {
            dp[i][i+1] = true;
            if(res.length < 2) res = str.slice(i, i+2); 
        }
		for(let j = i+2; j < str.length; j++) {
            if(str[i] === str[j] && dp[i+1][j-1]) {
                dp[i][j] = true;
                if(res.length < j-i+1) res = str.slice(i, j+1); 
            }
		}
	}
    return res;
}

str = 'babad';
console.log('q27', longestPalindromicSubstring(str));

// 28. Write a function that accepts a 'JavaScript function' as a parameter.
function myFilter(arr, func) {
    const res = [];
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res
}

nums = [1, 2, 3, 4, 5];
console.log('q28', myFilter(nums, e => e > 3));

// 29. Write a function to get the function name.
const foo = function getfunctionName() {
    return arguments.callee.name;
}

console.log('q29', foo());
const reverse = num => {
    let sign = true;
    if (num < 0) {
        sign = false;
    }
    let ret = 0
    while (num) {
        ret += num % 10;
        num = Math.floor(num / 10);
    }
    return ret;
};

const isPalindrome = word => {
    let l = 0;
    let r = word.length - 1;
    while (l < r) {
        if (word[l] != word[r]) {
            return false;
        }
    }
    return true;
}

const combinations = word => {
    const ret = []
    for (let i = 0; i < word.length; i++) {
        for (let j = i; j < word.length; j++) {
            ret.push(word.slice(i, j));
        }
    }
    return ret;
}

const sortString = word => word.split('').sort().join('');

const capString = sentence => {
    const ret = [];
    sentence.split().forEach(el => {
        ret.push(el[0].toUpperCase() + el.slice(1));
    });
    return ret.join(' ');
}

const longestWord = sentence => {
    let l = -1;
    let word = '';
    sentence.split().forEach(el => {
        if (el.length > l) {
            word = el;
            l = el.length;
        }
    })
    return word;
}

const countVowels = sentence => {
    const vowels = new Set([...'aeiou']);
    let counter = 0;
    [...sentence].forEach(e => {
        if (vowels.has(e.toLowerCase())) {
            counter += 1
        }
    });
}

const isPrime = num => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

const getType = param => typeof param;

const getMatrix = n => {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        matrix[i][i] = 1;
    }
    return matrix;
}

const getSecondMinMax = arr => {
    arr.sort();
    return [arr[1], arr[arr.length - 2]];
}

const isPerfect = num => {
    if (num < 1) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            sum += i
        }
    }
    return sum === num;
}

const getFactors = num => {
    const factors = [];
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            factors.push(i);
        }
    }
    return [1, ...factor, num];
}

const toCoins = (amount, coins) => {
    coins.sort((a, b) => b - a);
    let c = [];
    for (let i = 0; i < coins.length; i++) {
        if (amount > coins[i]) {
            let times = amount % coins[i];
            amount -= times * coins[i];
            for (let j = 0; j < times; j++) {
                c.push(coins[i]);
            }
        }
    }
    return c;
}

const bn = (b, n) => b ^ n;

const unique = str => (new Set([...str])).join('');

const counter = str => {
    const c = {};
    [...str].forEach(e => {
        c[e] = (c[e] || 0) + 1;
    })
    return c;
}

const bs = (arr, target) => {
    let l = 0;
    let r = arr.length;
    let mid;
    while (l < r) {
        mid = Math.floor((l + r) / 2);
        if (target == arr[mid]) {
            return mid;
        }
        if (target < arr[mid]) {
            r = mid - 1;
        }
        if (target > arr[mid]) {
            l = mid;
        }
    }
    return -1;
}

const larger = (arr, target) => arr.filter(e => e > target);

const getId = length => {
    let ret = ""
    const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        ret += pool[Math.floor(Math.random() * pool.length)];
    }
    return ret;
}

const getComb = (arr, length) => {
    const ret = [];
    arr.sort();
    const helper = (j, curr) => {
        if (curr.length === length) {
            ret.push(curr);
            return;
        }
        for (let i = j + 1; i < arr.length; i++) {
            helper(i, [...curr, arr[i]]);
        }
    }
    helper(0, []);
    return ret;
}

const countOccur = (str, target) => [...str].reduce((acc, curr) => acc + (curr === target ? 1 : 0), 0);

const firstNotRepeated = str => {
    const temp = {}
    const deleted = new Set();
    for (let i = 0; i < str.length; i++) {
        if (temp.hasOwnProperty(str[i])) {
            delete temp[str[i]];
            deleted.add(str[i])
        } else if (!deleted.has(str[i])) {
            temp[str[i]] = i;
        }
    }
    let ret = 0;
    return Math.min(...Object.values(temp));
}

const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const findLongestCountry = arr => arr.reduce((acc, curr) => acc.length < curr.length ? curr : acc, '');

const findLongestSubstring = str => {
    let set = new Set();
    const ret = [];
    let curr = "";
    for (let i = 0; i < str.length; i++) {
        if (!set.has(str[i])) {
            curr += str[i];
            set.add(str[i]);
        } else {
            ret.push(curr);
            set = new Set();
            set.add(str[i]);
            curr = str[i];
        }
    }
    return findLongestCountry(ret);
}

const longestPalindrome = str => {
    if (str.length < 2) {
        return str;
    }
    let ret = [];
    for (let i = 1; i < str.length - 1; i++) {
        for (let j = 1; i - j > 0 && j + i < str.length; j++) {
            if (str[i - j] != str[i + j]) {
                ret.push(str.substr(i - j + 1, i + j - 1));
            }
        }
    }
    return findLongestCountry(ret);
}

const runner = (func, ...param) => {
    func(param);
}

const getFuncName = func => func.name;
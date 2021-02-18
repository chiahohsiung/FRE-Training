function problem1(number) {
    let answer = 0;
    while (number !== 0) {
        answer = (number % 10) + answer * 10;
        number = Math.floor(number / 10);
    }
    return answer;
}

function problem2(string) {
    let noSpace = string.replace(" ", "");
    function reverse(s) {
        return s.split("").reverse().join("");
    }
    if (string.length % 2 === 0)
        return (
            noSpace.slice(0, string.length / 2) ===
            reverse(noSpace.slice(string.length / 2, string.length))
        );
    else
        return (
            noSpace.slice(0, string.length / 2) ===
            reverse(noSpace.slice(string.length / 2 + 1, string.length))
        );
}

function problem3(string) {
    function checkMap(string, map) {
        if (!map.hasOwnProperty(string)) {
            map[string] = true;
            return true;
        } else return false;
    }
    function allCombinations(string, list, map) {
        if (string.length === 0) return;
        if (checkMap(string, map));
        list.push(string);
        if (string.length !== 1) {
            if (checkMap(string.slice(1), map)) list.push(string.slice(1));
        }
        if (checkMap(string[0], map)) list.push(string[0].toString());
        if (checkMap(string.slice(0, string.length - 1), map))
            list.push(string.slice(0, string.length - 1));
        allCombinations(string.slice(1), list, map);
        return list;
    }
    let map = {};
    return allCombinations(string, [], map);
}

function problem4(string) {
    if (string.length === 0) return string;
    return string.split("").sort().join("");
}

function problem5(string) {
    if (string.length === 0) return string;
    let arr = string.split(" ");
    arr.forEach((item, index, array) => {
        array[index] = item
            .charAt(0)
            .toUpperCase()
            .concat(item.slice(1, item.length));
    });
    return arr.join(" ");
}

function problem6(string) {
    let arr = string.split(" ");
    let longest = -1;
    let indexOfLongest = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
            indexOfLongest = i;
        }
    }
    return arr[indexOfLongest];
}

function problem7(string) {
    let answer = 0;
    for (c in string) {
        if (
            string[c] === "a" ||
            string[c] === "e" ||
            string[c] === "i" ||
            string[c] === "o" ||
            string[c] === "u"
        )
            answer++;
    }
    return answer;
}

function problem8(number) {
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    let i = 5;
    while (Math.pow(i, 2) <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
function problem9(type) {
    return typeof type;
}
function problem10(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let column = [];
        for (let j = 0; j < n; j++) {
            if (j === i) column.push(1);
            else column.push(0);
        }
        matrix.push(column);
    }
    return matrix;
}

function problem11(numbers) {
    let answer = [];
    numbers.sort();
    answer.push(numbers[1]);
    answer.push(numbers[numbers.length - 2]);
    return answer;
}
function problem12(n) {
    let factors = findFactors(n);
    return (
        factors.reduce((acc, curr) => {
            return acc + curr;
        }, 0) /
            2 ===
        n
    );
}
function findFactors(n) {
    let i = 1;
    let factors = [];
    while (i <= Math.sqrt(n)) {
        if (n % i === 0) {
            if (n / i === i) factors.push(i);
            else {
                factors.push(i);
                factors.push(n / i);
            }
        }
        i++;
    }
    return factors;
}
function problem13(n) {
    return findFactors(n);
}

function problem14(n) {
    const coins = [25, 10, 5, 2, 1];
    const usedCoins = [];
    let count = 0;
    while (n >= 0 && count < 5) {
        if (n - coins[count] >= 0) {
            n = n - coins[count];
            usedCoins.push(coins[count]);
        } else {
            count++;
        }
    }
    return usedCoins;
}

function problem15(b, n) {
    return Math.pow(b, n);
}
function problem16(string) {
    const strArray = [...string];
    const map = {};
    let answer = "";
    for (let i = 0; i < strArray.length; i++) {
        if (!map[strArray[i]]) {
            answer += strArray[i];
            map[strArray[i]] = true;
        }
    }
    return answer;
}
function problem17(string) {
    let map = {};
    for (let i = 0; i < string.length; i++) {
        if (!map[string[i]]) {
            map[string[i]] = 1;
        } else {
            map[string[i]]++;
        }
    }
    return map;
}
function testProblem18(test) {
    return problem18(test.list, test.target);
}
function problem18(list, target) {
    if (list.length === 1) return 0;
    let left = 0,
        right = list.length - 1,
        mid;
    while (right >= left) {
        mid = Math.floor((left + right) / 2);
        if (list[mid] === target) {
            return mid;
        }
        if (list[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}
function problem19(n) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(Math.floor(Math.random() * 100 + n));
    }
    return answer;
}
function problem20(n) {
    let charcterList =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < n; i++) {
        id = id.concat(
            charcterList[Math.floor(Math.random() * charcterList.length)]
        );
    }
    return id;
}
function problem21(numbers, n) {
    const subset = numbers.reduce(
        (subsets, value) =>
            subsets.concat(subsets.map((set) => [value, ...set])),
        [[]]
    );
    let answer = [];
    subset.forEach(item=>{
        if(item.length >= n)
            answer.push(item);
    })
    return answer;
}
function testProblem21(test) {
    return problem21(test.list, test.n);
}
function problem22(string, letter){
    let map = {[letter]:0};
    for(let i = 0; i < string.length; i ++){
        if(string[i] === letter){
            map[letter]++;
        }
    }
    return map[letter];
}
function testProblem22(test){
    return problem22(test.string, test.letter);
}

function problem23(string){
    const map = {};
    for(let i =0; i < string.length; i ++){
        if(!map[string.charAt(i)]){
            const indexFreq = {
                index : i,
                freq : 1
            }
            map[string.charAt(i)] = indexFreq;
        }
        else{
            map[string.charAt(i)].freq++;
        }
    }
    let char, smallestIndex = Number.MAX_VALUE;
    Object.keys(map).forEach(item =>{
        if(map[item].freq === 1){
            if(map[item].index < smallestIndex){
                smallestIndex = map[item].index;
                char = item;
            }
        }
    });
    return char;
}
function problem24(list){
    for(let i = 0; i < list.length; i ++){
        for(let j = 0; j < list.length - 1 - i; j ++){
            if(list[j] > list[j+1]){
                let temp = list[j+1];
                list[j+1] = list[j];
                list[j] = temp;
            }
        }
    }
    return list;
}
function problem25(countries){
    let max = Number.MIN_VALUE;
    let country = "";
    countries.forEach(item =>{
        if(item.length > max){
            max = item.length;
            country = item;
        }
    });
    return country;
}
function problem26(string){
    let max = 0, left = 0;
    let map = {};
    for(let i = 0; i < string.length; i ++){
        if(map.hasOwnProperty(string.charAt(i))){
            if(map[string.charAt(i)] + 1 > left){
                left = i;
            }
        }
        map[string.charAt(i)] = i;
        max = Math.max(max, i - left + 1);
    }
    return max;
}

function problem29(foo){
    return foo.name;
}
function testFunction(func, input, expected) {
    console.log("Testing: " + func.name);
    console.log("Expected answer: ");
    console.log(expected);
    console.log("Actual: ");
    console.log(func(input));
    console.log("");
}


/*
testFunction(problem1,32243, 34223);
testFunction(problem2, "maam", true);
testFunction(problem3,"dog","wtf");
testFunction(problem4, "webmaster", "abeemrstw");
testFunction(problem5, "the quick brown fox", "The Quick Brown Fox");
testFunction(problem6, "Web Development Tutorial", "Development");
testFunction(problem7,"The quick brown fox.", 5);
testFunction(problem8, 72,false);
testFunction(problem9, {}, typeof {});

testFunction(problem10, 4, [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
]);
testFunction(problem11, [3, 2, 4, 1, 5], [2, 4]);
testFunction(problem12, 28, true);
testFunction(problem13, 60, [60, 30, 20, 15, 10, 6, 5, 4, 3, 2, 1]);
testFunction(problem14, 46, [25, 10, 10, 1]);
testFunction(
    problem16,
    "thequickbrownfoxjumpsoverthelazydog",
    "thequickbrownfxjmpsvlazydg"
);
testFunction(problem17, "the quick brown fox", {
    t: 1,
    h: 1,
    e: 1,
    " ": 3,
    q: 1,
    u: 1,
    i: 1,
    c: 1,
    k: 1,
    b: 1,
    r: 1,
    o: 2,
    w: 1,
    n: 1,
    f: 1,
    x: 1,
});
*/
testFunction(testProblem18, { list: [3, 5, 6, 7, 8, 9], target: 3 }, 0);
testFunction(problem19, 4, []);
testFunction(problem20, 10, "");
testFunction(testProblem21, { list: [1, 2, 3], n: 2 }, [
    [2, 1],
    [3, 1],
    [3, 2],
    [3, 2, 1],
]);
testFunction(testProblem22, {string:"microsoft.com","letter": "o"},3);
testFunction(problem23, "abcddbec", "a");
testFunction(problem24, [2,4,2,6,3,8,9,10,2,5],[2,2,2,3,4,5,6,8,9,10]);
testFunction(problem25,["Australia", "Germany", "United States of America"],"United States of America");
testFunction(problem26, "abcabcbb", 3);
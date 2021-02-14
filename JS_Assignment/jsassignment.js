//1
function reverseNum(num){
    let res = 0;
    let target = num;
    while(target > 0){
        res *= 10;
        res += target % 10;
        target = Math.floor(target/10);
    }
    return num%10 === 0? res * 10 :res;
};

const num = 32243;
console.log(reverseNum(num));

//2
function checkPalindrome(string){
    var check = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'')
    var count = 0;
    if (check ===""){
        return false;
    }

    if ((check.length)%2 === 0){
        count = check.length / 2;
    }

    else{
        if (check.length === 1){
            return true;
        }

        else{
            count = (check.length - 1)/2
        }
    }

    for (let i = 0; i < count; i++){
        if (check[i] != check.slice(-1-i)[0]) {
			return false;
        }
    }
    return true;
}

console.log(checkPalindrome("Madam"))


//3
function strCom(string){
    var arr = [];
    for (let i = 0, j = 1; i < string.length; i++, j++){
        arr[i] = string.substring(i,j);
    }

    var res = [];
    var temp = "";
    var count = Math.pow(2, arr.length);

    for(let i = 0; i < count; i++){
        temp= "";
        for (let j=0; j<arr.length; j++) {
            if ((i & Math.pow(2,j))){ 
                temp += arr[j];
            }
        }
        if (temp !== "")
        {
            res.push(temp);
        }
    }
    console.log(res);
}
console.log(strCom("dog"));


//4
function strAlp(string){
    return string.split('').sort().join('');
}
console.log(strAlp("webmaster"));


//5
function convertUpper(string){
    var arr = string.split(" ");
    var res = [];
    
    for (let i = 0; i < arr.length; i++){
        res.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    return res.join(" ")
}

console.log(convertUpper("the quick brown fox"));



//6
function longestStr(string){
    var arr = string.split(" ");
    var max_len = 0;
    var res = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > max_len){
            max_len = arr[i].length;
            res = i;
        }
    }
    return arr[res];
}

console.log(longestStr("Web Development Tutorial"));



//7
function findVowels(string){
    var vowel = "aeiouAEIOU";
    var count = 0;

    for(let i = 0; i < string.length; i++){
        if(vowel.indexOf(string[i]) !== -1){
            count += 1;
        }
    }
    return count
}
console.log(findVowels("The quick brown fox"));



//8
function checkPrime(num){
    if(num === 1){
        return false;
    }
    else if(num === 2){
        return true;
    }else{
        for(let i = 2; i < num; i++){
            if( num%i === 0){
                return false;
            }
        }
        return true;
    }
}
console.log(checkPrime(37));


//9
function getType(para){
    var dtypes = [Function, RegExp, Number, String, Boolean, Object];
    var len = dtypes.length;
    
    if (typeof para === "object" || typeof para === "function") 
    {
        for (let i = 0; i < len; i++)
        {
            if (para instanceof dtypes[i])
            {
                return dtypes[i];
            }
        }
    }
    
    return typeof para;
}
/*console.log(getType(12));
console.log(getType('developer'));
console.log(getType(false));
console.log(getType());
console.log(getType(new Function()));

if(typeof a === 'undefined') { 
  console.log('error');
}*/


//10
function getIdentitymatrix(n) {
    var tmp = [];
    var res = [];
    for (let i=0; i < n; i++)
    {
        for (let j=0; j < n; j++)
        {
            if (i === j)
            {
                tmp.push("1");
            }else 
            {
                tmp.push("0");
            }
        }
        res.push(tmp);
        tmp = [];
    }
    return res;
}
//console.log(getIdentitymatrix(5));


//11
function getSecond(arr){
    arr.sort(function(i,j){return i-j});
    var arr_unique = [arr[0]];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i-1]){
            arr_unique.push(arr[i])
        }
    }
    var res = [];
    res.push(arr_unique[1], arr_unique[arr_unique.length-2])
    return res.join(",")
}
//console.log(getSecond([1,1,2,3,3,4]));


//12
function isPerfect(num){
    var tmp = 0;
    for(let i = 0; i <= num/2; i++){
        if(num%i === 0){
            tmp += i;
        }
    }
    if(tmp === num && tmp !== 0){
        return true
    }
    return false
}
//console.log(isPerfect(28));


//13
function getFactors(num){
    var res = [];
    for(let i = 1; i <= Math.floor(Math.sqrt(num)); i++){
        if(num%i === 0){
            res.push(i);
            if(num/i !== i){
                res.push(num/i);
            }
        }
    }

    return res.sort(function(x,y){return x-y});
}
//console.log(getFactors(28));


//14
function amountTocoins(num,arr){
    if(num === 0){
        return [];
    }
    if(num >= arr[0]){
        left = num - arr[0];
        return [arr[0]].concat(amountTocoins(left,arr))
    }else{
        arr.shift();
        return amountTocoins(left,arr);
    }
}
//console.log(amountTocoins(46, [25, 10, 5, 2,1]));


//15
function calExp(b,n){
    var res = 1;
    for(let i = 1; i<=n; i++){
        res = res*b;
    }
    return res;
}
//console.log(calExp(2, 4));


//16
function getUniquestr(string){
    var res = string.charAt(0);
    for(let i = 1; i < string.length; i++){
        if(res.search(string.charAt(i)) === -1){
            res += string.charAt(i)
        }
    }
    return res;
}
//console.log(getUniquestr("thequickbrownfoxjumpsoverthelazydog"))


//17
function getOccurrences(string){
    var count = {};
    for(let i = 0; i<string.length; i++) {
        if(string[i] in count){
            count[string[i]] += 1;
        }else{
            count[string[i]] = 1;
        }
    }
    return count
}
//console.log(getOccurrences("abcbjwnlsdhcoacb"));


//18
function binarySearch(arr, num){
    arr.sort(function(x,y){return x-y});
    var low = 0;
    var high = arr.length - 1;

    while(low <= high){
        var mid = low + Math.floor((high-low)/2);
        if(arr[mid] === num){
            return true
        }else if(arr[mid] > num){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return false
}
//console.log(binarySearch([12,6,23,17,45,77,38,84,90], 12))


//19
function biggerElement(num){
    return function(element, index, arr){
        return (element >= num);
    };
}
//var res = [12,3,54,6,7,18].filter(biggerElement(10));
//console.log(res);


//20
function makeid(num){
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0; i < num; i++ ){  
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}
//console.log(makeid(8));


//21
function subSets(arr,len){
    var res=[];
    var tmp;

    for(let i = 0; i<Math.pow(2,arr.length);i++){
        tmp = [];
        for(let j = 0; j<arr.length; j++){
            if(i & Math.pow(2,j)){
                tmp.push(arr[j]);
            }
        }
        if(tmp.length === len){
            res.push(tmp);
        }
    }
    return res;
}
//console.log(subSets([1, 2, 3], 2));


//22
function countChar(string, char){
    var count = 0;
    for(let i = 0; i<string.length; i++){
        if(string.charAt(i) === char){
            count += 1;
        }
    }
    return count;
}
//console.log(countChar('microsoft.com', 'o'));



//23
function firstNotreprated(string){
    var arr=string.split("");
    var res = "";
    var count = 0;

    for(let i = 0; i < arr.length; i++){
        count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count += 1;
            }
        }

        if(count < 2){
            res = arr[i];
            break
        }
    }
    return res
}
//console.log(firstNotreprated('abacddbec'));



//24
function bubbleSort(arr){
    var tmp;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] < arr[j+1]){
                tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
//console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));



//25
function longestName(arr){
    return arr.reduce(function(name, nextName) 
  {
    return name.length > nextName ? name : nextName;
  }, "");
}
console.log(longestName(["Australia", "Germany", "United States of America"]));



//26
function longestSubstring(string){
    var hash = {};
    var res = 0;
    var res_str = string;
    var start = 0;
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) in hash){
            if((i - start)>res){
                res = i - start;
                res_str = string.substring(start, i);
            }
            start = Math.max(start,hash[string.charAt(i)] + 1);
        }
        hash[string.charAt(i)] = i;
    }
    return res_str;
}
console.log(longestSubstring("abcabcbb"));



//27
function is_Palindrome(arr) {
    var reverse_arr = arr.split("").reverse().join("");
    return arr == reverse_arr;
}

function longest_palindrome(arr){

    var max_length = 0,
    maxp = '';

    for(var i=0; i < arr.length; i++) {
    var subs = arr.substr(i, arr.length);

    for(var j=subs.length; j>=0; j--) {
        var sub_subs_str = subs.substr(0, j);
        if (sub_subs_str.length <= 1)
        continue;

        if (is_Palindrome(sub_subs_str)){
            if (sub_subs_str.length > max_length) {
                max_length = sub_subs_str.length;
                maxp = sub_subs_str;
            }
        }
    }   
    }
    return maxp;
}



// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function passFunc(val, func28)
{
    func28(val);  
}

function func28(val) {
    console.log(val + "Pass successful!");
}

// passFunc("Hi, ", func28);


// 29. Write a JavaScript function to get the function name. 
function getFuncName(func) {
    return func.name;
}

// function test1() { }
// console.log(getFuncName(test1));
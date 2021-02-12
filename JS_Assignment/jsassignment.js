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

function strAlp(string){
    return string.split('').sort().join('');
}
console.log(strAlp("webmaster"));

function convertUpper(string){
    var arr = string.split(" ");
    var res = [];
    
    for (let i = 0; i < arr.length; i++){
        res.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    return res.join(" ")
}

console.log(convertUpper("the quick brown fox"));

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
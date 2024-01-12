function makePalindrome(str) {
    return str.slice(0, -1) + [...str].reverse().join('');
}

let str1 = "дим";
let str2 = "манек";
let str3 = "рота";

let palindrome1 = makePalindrome(str1);
let palindrome2 = makePalindrome(str2);
let palindrome3 = makePalindrome(str3);

console.log(palindrome1);
console.log(palindrome2);
console.log(palindrome3);
let str = 'hello alexandr!';
let words = str.split(' ');
let result = words.map(word => word[0].repeat(word.length));
let finalStr = result.join(' ');
console.log(finalStr);

// let str = 'hello alexandr!';
// let replacedStr = str.replace('hello', 'hhhhh').replace('alexandr!', 'aaaaaaaaa');
// console.log(replacedStr);

// или)))

// let str = 'hello alexandr!';
// let joke = 'hhhhh aaaaaaaaa';
// str = joke;
// console.log(str);
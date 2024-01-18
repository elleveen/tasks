class MyString {
    constructor(string) {
        this.string = string;
    }
    reverse() {
        return this.string.split('').reverse().join('');
    }

    ucFirst() {
        return this.string.charAt(0).toUpperCase() +this.string.slice(1);
    }

    ucWords() {
        return this.string.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    }
}

const oneString = new MyString('чипи чипи чапа чапа');
const twoString = new MyString('чипи чипи чапа чапа');
const threeString = new MyString('chipi chipi chapa chapa');

console.log(oneString.reverse());
console.log(twoString.ucFirst());
console.log(threeString.ucWords());
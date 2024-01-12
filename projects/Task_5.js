const isPrime = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};
for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
function generateFibonacci(limit) {
    let fibonacci = [0, 1];
    let nextNumber = 1;

    while (nextNumber <= limit) {
        nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (nextNumber <= limit) {
            fibonacci.push(nextNumber);
        }
    }

    return fibonacci;
}

const limit = 200;
const fibonacciNumbers = generateFibonacci(limit);
console.log(fibonacciNumbers); 
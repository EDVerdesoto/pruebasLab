function suma(a, b) {
    return a + b;
}   

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }       
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    suma,
    factorial,
    fibonacci
};
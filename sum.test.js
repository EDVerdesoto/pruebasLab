const { describe, test, expect } = require('@jest/globals');
const { suma, factorial, fibonacci } = require('./sum');

test('Suma de 1 + 2 debe ser 4', () => {
    expect(suma(1, 2)).toBe(3);
});

describe('Factorial', () => {
    test('Factorial de 0 debe ser 1', () => {
        expect(factorial(0)).toBe(1);
    }); 
    test('Factorial de 1 debe ser 1', () => {
        expect(factorial(4)).toBe(1);
    });
    test('Factorial de 5 debe ser 120', () => {
        expect(factorial(5)).toBe(120);
    });    
});

describe('Fibonacci', () => {
    test('Fibonacci de 0 debe ser 0', () => {
        expect(fibonacci(0)).toBe(0);
    });
    test('Fibonacci de 1 debe ser 1', () => {
        expect(fibonacci(1)).toBe(1);
    });
    test('Fibonacci de 5 debe ser 5', () => {
        expect(fibonacci(5)).toBe(5);
    });
});

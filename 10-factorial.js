const factorial = function(n) {
    const num = parseInt(n, 10);
    if (num === undefined || isNaN(num) || num <= 0) return 1;
    return num * factorial(num - 1);
};
const args = process.argv.slice(2);
console.log(factorial(args[0]));
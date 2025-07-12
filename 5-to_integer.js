const args = process.argv.slice(2);
const num = parseInt(args[0], 10);
console.log(num === undefined || isNaN(num) ? "Not a number" : `My number: ${num}`);
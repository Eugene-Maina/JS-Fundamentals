const args = process.argv.slice(2);
const count = parseInt(args[0], 10);
console.log(count === undefined || isNaN(count) ? "Missing number of occurrences" : "");
for (let i = 0; i < count; i++) console.log("C is fun");

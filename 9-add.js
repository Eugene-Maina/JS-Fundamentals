/*const add= function(a,b){
    return a + b;};
const calcAddition=add();
console.log(calcAddition);*/
const add = function(a, b) {
    return a + b;
};
const args = process.argv.slice(2);
const first = parseInt(args[0], 10);
const second = parseInt(args[1], 10);
console.log(add(first, second));
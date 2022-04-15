let fanats = ' ';
let test = [
    {fanat: "Anna", age: 23},
    {fanat: "An", age: 3},
    {fanat: "TTAnna", age: 55},
    {fanat: "RRAnna", age: 88}
];

for (let i = 0; i <test.length; i++)
    fanats += test[i].fanat + ' ';
console.log(fanats);
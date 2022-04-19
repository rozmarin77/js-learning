let fanats = ' ';
let test = [//массив из объектов
    {fanat: "Anna", age: 23},//свойства имя и возраст
    {fanat: "Rita", age: 3},
    {fanat: "Tana", age: 55},
    {fanat: "Rut", age: 88}
];

for (let i = 0; i < test.length; i++)
    fanats += test[i].fanat + ' ' +  test[i].age + ' ';//вытаскиваем свойства объектов
console.log(fanats);
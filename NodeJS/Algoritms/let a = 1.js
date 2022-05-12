
//как ведут себя простые переменные и массивы и объекты + есть запись аудио на телефоне
let a = {valye: 1};//записываем в переменную объект
let b = a;
b.valye  = 2;
console.log(a, b)

let c = [1];
let d = c;
d[0]  = 2;
console.log(c, d)

let s = 1;
let w = s;
w = 2;
console.log(s, w)
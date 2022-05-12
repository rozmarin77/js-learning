let arr = [3,2]; // меняем местами 2 и 3
let temp = arr[0];//3
arr[0] = arr[1];//2 , 3
console.log(arr)
arr[1] = temp;//3
console.log('5', arr)//2, 3


//console.log(Math.trunc(3/2))метод округления после нуля

//разобраться что это и к ччему относится
/*var now = new Date(); //Текущя дата
console.log('1', now)
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
console.log('2', today)

var dob = new Date(1995, 9, 31); //Дата рождения
var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году

var age; //Возраст

//Возраст = текущий год - год рождения
age = today.getFullYear() - dob.getFullYear();
//Если ДР в этом году ещё предстоит, то вычитаем из age один год
if (today < dobnow) {
  age = age-1;
}

console.log(`Возраст: ${age}`);*/

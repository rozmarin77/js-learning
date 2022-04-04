/*let arr = [3,2]; // меняем местами 2 и 3
let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
console.log(arr)

//console.log(Math.trunc(3/2))метод округления после нуля

function IncreasNums(nums){// меняем цифры в массиве по возрастанию

    for (i = 0; i < nums.length; i++){
        for (j = i+1; j < nums.length; j++){
            if(nums[i] > nums[j] ){
                let temp = nums[i];
                nums[i] = nums[j];
                console.log(nums[i], nums[j])
                nums[j] = temp;
            }
        }
    }
    return nums;
}
console.log('res',IncreasNums([4,3,2,8]));*/


var now = new Date(); //Текущя дата
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

console.log(`Возраст: ${age}`);

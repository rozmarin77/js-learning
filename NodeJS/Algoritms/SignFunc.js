function sumArray (arr){ 
    let sum = 1;// если 0 то на 0 умножить нельзя будет 0
    for (let i=0; i < arr.length; i++){
        sum *= arr[i];
    }
    return sum;//после return функция не работает НИКОГДААА!!! отдала результат и вышла!!
};
let array1 = [2,4]
console.log('sum', sumArray(array1));


let arr = [2,8];// то же самое без функции
let result = 1;
    for (let i=0; i < arr.length; i++){
    result *= arr[i];
    }

console.log('result arr', result);

     function arraySign(nums) {//задание - если в массиве произведение чисел положительное то вернуть 1
        let result = 1;        // отрицательное -1, и если 0 то вернуть 0
        for (let i=0; i < nums.length; i++){
            result *= nums[i];
        }
        console.log('result',result);//это для себя проверка 
        if (result > 0){
           return 1  
        } else if(result < 0){
            return -1;
        } else {
            return 0;
        }
    
    };
    let array2 = [1,5,5]
    console.log('arraySign', array2, '=', arraySign(array2));

  
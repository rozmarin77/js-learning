let arr = [4,8,1,8]//вычисляет сумму чисел массива и выводит индексы каждого числа и суммы
let sum = 0
for(var i = 0; i < arr.length; i++){
    sum += arr[i]
    console.log(arr[i] + " -- " + i);
}
arr.push(sum)
console.log(arr[i] + " -- " + i);
console.log(arr);






/*let arr1 = [4,8,8,9,5,4,5,7,1,4]
for(var i = 0; i < arr1.length; i++){
    console.log(arr[i] + " -- " + i);
}*/


/*function getAllIndices(stringInput) {

    for (let i = 0; i < stringInput.length; i++) {
    //you simply need to output i.
        console.log(stringInput[i] + " - " + i);
        console.log('[i]', stringInput[i]);
        console.log('i', i);
}
  }
  
  getAllIndices([1,5,9]);
 // console.log('index',index)*/
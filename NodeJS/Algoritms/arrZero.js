//перенсти в массиве нули вправо цифры влево
/*let arr = [0,1,0,3,0,5];//первое решение самое простое - мое
for (i = 0; i < arr.length; i++){
    for (j = i+1; j < arr.length; j++){
        if (arr[i] == 0){
            let temp = arr[i];
            arr[i]= arr[j];
            arr[j] = 0;
        }
       
    }
}    
console.log(arr)*/

/*let arr = [0,0,1,0,3,5,0];//решали вместе с ильей он подсказал решение
for (i = 0; i < arr.length; i++){
    if (arr[i] == 0){
        continue;
    }
    for (j = i+1; j < arr.length; j++){
        if (arr[i] == 0 && arr[j] != 0){
            arr[i]= arr[j];
            arr[j] = 0;
            break;
        }
       
    }
}    
console.log(arr)*/
let arr = [0,1,0,3,5];//решение где количество нулей отнимается от индексов
let zerro = 0;
for (i = 0; i < arr.length; i++){
    if (arr[i] == 0){
        zerro++;//считаем нули
    }
     if (arr[i] !=0){
        swopindex = i-zerro;//на какое количество индексов нужно уменьщить
        arr[swopindex]= arr[i]//меняем местами нули и числа
       arr[i] = 0// непонятно разобратьсяn
    }
}
console.log('arr',arr)

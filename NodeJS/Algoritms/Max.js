function getMaxCount(arr){
    let max = arr[0];
    console.log('max', max)
    for (i = 0; i < arr.length; i++){
         console.log('current value: ' + arr[i])

    if (max < arr[i]){//при первой итерации 2<2 получается условие не выполняется мы перескакиваем на
         console.log('max1=', max)//строку 16, мы выходим из if, потом идем снова в цикл for, вторая итерация
         console.log('arrs i=', arr[i])//у нас под инлексом 1 цифра 6 и тут уже условия if выполняется и мы
            // попадаем на строку 11 и т,д пока массив не закончится
            
         max = arr[i];
         console.log('max2=', max)
         console.log('arr2=', arr[i])

        }
         console.log('arr i 0',arr[i])

    }
    return max;

}
console.log('getMaxCount=', getMaxCount([5,6,7]));
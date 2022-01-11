function getMaxCount(arr){
    let max = arr[0];
    console.log('max', max)
    for (i = 0; i < arr.length; i++){
         console.log('current value: ' + arr[i])

    if (max < arr[i]){
         console.log('max1=', max)
         console.log('arrs i=', arr[i])
            
         max = arr[i];
         console.log('max2=', max)
         console.log('arr2=', arr[i])

        }
         console.log('arr i 0',arr[i])

    }
    return max;

}
console.log('getMaxCount=', getMaxCount([5,6,7]));
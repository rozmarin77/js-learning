let arr = [2,4];
console.log(arr);
/*min = getMinCount(arr);
function getCount(array){
    let min = arr[0];
    for (i = 0; i < array.length; i++){
        if (min > array[i]) min = arr[i];
    }
    return min;
}
console.log(min);*/
/*let min = arr [0];
for (i = 0; i < arr.length; i++){
    if (min > arr[i]) min = arr[i];
}
console.log(min);*/
Math.max.apply(new,arr);
Math.min.apply(new,arr);



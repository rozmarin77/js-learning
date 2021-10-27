let arr = [2,4,1];
max = getMaxCount(arr);
function getMaxCount(array){
    let max = arr[0];
    for (i = 0; i < array.length; i++){
        if (max < array[i]) max = arr[i];

    }
   // return max;

}
console.log(max);
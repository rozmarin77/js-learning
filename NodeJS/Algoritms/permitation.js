
function sort(nums){//[8,5,2];//582 285 258
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] > nums[j]){
                console.log('1',nums[i], nums[j])
                let temp = nums[i];
                nums[i] = nums[j] 
                nums[j] = temp
                console.log('4',nums[i], nums[j])
            }
        }
    }
    return nums
}
console.log('5',sort([8,5,2]))
//564 465 456 i j два цикла i за левую часть
//за правую частьj 
//сортировка по возрастанию
//swop
/*var numbers = [8,5,2];//582 285 258
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]*/

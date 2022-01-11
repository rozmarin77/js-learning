
function permit(nums){
    let temp = nums[0];
    console.log('temp', temp)
    for(let i = 0; i < nums.length; i++){
        if (nums[i] < nums[i]+1){
           ( nums[i] = nums[i]+1)
            // nums[i]+1 = temp
        } else{
            nums[i] = temp
        }
        return temp
    }
};
console.log(permit([6,5,4]))
564 465 456 i j два цикла i за левую часть
за правую частьj 
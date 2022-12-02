function IncreasNums(nums){// меняем цифры в массиве по возрастанию
    for (i = 0; i < nums.length; i++){
        for (j = i+1; j < nums.length; j++){
            if (nums[i] > nums[j] ){
                let temp = nums[i];
                nums[i] = nums[j];
              //  console.log(nums[i], nums[j])
                nums[j] = temp;
            }
        }
    }
    return nums;
}
console.log('res', IncreasNums([4,3,2,8]));


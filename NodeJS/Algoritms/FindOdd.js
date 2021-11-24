    var arraySign = function(nums) {
        let resultOdd = 0;
        for (let i = 0; i < nums.length; i++){
            if (nums[i] < 0){
                resultOdd++;
            } else if (nums[i] == 0){
                return 0;
            }
            console.log('current num', i, nums[i])
        }
        console.log('resultOdd',resultOdd);
        if (resultOdd % 2 == 0){
           return 1 
        } else if (resultOdd % 2 == 1){
            return -1;
        }
    };
    let arr1 = [1,2];
    console.log('total', arraySign(arr1));
    //i < nums.length - это значит что Пока утверждение верно, цикл будет продолжаться.


    var arraySign2 = function(nums) {
        let res = 1;
        for (let i = 0; i < nums.length; i++){
            if (nums[i] < 0){
                res *= -1;
            } else if (nums[i] == 0){
                return 0;
            }
            console.log('current num', i, nums[i])
        }
        console.log('resultOdd', res);
       
        return res;
    };
    arr1 = [1,2, -1, -8, 0, -5];
    console.log('total second ver', arraySign2(arr1));
    
    
   // var twoSum = function(nums, target) {
    
   // };
   console.log('index');

    nums = [3,2,4], target = 6;
    for (let i=0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target)
             return (nums[i]), (nums[j])          
        }
        
    }; 

    console.log('index');
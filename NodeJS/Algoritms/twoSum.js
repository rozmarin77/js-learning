//следующая функция мой лидкод!!!!  верное решение д.б.здесь
//function checkSum(nums, target)//здесь сложность большая т к подсчеты больше места занимают  2 цикла
  
   function twoSum(nums, target){//мой лидкод
        for (let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] == target){
                    return [i,j]          
                }
            }
        }
    };

    console.log(twoSum([3,4,2],6))

    /*function twoSum2(nums, target){//второй короткий вариант 
        let d = {};
        for(let i = 0; i < nums.length; i++){
            if(d[target - nums[i]]){
                console.log('d=', d) 
                console.log('if =', (d[target - nums[i]])) 
                
                console.log('target=', target) 
                console.log('d1 nums[i]=', nums[i]) 

                
                return [(d[target - nums[i]]-1), i]
            } else {
               d[nums[i]] = i+1 ;//coxранить этот эндекс этот
                console.log('d2[nums[i]=', d[nums[i]])//([5,7,4,8], 9));
                console.log('nums[i]=', nums[i])
            }
        }    
         return false//как сохраняются числа в ассоциативный массив и как они оттуда достаются
     };
   console.log('twoSum',twoSum2([7,4,5], 9));*/
   
   
       

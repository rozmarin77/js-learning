//следующая функция мой лидкод!!!!  верное решение д.б.здесь
//function checkSum3(nums, target)//здесь сложность большая т к подсчеты больше места занимают  2 цикла
   /* var twoSum = function(nums, target){//мой лидкод
        for (let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] == target){
                    return [i,j]          
                }
            }
        }
    };

    console.log(twoSum([3,4,2],5))*/

    function twoSum2(nums, target){//второй короткий вариант полная хрень
        let d = {};
        for(let i = 0; i < nums.length; i++){
            if(d[target - nums[i]]){
                console.log('d=', d)  
                return [(d[target - nums[i]]-1), i] 
            } else {
               d[nums[i]] = i+1 ;//coxранить этот эндекс этот
                console.log('d[nums[i]]=', d[nums[i]])//([5,7,4,8], 9));
                console.log('nums[i]=', nums[i])
            }
        }    
         return false//как сохраняются числа в ассоциативный массив и как они оттуда достаются
     };
   console.log('twoSum',twoSum2([3,1,5,4,2], 9)); сортировка по возрастанию
   swop
   
   
       

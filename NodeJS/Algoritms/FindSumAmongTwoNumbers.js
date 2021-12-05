/*function checkSum(nums, target){//n^2 н в квадрате, сложность алгоритма здесь большая много места занимает подсчет
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            console.log(`${i} ${j}`);
            if(nums[i] + nums[j] == target)
                return true;

        }
    }
    return false;
}

console.log('1', checkSum([10,10,4,8,9], 20));*/ 



function checkSum2(nums, target){//сложность 0n количество пришедших туда элементов, 
    let d = {};
    for(let i = 0; i < nums.length; i++){//записать как работает алгоритм срооочно
        if(d[target - nums[i]]){
            console.log('d1', nums[i])
            console.log('target00', target)
            return true;
        } else {
            d[nums[i]] = true;
          // console.log('d', d[nums[i]])//true
            console.log('nums i', nums[i])
            console.log('d', d)

        }
    }    
    return false;
}
console.log('checkSum2', checkSum2([5,4,15], 20));
//d[nums[i]] = d[nums[i]] + 1

//'asdfghjjDTvvFy145HtrA' function check if a string contains 3 same symbols.

//следующая функция мой лидкод!!!!  верное решение д.б.здесь
/*function checkSum3(nums, target){//здесь сложность большая т к подсчеты больше места занимают  2 цикла*/
   /* var twoSum = function(nums, target){//мой лидкод
        for (let i=0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] == target){
                    return [i,j]          
                }
            }
        }
    };
    
    console.log(twoSum([3, 2, 4],5))*/

    /*function twoSum2(nums, target){//второй короткий вариант полная хрень
        let d = {};
        for(let i = 0; i < nums.length; i++){
            if(d[target - nums[i]]){
                console.log('target', d[target])
                return d[target];
                
           // } else {
             //   d[nums[i]] = true;
               // console.log('d', d[nums[i]])//true
               // console.log('d2', nums[i])
            }
        }    
        //return false
    };
    console.log(twoSum2([3, 2, 4],5))*/

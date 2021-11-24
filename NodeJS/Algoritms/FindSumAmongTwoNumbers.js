function checkSum(nums, target){//сложность алгоритма здесь большая много места занимает подсчет
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            console.log(`${i} ${j}`);
            if(nums[i] + nums[j] == target)
                return true;

        }
    }
    return false;
}

console.log('1', checkSum([10,10,4,8,9], 20));



function checkSum2(nums, target){
    let d = {};
    for(let i = 0; i < nums.length; i++){
        if(d[target - nums[i]]){
            return true;
        } else {
            d[nums[i]] = true;
        }
    }    
    return false;
}
//d[nums[i]] = d[nums[i]] + 1

//'asdfghjjDTvvFy145HtrA' function check if a string contains 3 same symbols.

//следующая функция не работает!!!! Исправить
function checkSum3(nums, target){//здесь сложность меньше т к подсчеты меньше места занимают цикл один
    let arr = [];
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] + nums[i+1] == target)
        return true;

        }
    
    return false;
}
console.log('checkSum3', checkSum3([12, 2], 20));
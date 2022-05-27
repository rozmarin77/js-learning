
function oneAdditional(nums) {// [9,9]наш массив
    let add = 1;//добавляем 1 к последнему числу массива
    for (let i = nums.length - 1; i >= 0; i--) {// заходим в цикл i = 9 начинаем с конца массива
        nums[i]++;// 9+1=10
        if(nums[i] == 10) {// в скобках у нас условие!!!! если намс i = 10
            nums[i] = 0;  //это инструкция          
        } else {
            return nums;  //это тоже инструкция, если предыдущие инструкции не выполняются то вып-ся эта          
        }
    }
    nums.unshift(1);//этот метод добавляет элементы в начало массива
    return nums;            
}
console.log('one', oneAdditional([9,9]));


//решить
/*let d = {
    name: 'Anna',
    5: 'fff',
    func: () => console.log('textAAAAAAA'),
    func2: function() { console.log('text4444444442') },

    //func3: varFunc,
    //func4: varFunc2
};
console.log(d.func)*/

function getAllIndices(arr) {//вывод индексов всех элементов

  for (let i = 0; i < arr.length; i++) {
  //you simply need to output i.
      console.log(i + ' ' + 'index' + '-' + arr[i]);
  }
}

 getAllIndices([1,5,9]);



function getAllIndiceswithSum(arr){ //поиск суммы массива и вывод индексов всех элементов
  let sum = 0;
  let i = 0;//Обьявление переменной c Let только один раз)далее без let, усли с ней то ощибка будет писать что уже такая переменная есть
  for (i = 0; i < arr.length; i++){
       sum +=arr[i];//полная форма sum = sum + arr[i]
       console.log(i + ' ' + 'index' + '-' + arr[i]) //индексы всех элементовЮ тк они на живут пока цикл не закончился
   
  }
  arr.push(sum);
  console.log(i + ' ' + 'index' + '-' + arr[i]) //к индексам вышеуказанных элементов + индекс суммы
  console.log(arr);
}
  
let array = [1,2,3];
console.log('array', getAllIndiceswithSum(array)); 


//моя задача с литкода.решать 25.11

/*function indexesOfSum(nums, target){//здесь сложность меньше т к подсчеты меньше места занимают цикл один
  let arr = [];
  let result = 0;
  for(let i = 0; i < nums.length; i++){
      if(nums[i] + nums[i+1] == target)
      return (i + ' ' + 'index' + '-' + arr[i])
         
  }
  arr.push(nums[i]+i);
}

console.log('indexesOfSum', indexesOfSum([10,2,7,11,15], 9));


// + ' ' + 'index' + '-' + ); */
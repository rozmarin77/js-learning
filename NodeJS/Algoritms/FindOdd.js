   /* var arraySign = function(nums) {//поиск количества отрицательных чисел, длинное решение
        let resultOdd = 0;
        for (let i = 0; i < nums.length; i++){
            if (nums[i] < 0){
                resultOdd++;
            } else if (nums[i] == 0){
                return 0;
            }
            console.log('current num', i, nums[i])//для проверки какие значения попадают в i при проходе
        }                                         //по циклу
        console.log('resultOdd',resultOdd);
        if (resultOdd % 2 == 0){
           return 1 
        } else if (resultOdd % 2 == 1){
            return -1;
        }
    };
    let arr1 = [3,-8,-4,-8,-1];
    console.log('total', arraySign(arr1));
    //i < nums.length - это значит что Пока утверждение верно, цикл будет продолжаться.


   
   
   
    var arraySign2 = function(nums) {//второй вариант решения, более короткий
        let res = 1;
        for (let i = 0; i < nums.length; i++){
            if (nums[i] < 0){
                res *= -1;// 1*(-1)=-1
            } else if (nums[i] == 0){
                return 0;
            }
            console.log('current num', i, nums[i])// это для того чтоб посмотреть как идет цикл
        }
        console.log('res', res);//чтоб увидеть счто попадает в res
       
        return res;
    };
    arr1 = [1,2, -1, -8, 0, -5];
    console.log('total second ver', arraySign2(arr1));*/
    
    
    
    
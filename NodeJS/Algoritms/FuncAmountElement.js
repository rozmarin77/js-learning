function amountOfElements (numbers){
    let counterEven = 0;
    let counterOdd = 0;                                 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            counterEven++;
        } 
        else {
            counterOdd++;
        }
    }

    console.log('counterEven = ', counterEven, 'counterOdd =', counterOdd)
}
    
    let array = [1,5,6,8,9]; 

    мир
    let array1 = [];
    let array2 = [         ];
   // let array3 = [a,b,c,d];
    let array4 = [-2,0,10,-7,6,0,0]
    let array5 = [ 5, 8, 6    ];


    amountOfElements(array);
    amountOfElements(array1);
    amountOfElements(array2);
    //amountOfElements(array3);
    amountOfElements(array4);
    amountOfElements(array5);
   // amountOfElements('array1',array7);
    
    
    
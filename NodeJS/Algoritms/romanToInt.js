function romanToInt(n, a, b, c){
    switch (n) {
        case 1:
            return a;
            
        case 2:
            return a + a;
            
        case 3:
            return a + a + a;
            
        case 4:
            return a + b;

        case 5:
            return b; 
        case 6:
            return b + a;
        case 7:
            return b + a + a;
        case 8:
            return b + a + a +a;
        case 9:
            return a + c;
        case 10:
            return c;     
    }
}
   
console.log(romanToInt(1, 'I', 'V', 'X'));
console.log(romanToInt(2, 'I', 'V', 'X'));
console.log(romanToInt(3, 'I', 'V', 'X'));
console.log(romanToInt(4, 'I', 'V', 'X'));
console.log(romanToInt(5, 'I', 'V', 'X'));
console.log(romanToInt(6, 'I', 'V', 'X'));
console.log(romanToInt(7, 'I', 'V', 'X'));
console.log(romanToInt(8, 'I', 'V', 'X'));
console.log(romanToInt(9, 'I', 'V', 'X'));
console.log(romanToInt(10, 'I', 'V', 'X'));


function romanToInt(n, a, b, c){
    let arr = [];
    for(i = 0; i < arr.length; i++){
        switch (n) {
            case 1:
                return a;
                
            case 2:
                return a + a;
                
            case 3:
                return a + a + a;
                
            case 4:
                return a + b;

            case 5:
                return b; 
            case 6:
                return b + a;
            case 7:
                return b + a + a;
            case 8:
                return b + a + a +a;
            case 9:
                return a + c;
            case 10:
                return c;     
            }
    }
}
console.log(romanToInt(12, 'I', 'V', 'X'));

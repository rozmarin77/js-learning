function convertIntToRoman(n, a, b, c){
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

function intToRoman(n){
    let romanSimbols = [// ассоциативный массив
        {a:'I', b: 'V', c: 'X'}, 
        {a: 'X', b: 'L', c: 'C'}, 
        {a: 'C', b: 'D', c: 'M'}
    ];
    let result = '';// пустая строка чтоб было не undefind - работать не будет
    let i = 0;
    while(n > 0){
        let digit = n % 10;//делим по модулю на 10
        n -= digit;// n = n - digit
        n /= 10;//полная форма n = n / 10
        let romanNumber = convertIntToRoman(digit, romanSimbols[i].a, romanSimbols[i].b, romanSimbols[i].c);
        i = i + 1;
        result = romanNumber + result; 
    }

    return result;
}
console.log(intToRoman(454));


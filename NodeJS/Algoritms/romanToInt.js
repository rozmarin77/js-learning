function romanToInt(ss){//IV
    let romanToArabMap = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};

    let result = 0;
    let previousDigit = 0;//предыдущее число
    for (i = ss.length - 1; i >= 0; i--){//еачинаем с конца
        
        let symbol = ss[i];
        let digit = romanToArabMap[symbol];
        if (previousDigit > digit){
            result = result - digit;
        } else {
            result += digit;
        }
        previousDigit = digit;
    }
    return result;
}

console.log(romanToInt('LVIII'));
function remainder (numbers){
    let remainder0 = 0;
    let remainder1 = 0;
    let remainder2 = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 == 0) {
            remainder0++;
        } 
        else if (numbers[i] % 3 == 1) {
            remainder1++;
        }    
        else {
            remainder2++;
        }
    }

    console.log('remainder 0 = ', remainder0,'remainder 1 = ', remainder1,'remainder 2 = ', remainder2, )
}

let array = [7,10,13,16, 9];
remainder(array);
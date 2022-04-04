var input = 1234; 
let result = 0;
while (input){
    result *= 10;
    result += (input % 10);

    input /= 10;
    input = Math.trunc(input);
}

console.log(result)



//6
//794156 / 10 = 79415.6 => 79415 / 10 = 7941.5 * 10 = 79415
//6 * 10 = 60 + 5 = 65



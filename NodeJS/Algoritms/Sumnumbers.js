function sum(x){
    let result = 1;
    for(let i = 0; i < x.length; i++){
        result *= x[i]
        console.log(x[i])

    }
return result
}

console.log('sum=', sum([3,5,2]));
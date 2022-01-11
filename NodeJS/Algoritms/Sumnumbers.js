function sum(x){
    let result = 0;
    for(let i = 0; i < x.length; i++){
        result += x[i]

    }
return result
}

console.log('sum=', sum([3,5,1,10]));
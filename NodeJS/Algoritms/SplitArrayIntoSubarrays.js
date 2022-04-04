var arr = [1,2,3,4,5,6,7,8,9,10];
var res = [];
var n = 3;
for(var i = 0; i < arr.length; i++) {
    var idx = Math.trunc(i/3);

    //console.log('idx=', idx, `res[${idx}]=`, res[idx]);
    if(!res[idx])
        res[idx] = [];
    
    res[idx].push(arr[i]);
}
console.log(res);
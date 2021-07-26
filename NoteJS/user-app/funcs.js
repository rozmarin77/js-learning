let b = 2;

function f(a) {
    return b + a();
}

var foo = function() { return 5; };


var r = f(foo);

console.log(r);
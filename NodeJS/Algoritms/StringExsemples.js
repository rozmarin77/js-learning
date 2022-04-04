function varFunc() {
    // console.log('text3') 
};
let varFunc2 = () => {
    //console.log('text4')
}
let x = {}

let d = {
    name: 'Anna',
    5: 'fff',
    func: () => console.log('textAAAAAAA'),
    func2: function() { console.log('text4444444442') },

    //func3: varFunc,
    //func4: varFunc2
};

/*d['id'] = 7;
d['id_3'] = 7;
d['id_4'] = 4;
//console.log('d5=', d[5])*/



console.log('arr d=', d); // gives true


for(var p in d){
    // if(p == 'name')
    //     console.log(p, '=>', d[p])
    // else
    //     console.log(p, '=', d[p])
   // console.log('p=', p, typeof(d[p]), '=', d[p]);
    

    if(typeof d[p] == 'function') {
        d[p]();
    }
}


let prop = 'id'
//console.log('prop=', prop, '=', d[prop])

let massageId = 'func';
 d[massageId]();
// d.func()









/*a = {
    1: "Ivan",
    2 : "Sagita"
}
console.log('a1', a[1]);
a[3] = 'Anna';
console.log('a', a[666-663]);
console.log('a2', a[8]);

    if([]){
        console.log('true');
    } else {
        console.log('if=','false');
        
    }*/



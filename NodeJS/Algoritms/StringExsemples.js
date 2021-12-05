function varFunc() {
     console.log('text3') 
};
let varFunc2 = () => {
    console.log('text4')
}
let x = {

}

let d = {
    name: 'Anna',
    5: 'fff',
    func: () => console.log('text'),
    func2: function() { console.log('text2') },

    func3: varFunc,
    func4: varFunc2
};

d['id'] = 7;
d['id_3'] = 7;
d['id_4'] = 4;
console.log('d5=', d[5])


console.log('d=', d); // gives true


for(var p in d){
    // if(p == 'name')
    //     console.log(p, '=>', d[p])
    // else
    //     console.log(p, '=', d[p])
    console.log('p=', p, typeof(d[p]), '=', d[p]);
    

    if(typeof d[p] == 'function') {
        d[p]();
    }
}


let prop = 'id'
console.log('prop=', prop, '=', d[prop])

let massageId = 'func';
 d[massageId]();
// d.func()







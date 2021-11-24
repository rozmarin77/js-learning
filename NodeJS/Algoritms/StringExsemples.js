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
console.log(d[name])

for(var p in d){
    // if(p == 'name')
    //     console.log(p, '=>', d[p])
    // else
    //     console.log(p, '=', d[p])
    console.log(p, typeof(d[p]), '=', d[p]);
    

    if(typeof d[p] == 'function') {
        d[p]();
    }
}


let prop = 'id'
console.log(prop, '=', d[prop])

let massageId = 'func';
 d[massageId]();
// d.func()






/*let schoolName = 'gggg'

console.log("SELECT id from school WHERE school = " + "'" +  schoolName + "'")

console.log('SELECT id from school\' WHERE school = ' + '\'' +  schoolName + '\'')

console.log(`asd=${schoolName}`)

//string interpolation
console.log(`SELECT id from school WHERE school = '${schoolName}'`)

console.log('\\\'')*/



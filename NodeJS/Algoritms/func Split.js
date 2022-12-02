
function split(text){
    let words = [];
    let start = 0;
    for(let i = 0; i < text.length; i++){
        console.log('i', i);
        while(text[i] == ' '){
            i++;
        }
        start = i;
        console.log('start', start)
        while(text[i] !== ' '){
            i++;
            if (text[i] == undefined) {
                break;
            }  
        }
        end = i;
        if (text[i] == undefined) {
            break
        }
        console.log('end', end)
        let result = text.substring(start, end);
        console.log('result', result)
        words.push(result)
        console.log('array', words);
    }
    return words;
}
let words = split('ags s')

console.log('split result', words);

/*let str = '123 456 789';
let sub = str.substring(0,5);
console.log(sub);*/
//let str = 'qqq, sss, aaa, xxx';
//let e = str.split();
//console.log(e);
//let w = str[4];
//console.log('jjj',str[4])
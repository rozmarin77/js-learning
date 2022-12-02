    function polindrom(text){//abba
    let j = text.length -1;
    for (let i = 0; i < text.length && i < j; i++){
        if (text[i] == text[j]){
            j--;
            continue;
            console.log(text[i], text[j])
        }
        return false;
    }
    return true;

    }



let str = 'abccba';
let result = polindrom(str);
console.log(result);
//abc abc d 
//abc abc d 
//abc abc d 
//ab //c abc d 




//abc abc a bc
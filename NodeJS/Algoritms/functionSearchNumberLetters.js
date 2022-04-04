function searchNumberLetters(text){    
    let textList = {};
    for (let i = 0; i < text.length; i++){ 
        let letter = text[i];
        if(textList[letter]){ 
            textList[letter] += 1; 
        }
        else {
            textList[letter] = 1;
            console.log('textList=',textList)

        }
    
    }
    return textList;
} 

let result = searchNumberLetters('aavra');

console.log(result);



 
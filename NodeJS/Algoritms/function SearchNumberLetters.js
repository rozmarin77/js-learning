function searchNumberLetters(text){    
    let textList = {};
    for (let i = 0; i < text.length; i++){ 
        let letter = text[i];
        if(textList[letter]){ 
         //   console.log('aa', textList[letter]) 
            textList[letter] += 1; 
        }
        else {
            textList[letter] = 1;
        }
    
    }
    return textList;
} 

let result = searchNumberLetters('rozmarin');

console.log(result);



 
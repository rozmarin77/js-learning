var str = "aaasbkfkbcfg";
var pattern = "bcfk";
let start = 0; 

for (let i = 0; i < str.length; i++){
    if (pattern[0] == str[i]) {
        start = i
         console.log('1',start)
    } else {
        start =-1;
      }
        for (let j = 1; j < pattern.length; j++){
            if (pattern[j] == str[i+1]){
                i++;
                console.log('pattern[j]', pattern[j] )
                console.log('str[i]', str[i])
                console.log('[i]', i)

            } if (pattern[j] !== str[i]){  
                break;
                i = start;
                console.log('2',start)
            }    
        }  
    }    
           console.log ('4',start);
            
        

    


        
      



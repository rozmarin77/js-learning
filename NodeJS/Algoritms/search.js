
var str = "abbccc";//непонятно что возвращает??
var pattern = "bccc";
while (pattern.length > 0) {
    for (let i = 0; i < str.length - 1; i++) {
        
        if (pattern[0] == str[i] && pattern[1] == str[i + 1]) {
        }
        console.log(i);
    }
}

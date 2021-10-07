let phrase = "   aaabbbaaaabbb"

function getAllIndices(stringInput) {

  for (let i = 0; i < stringInput.length; i++) {
  //you simply need to output i.
      console.log(stringInput[i] + " > " + i);
  }
}

let index = getAllIndices('h nn  ');
console.log('index',index)

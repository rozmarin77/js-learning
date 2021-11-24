let f = func;

function func() {
   console.log('func')
}

f();
//'use strict';
/*let browser = prompt(" What browser you would like to use?",'').toLowerCase();
if (browse == "edge") {
    alert ( "You've got the Edge!" );
 } else if(browser == 'chrome','yandex') {
    alert( 'Okay we support these browsers too' );
 } else {
 alert( 'We hope that this page looks ok!' );
 }*/
    
/*const number =+prompt("Enter count between o and 3", '');
if (number ==0){
   alert('You enter 0');
} if(number ==1){
   alert("You enter 1");
} if (number ==2 || number == 3){
   alert("Tou enter 2< meybe 3");
}*/
var someArray = [{id: 1}, {id: 2}, {id: 3}]
console.log(someArray)
  idToDelete = 1
someArray.forEach(function(item, i) {
  if (item.id == idToDelete) someArray.splice(i, 1)
})
console.log(someArray)
// [{id: 1}, {id: 3}]  


  
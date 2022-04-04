/*let person1 = {
    name: 'Victor',
    dateOfBirth: new Date(2000, 08, 02),
    getInfo: function getInfo(){
        let now = new Date();
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let dateOfBirthNow = new Date(today.getFullYear(),this.dateOfBirth.getMonth(),this.dateOfBirth.getDate());
        let age = today.getFullYear() - this.dateOfBirth.getFullYear();
            if (today < this.dateOfBirthNow) {
                age = age - 1;
            }
        
        return 'My name is' + ' ' + this.name + ' ' + 'I am' + ' ' +  age;
      },
};*/
 function Person(name, dateOfBirth, building) {
     this.name = name;
     this.dateOfBirth = dateOfBirth;
 }  

 Person.prototype.getInfo = function getInfo(){
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let dateOfBirthNow = new Date(today.getFullYear(),this.dateOfBirth.getMonth(),this.dateOfBirth.getDate());
    let age = today.getFullYear() - this.dateOfBirth.getFullYear();
        if (today < dateOfBirthNow) {
            age = age - 1;
        }
                        
    return 'My name is' + ' ' + this.name + ' ' + 'I am' + ' ' +  age;
};
 
 let listPersons = [
     new Person('Ron', new Date(2011, 08, 07)),
     new Person('Tim', new Date(2012, 09, 07)),
     new Person('Elena', new Date(2012, 11, 07)),
     new Person('Rene', new Date(2019, 03, 07)),
     new Person('Dima', new Date(2009, 08, 07)),
     new Person('Edi', new Date(2012, 08, 07)),
    ];
for (let i = 0; i < listPersons.length; i++) 
    console.log(listPersons[i].getInfo());


Object.prototype.print = function () {
    if(this.__proto__ == Array.prototype){
        console.log(this);
        return;
    }
    console.log(this.toString());
}



console.log('Object.prototype.__proto__', Object.prototype.__proto__);
console.log('Object.prototype', Object.prototype);
console.log('Person.prototype.__proto__', Person.prototype.__proto__);
console.log('Person.prototype', Person.prototype);

listPersons.print();
'sdfgsdfg'.print();
let listPersons = [];
let person1 = {
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
};

let person2 =  {
    name: 'Ronan',
    dateOfBirth: new Date(2008, 06, 02),
    getInfo: function getInfo(){
        let now = new Date();
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let dateOfBirthNow = new Date(today.getFullYear(), this.dateOfBirth.getMonth(),this.dateOfBirth.getDate());
        let age = today.getFullYear() - this.dateOfBirth.getFullYear();
            if (today < this.dateOfBirthNow) {
                age = age - 1;
            }
        return 'My name is' + ' ' + this.name + ' ' + 'I am' + ' ' +  age;
      },
};

let person3 =  {
    name: 'Elena',
    dateOfBirth: new Date(1989, 01, 07),
    getInfo: function getInfo(){
        let now = new Date();
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let dateOfBirthNow = new Date(today.getFullYear(), this.dateOfBirth.getMonth(),this.dateOfBirth.getDate());
        let age = today.getFullYear() - this.dateOfBirth.getFullYear();
            if (today < dateOfBirthNow) {
                age = age - 1;
            }
        return 'My name is' + ' ' + this.name + ' ' + 'I am' + ' ' +  age;
      }
};

listPersons.push(person1, person2, person3);

for (let i = 0; i < listPersons.length; i++) {
    console.log(listPersons[i].getInfo());
};
    
    
    
    
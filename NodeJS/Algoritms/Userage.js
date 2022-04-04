let person = {
    name: 'Anabel',
    dateOfBirht: new Date(2000, 08, 02),
    func: function getInfo(){
            let now = new Date();
            let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            let dateOfBirhtNow = new Date(today.getFullYear(), this.dateOfBirht.getMonth(),this.dateOfBirht.getDate());
            let age = today.getFullYear() - this.dateOfBirht.getFullYear();
                if (today < this.dateOfBirhtNow) {
                    age = age - 1;
                }
            return 'My name is' + ' ' + this.name + ' ' + 'I am' + ' ' +  age;
          }
};
console.log(person.func());
//console.log(person.name);
//console.log('full', new Date.getFullYear());// проверить функции не вызываются
//console.log('y', new Date.getYear());//тоже самое

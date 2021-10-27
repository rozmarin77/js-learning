const express     = require('express');// все библиОтеки распологаются наверху!!!
const cors        = require('cors');
const bodyParser  = require('body-parser');//в пост запросе свойство
const fs          = require('fs')// чтобы наши юзеры сохранялись на диске с например
const db          = require('./db.js');
const promisify   = require('util.promisify');

var data = fs.readFileSync("users-app.data", 'utf8');
let users = JSON.parse(data);// перевод записи юзера из одного формата в другой

var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded

const port = 8080

const connection = db.createConnection();
const query = promisify(connection.query).bind(connection)

app.get('/test-add-users', async (req, res) => {
  
  let schoolName = req.query.school;
  let schoolId;
  let querySelectSchool = "SELECT id from school WHERE school = " + "'" + schoolName + "'"
  console.log(querySelectSchool)
  console.log('request query', req.query.school)
  let existingSchools = await query(querySelectSchool)
  
  if (existingSchools.length == 0) {
      console.log('array is empty')

    let queryInsertSchool = "INSERT INTO school (school) VALUES " + "('" + schoolName + "')"
      console.log(queryInsertSchool)
    let schoolResult = await query(queryInsertSchool)
      console.log(schoolResult)
    schoolId = schoolResult.insertId
      console.log(`created school with id: ${schoolResult.insertId}`)
    
  } 
    else {
      schoolId = existingSchools[0].id;
        console.log(`select id`, schoolId)
    }

  let streetName = req.query.street;
  let streetId;
  let querySelectStreet = "SELECT id from address WHERE street = " + "'" + streetName + "'" 
    console.log(querySelectStreet) 
    console.log('request query', req.query.street)
  let existingAddress = await query(querySelectStreet)
                  
  if (existingAddress.length == 0) {
    console.log('array is empty')

  let queryInsertStreet = "INSERT INTO address (street) VALUES " + "('" + streetName + "')"
    console.log(queryInsertStreet)
  let streetResult = await query(queryInsertStreet)
    console.log(streetResult)
  streetlId = streetResult.insertId
    console.log(`created street with id: ${streetResult.insertId}`)
  
} 
  else {
    streetId = existingAddress[0].id
      console.log(`select id`, streetId)
  } 
  
  res.send(([schoolId, streetId]).toString());// ошибка и + как делать объекты
  // перенести все качается улица после if ? else?



let userName = req.query.name;
console.log(req.query)
console.log('request query', req.query.name)
let userAge = req.query.age;
let queryInsertUser = "INSERT INTO user (name, age, address_id, school_id)" +
              "VALUES" + "(('" + userName +"'" +  userAge + "," + streetId + "," + schoolId +"'))"
console.log(' query', queryInsertUser)
let userRezult = await query(queryInsertUser);
console.log(userRezult);

//res.send((userRezult).toString())



  
  
  
app.get('/get-all-users', (req, res) => {//гет запрос к базе данных моей 

  connection.query("SELECT user.name, user.age, user.id, address.street, school.school " +
                   "FROM user JOIN address ON user.address_id = address.id JOIN school " +
                   "ON user.school_id = school.id",
    
  function (err, results) {
      console.log(err);
      console.log(results); // собственно данные

      res.send(results)//запроса отправление массив юзерс
      console.log("show all users")
      
    });
  });

//console.log("checking if file exists");
//if (fs.existsSync("users-app.data") == false) {//если  этот файл сам не создает файл на диске, то
  //console.log("creating file...");           //то мы создаем его вручную
  //fs.writeFileSync("users-app.data", "");
//} else {
  //console.log("file already exists");
//}
//console.log('users-app-data open');




app.post('/add-user', (req, res) => {
  users.push({ name: req.body.name, age: req.body.age, id: users.length })//body это свойство post, kоторое принимает
  //и записывает в себя значения name и age
  fs.writeFileSync("users-app.data", JSON.stringify(users));

  let a = "Add new user" + " " + "name:" + req.body.name + " " + "age:" + req.body.age

  res.send(a);// запроса отправление

  //console.log(a);
})


app.post('/delete-user', (req, res) => {

  id = req.body.id
  for (i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      users.splice(i, 1)
      break
    }
  }

  fs.writeFileSync("users-app.data", JSON.stringify(users));

  let a = "delete " + "id:" + req.body.id

  res.send(users)// запроса отправление
  // console.log(a);
})

app.get('/get-oldest-users', (req, res) => {
  let oldest = 0;
  for (let i = 0; i < users.length; i++) {
    if (oldest < users[i].age) {
      oldest = users[i].age
    }
  }

  let oldestUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (oldest == users[i].age) {
      oldestUsers.push(users[i])
    }


  }

  res.send(oldestUsers)//запроса отправление массив юзерс
  console.log("show oldest users")
})

app.get('/get-youngest-users', (req, res) => {
  console.log("1")
  let youngest = 0;
  for (let i = 0; i < users.length; i++) {
    if (youngest > users[i].age) {
      youngest = users[i].age
    }
  }
  console.log('2');
  let youngestUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (youngest == users[i].age) {
      youngestUsers.push(users[i])
      console.log('3');
    }
    console.log('3.5');
  }
  console.log('4');
  console.log(youngest);
  console.log(youngestUsers);
  //console.log("oldest usert start");
  res.send(youngestUsers)//запроса отправление массив юзерс
  console.log("show youngest users")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


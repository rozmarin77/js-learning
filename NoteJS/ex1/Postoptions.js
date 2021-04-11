
let users =[
    { name: "SSS",
      age: 33},
    { name: "QQQ",
      age: 45},
    ]
 
const express = require('express')
var bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded

const port = 8080

app.post('/',(req, res) => {
  users.push({name:req.body.name, age: req.body.age})
  res.send("Add new user"+" " + "name:" + req.body.name +" " + "age:" + req.body.age)
  console.log(req.body)

})

app.get('/', (req, res) => {
    var myUsers = JSON.stringify(users)
    res.send(myUsers)
    console.log("show all users")
})

app.listen(port,() => {
  console.log(`Example app listening at http://localhost:${port}`)
    })

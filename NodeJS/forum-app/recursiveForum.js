const express     = require('express');// все библиОтеки распологаются наверху!!!
const cors        = require('cors');
const bodyParser  = require('body-parser');//в пост запросе свойство
const promisify   = require('util.promisify');
const db          = require('./db.js');

var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded

const port = 8080

var connection = db.createConnection();
const query = promisify(connection.query).bind(connection)

app.get('/get-all-forum', (req, res) => {//гет запрос к базе данных моей 

let massage = req.query.massage;
let querySelectMassage = "SELECT"  + "('" + massage + "')" + "FROM comments"


console.log('request query', querySelectMassage)
let resultMassage = await query(querySelectMassage);
});

res.send((resultMassage).toString())

  

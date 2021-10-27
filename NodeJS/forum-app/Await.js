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

app.get('/get-all-forum', async(req, res) => {//гет запрос к базе данных моей 
    
    let querySelectMassage = "Select massage from comments"
    let selectResult = await query(querySelectMassage)
        console.log(selectResult);
    
        res.send(selectResult);
});
    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

  

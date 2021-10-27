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
//let registerList = ;

let registerList = [];

function register(id, callback){
    registerList[id] = callback;
};

function run(massageId){
   let callback = registerList[massageId];

    if(callback){  
         callback();
    }
    else {
          console.log(massageId, 'Key not found')
    }
};
   
register(5, () => console.log('FFF5'))
register(3, () => console.log('FFF3'))

app.get('/get-all-forum', async(req, res) => {
    
    let massageId = req.query.id
    run(massageId)
    
    res.send(massageId);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

  

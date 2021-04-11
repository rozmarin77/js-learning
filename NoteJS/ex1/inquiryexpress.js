
console.log('start')

let cats = [
    {
      name : 'qqq',
      age : 2
    },
    {
        name : 'www',
        age : 3
    }
]



var express = require ('express');
var app = express()
var port = 8080

app.get('/addcat', addCatPage)
app.get('/', showAllCatsPage)

function showAllCatsPage(req, res) {
    var myCats = JSON.stringify(cats);
    res.send(myCats)
    console.log("show all cats page requested")
}

function addCatPage(req, res){
    cats.push({name:"Jim"});
    res.send('cat add name : Jim')
    
    console.log("add cat page requested");
}

app.listen(port,() =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
console.log('finish');
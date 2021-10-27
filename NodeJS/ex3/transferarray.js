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
console.log('cats');
//var myCats = cats.toString();
//var cats = ['anna', 'qwe','rty'];
//var myCats = cats.join();
var myCats = JSON.stringify(cats);


var http = require ('http');//создаем обект сервера
http.createServer(function (req, res) {
    res.write(myCats) 
        //пишем ответ клиенту
    res.end();//завершаем ответ

   console.log("request received")
}).listen(8080);//объект сервера слушает порт 8080
console.log('finish');
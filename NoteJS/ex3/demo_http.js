console.log("start...")

var http = require ('http');//создаем обект сервера
http.createServer(function (req, res) {
    res.write('Hello World');//пишем ответ клиенту
    res.end();//завершаем ответ

    console.log("request received")
}).listen(8080);//объект сервера слушает порт 8080
console.log('rrrrrr');


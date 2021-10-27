module.exports = {
    createConnection: createConnection
};

const mysql = require('mysql');//установка библиотеки sql

function createConnection() {
    const connection = mysql.createConnection({//подключение базы данных эскюэль
      host: 'localhost',
      user: 'root',
      database: 'users',
      password: 'qwerty',//моя база данных workbeanch  и ее пароль
      insecureAuth: true
    });
  
    connection.connect(function (err) {
      if (err) {
        return console.error("Ошибка: " + err.message);
      }
      else {
        console.log("Подключение к серверу MySQL успешно установлено");
      }
    });
  
      return connection;
  }
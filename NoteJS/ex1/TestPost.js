console.log("start")

const express = require('express')
const app = express()
const port = 8080

app.post('/',(req, res) => {
    res.send('Hello my dear Post')
    console.log("page requested post");

})
    
app.get('/',(req, res) => {
    res.send('Hello my dear Get')
    console.log("page requested get");

})
    app.listen(port,() => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
const express = require('express')
app = express();
app.get('/', (req, res) => {
    res.send("Hello World!!!")
})
app.get('/users', (req, res) => {
    res.send("This is route users")
})
app.listen(8080)
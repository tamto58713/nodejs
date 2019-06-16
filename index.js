const express = require('express')
app = express();
app.set('view engine', 'pug')
app.get('/', (req, res) => {
    res.render('header')
})
app.get('/users', (req, res) => {
    res.render('users')
})

app.listen(8080)
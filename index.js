const express = require('express')
app = express();
app.set('view engine', 'pug')
app.set('views', './views')
app.get('/', (req, res) => {
    res.render('header', {name: "Tam To Tran"})
})
app.get('/users', (req, res) => {
    res.render('users', {users: [{name: "Tam To", age: 19}, {name: "Abel", age: 20}]})
})

app.listen(8080)
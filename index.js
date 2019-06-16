const express = require('express')
app = express();
app.set('view engine', 'pug')
app.set('views', './views')
app.get('/', (req, res) => {
    res.render('header', {name: "Tam To Tran"})
})
var users= [{name: "Tam To", age: 19}, {name: "Abel", age: 20}]

app.get('/users', (req, res) => {
    res.render('users', {users});
})
app.get('/users/search', (req, res) => {
    let q = req.query.q;
    console.log(q)
    let usersMatches = users.filter((user) => {
        console.log(q + ' ' + user.name)
        console.log(user.name.indexOf(q))
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    })
    res.render("users", {users: usersMatches})

});
app.listen(8080)

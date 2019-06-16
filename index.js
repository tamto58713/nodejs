const express = require('express')
const bodyParser = require("body-parser")
const port = process.env.PORT || 8080
const low = require('lowdb')
const shortid = require('shortid')
app = express();
app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({users: []}).write();
app.get('/', (req, res) => {
    res.render('')
})


app.get('/users', (req, res) => {
    res.render('users/index', {users: db.get('users').value()});
})
app.get('/users/search', (req, res) => {
    let q = req.query.q;
    const users = db.get('users').value();
    let usersMatches = users.filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    })
    res.render("users/index", {users: usersMatches})

});
app.get('/users/create', (req, res) => {
    res.render('users/create')
})
app.post('/users/create', (req, res) => {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users')
})
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    let user = db.get('users').find({id: id}).value()
    res.render('users/view', {user: user})
})
app.listen(8080, () => {
    console.log('Server listening on port', port)
})


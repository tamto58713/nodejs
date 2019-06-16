const express = require('express')
const router = express.Router();
const shortid = require('shortid');

const db = require('../db.js')

 
router.get('/', (req, res) => {
    res.render('users/index', {users: db.get('users').value()});
})
router.get('/search', (req, res) => {
    let q = req.query.q;
    const users = db.get('users').value();
    let usersMatches = users.filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    })
    res.render("users/index", {users: usersMatches})

});
router.get('/create', (req, res) => {
    res.render('users/create')
})
router.post('/create', (req, res) => {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users')
})
router.get('/:id', (req, res) => {
    let id = req.params.id;
    let user = db.get('users').find({id: id}).value()
    res.render('users/view', {user: user})
})

module.exports = router
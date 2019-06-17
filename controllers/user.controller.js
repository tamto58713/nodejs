const shortid = require('shortid');
const db = require('../db.js')

module.exports = {
    index: (req, res) => {
            res.render('users/index', {users: db.get('users').value()});
        },
    search: (req, res) => {
        let q = req.query.q;
        const users = db.get('users').value();
        let usersMatches = users.filter((user) => {
            return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
        })
        res.render("users/index", {users: usersMatches})
    
        },
    getCreate: (req, res) => {
        res.render('users/create')
        },
    postCreate: (req, res) => {
        req.body.id = shortid.generate();
        db.get('users').push(req.body).write();
        res.redirect('/users')
        },
    getId: (req, res) => {
        let id = req.params.id;
        let user = db.get('users').find({id: id}).value()
        res.render('users/view', {user: user})
        },

}
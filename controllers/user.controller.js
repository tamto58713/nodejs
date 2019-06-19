const shortid = require('shortid');
const db = require('../db.js')
const mongo = require("../models/user.models")
// module.exports.index = (req, res) => {
//     res.render('user/index', {users: db.get('users').value()})
// }
module.exports = {
    index: (req, res) => {
            //res.render('users/index', {users: db.get('users').value()});
            mongo.user.find().then((user) => {
                res.render('users/index', {users: user})
            })
        },

    search: (req, res) => {
        let q = req.query.q;
        let usersMatches
        mongo.user.find({}, (err, users) => {
            usersMatches = users.filter((user) => {
                return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
        })
        res.render("users/index", {users: usersMatches})

        })

    
        },
    getCreate: (req, res) => {
        res.render('users/create')
        },
    postCreate: (req, res) => {
        mongo.database.collection('users').insert(req.body)
        db.get('users').push(req.body).write();
        res.redirect('/users')
        },
    getId: (req, res) => {
        let id = req.params.id;
        mongo.user.find({_id: id}, (err, user) => {
            res.render('users/view', {user: user[0]})
        })

            


        },

}
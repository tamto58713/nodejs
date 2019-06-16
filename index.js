const express = require('express')
const bodyParser = require("body-parser")
const port = process.env.PORT || 8080

const  userRoute = require('./router/user.route')
var db = require('./db')

app = express();    
app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('')
})

app.use('/users', userRoute)

app.listen(8080, () => {
    console.log('Server listening on port', port)
})


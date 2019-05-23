const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const users = require('./routes/api/users')

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI;

mongoose.connect(db).then(() => console.log('mongodb connected')).catch(err => console.log('error'))


//passport middleware
app.use(passport.initialize());
//passport config
require('./config/passport')(passport)

app.use('/api/users', users)

const port = 5001 || process.env.PORT

app.listen(port, () => {
    console.log('port started on 5000')
})
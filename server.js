const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/api/users')

const app = express()

const db = require('./config/keys').mongoURI;

mongoose.connect(db).then(() => console.log('mongodb connected')).catch(err => console.log('error'))


app.get('/', (req, res) => {
    res.send('Aaku')
})

app.use('/api/users', users)

const port = 5001 || process.env.PORT

app.listen(port, () => {
    console.log('port started on 5000')
})
var cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')

const users = require('./routes/api/users')

const app = express()

app.use(cors())


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI;

mongoose.connect(db,{useNerUrlParser:true}).then(() => console.log('mongodb connected')).catch(err => console.log('error'))


//passport middleware
app.use(passport.initialize());
//passport config
require('./config/passport')(passport)

app.use('/api/users', users)

//server static assets if in production
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'))

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

//port
const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`port started on ${port}`)
})
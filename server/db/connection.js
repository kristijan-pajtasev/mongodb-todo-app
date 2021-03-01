const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const localURL = 'mongodb://localhost:27017/todos'
const connect = (url) => mongoose.connect(url || localURL, {
    useNewUrlParser: true
})

module.exports = connect
// connect('mongodb://localhost:27017/intro-to-mongodb')
import mongoose from 'mongoose'

async function dbConnect() {
    // check if we have a connection to the database or if it's currently
    // connecting or disconnecting (readyState 1, 2 and 3)
    if (mongoose.connection.readyState >= 1) {
        return
    }

    const localURL = 'mongodb://localhost:27017/todos'
    return mongoose.connect(process.env.MONGODB_URI || localURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
}

export default dbConnect
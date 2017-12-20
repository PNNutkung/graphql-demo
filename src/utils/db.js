import mongoose from 'mongoose'
import Bluebird from 'bluebird'

const connect = () => {
    const options = {
        poolSize: 10,
        useMongoClient: true
    }
    mongoose.Promise = Bluebird
    mongoose
        .connect('mongodb://localhost:27017/graphql-demo', options)
        .then(() => {
            console.log('DB connected!')
        })
        .catch(console.error)
}

const close = () => {
    mongoose.connection.close()
}

export default {
    connect,
    close
}

import mongoose from 'mongoose'
import { mongoConfig } from '../config'

export const createDBConnection = () => {
    return mongoose.connect(`${mongoConfig.mongoUrl}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
}

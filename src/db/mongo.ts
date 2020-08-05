import mongoose from 'mongoose'
import { mongoConfig } from '../config'

export const createMongoConnection = () => mongoose.connect(`${mongoConfig.mongoUrl}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


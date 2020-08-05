import mongoose from 'mongoose'
import { mongoConfig } from '../config'

export const createDBConnection = async () => {
    try {
        await mongoose.connect(`${mongoConfig.mongoUrl}`, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        global.ctx.log.info('Database has been connected.')
    } catch (err) {
        global.ctx.log.info('Could not connect to the database.')
    }
}

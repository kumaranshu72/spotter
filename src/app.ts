import '@babel/polyfill'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import express, { Application } from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'

import { logger, LoggerStream, mongoConfig } from './config'
import router from './routes'

class App {
  public app: Application

  constructor() {
    this.app = express()
    this.config()
    this.mountRoutes()
  }

  private config(): void {
    // DB connection
    // connect(mongoConfig.mongoUrl, {useNewUrlParser: true, useCreateIndex: true})
    this.createDBConnection()
    // enabling cors
    this.app.use(cors())
    // support application/json type post data
    this.app.use(bodyParser.json())
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }))
    // support helmet
    this.app.use(helmet())
    // logger config
    this.app.context = {}
    this.app.context.log = logger
    global.ctx = this.app.context
    this.app.use(morgan('dev'))
    this.app.use(morgan('combined', { stream: new LoggerStream() }))
  }

  private mountRoutes(): void {
    this.app.use(router)
  }

  private async createDBConnection() {
    try {
      await mongoose.connect(`${mongoConfig.mongoUrl}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      })
      console.log('Database has been connected.')
    } catch (err) {
      console.log('Could not connect to the database.')
      throw err
    }
  }
}

export default new App().app

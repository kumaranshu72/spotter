import * as bodyParser from 'body-parser'
import express, { Application } from 'express'

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
    // enabling cors
    // this.app.use(cors())
    // support application/json type post data
    // this.app.use(bodyParser.json())
    // support application/x-www-form-urlencoded post data
    // this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  private mountRoutes(): void {
    this.app.use(router)
  }
}

export default new App().app

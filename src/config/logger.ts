import moment from 'moment'
import winston from 'winston'
import { Rotate } from 'winston-logrotate'

const date: string = moment(moment()).format('YYYY-MM-DD')

// define the custom settings for each transport (file, console)
const options = {
  file: {
    file: `./log/${date}.log`, // this path needs to be absolute
    colorize: true,
    timestamp: true,
    json: true,
    size: '10m',
    keep: 100,
    compress: false,
    level: 'silly',
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
}

// instantiate a new Winston Logger with the settings defined above
export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(options.console),
    new Rotate(options.file),
  ],
  exitOnError: false, // do not exit on handled exceptions
})

// create a stream object with a 'write' function that will be used by `morgan`
export class LoggerStream {
  write(message: string) {
      logger.info(message.substring(0, message.lastIndexOf('\n')))
  }
}
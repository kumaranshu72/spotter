import { Request } from 'express'
import moment from 'moment'

export const getUUID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}

// tslint:disable-next-line
export const getLogObj = (req: Request, platformSource: string, accessToken: string, os: any) => ({
  timeStamp: moment().format('MMMM DD YYYY HH:mm:ss'),
  correlationId: req.headers['x-correlation-id'] || getUUID(),
  requestBody: req.body,
  responseBody: '',
  customer_key: '',
  action: '',
  route: req.url,
  class: '',
  method: '',
  appError: '',
  httpError: '',
  dbError: '',
  host: os.hostname(),
  level: 'INFO',
  messag: '',
  platform: (platformSource) ? platformSource.toLowerCase() : '',
  error_data: '',
  data: '',
  headers: req.headers,
  access_token: accessToken,
})
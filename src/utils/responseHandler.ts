import { Response } from 'express'

/* tslint:disable: no-any*/
const self = {
  delegate: (res: Response) => (err: any, data: any, statusCode: number,
    statusMessage: string, logData: any) => self.sendResponse(err, data, res, statusCode, statusMessage, logData),
  sendResponse: (err: Error, respData: any, res: Response, statusCode: number, statusMessage: string, logData: any) => {
    if (err)	{
      self.sendError(err, respData, res, statusCode, statusMessage, logData)
    }
    else {
      self.sendSuccess(respData, res, statusCode, statusMessage, logData)
    }
  },
  sendError: (err: any, errorTrace: any, res: Response, statusCode: number, statusMessage: string, logData: any) => {
    console.log(logData)
    console.log(errorTrace)
    global.ctx.log.error(logData)

    // delete err.statusCode
    res.status(statusCode).json({
      statusCode,
      statusMessage,
      data: err,
    })
  },
  sendSuccess: (data: any, res: Response, statusCode: number, statusMessage: string, logData: any) => {
    console.log(logData)
    global.ctx.log.info(logData)

    res.status(statusCode).json({
      statusCode,
      statusMessage,
      data,
    })
  },
}

export const responseHandler = self

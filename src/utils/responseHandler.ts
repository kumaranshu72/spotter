const self = {
  delegate: res => (err, data, statusCode,
    statusMessage, logData) => self.sendResponse(err, data, res, statusCode, statusMessage, logData),
  sendResponse: (err, respData, res, statusCode, statusMessage, logData) => {
    if (err)	{
      self.sendError(err, respData, res, statusCode, statusMessage, logData)
    }
    else {
      self.sendSuccess(respData, res, statusCode, statusMessage, logData)
    }
  },
  sendError: (err, errorTrace, res, statusCode, statusMessage, logData) => {
    console.log(logData)
    global.ctx.log.error(logData)

    delete err.statusCode
    res.status(statusCode).json({
      statusCode,
      statusMessage,
      data: err,
    })
  },
  sendSuccess: (data, res, statusCode, statusMessage, logData) => {
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

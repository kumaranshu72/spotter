import { NextFunction, Request, Response } from 'express'
import BaseJoi from 'joi'
import { clone, extend } from 'lodash'
import os from 'os'

import { getLogObj, responseHandler } from '../utils'

/* tslint:disable*/
const Extension: any = require('joi-date-extensions')
const Joi: any = BaseJoi.extend(Extension)


export const validateParams = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
  const sourceParam = req.headers.source

  if (!req.LogResponse) {
    req.LogResponse = getLogObj(req, '', '', os)
    req.LogResponse.headers = req.headers
  }

  const logResponse = req.LogResponse
  res.header('x-coorelation-id', logResponse.correlationId)

  const body = (req.query) && Object.keys(req.query).length > 0
    ? extend({}, req.query) : extend({}, req.body)

  const bodyClone = clone(body)
  bodyClone.source = sourceParam


  console.log('bodyClone ', bodyClone)

  logResponse.requestBody = JSON.stringify(body)
  logResponse.class = 'validate_params_middleware'
  logResponse.method = 'validate_params'

  console.log(logResponse)

  delete bodyClone.token_customer_key

  Joi.validate(bodyClone, schema, { abortEarly: false }, (err: any, schemaResult: any) => {
    if (err) {
      const details: any = []
      err.details.forEach((d: any) => {
        details.push({
          // eslint-disable-next-line no-useless-escape
          message: (d.message).replace(/\"/g, ''), keys: d.path,
        })
      })

      logResponse.message = 'Invalid parameters'
      logResponse.error_data = JSON.stringify(details)

      const env = process.env.NODE_ENV || 'development'
      const detailsResp: any = (env !== 'production')
        ? {
          errorMessage: 'Invalid parameters',
          details,
        } : { errorMessage: 'Invalid parameters',
          details: [],
        }
      return responseHandler.sendError(detailsResp, {
        validation_errors: details,
      }, res, 400, 'Invalid parameters', logResponse)
    }
    req.schema = schemaResult
    req.logResponse = logResponse
    return next()
  })
}

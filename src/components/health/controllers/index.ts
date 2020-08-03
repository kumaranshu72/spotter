import { Request, Response } from 'express'

import { responseHandler } from '../../../utils'
import { healthModelV1 } from '../models'

export const healthControllerV1 = (req: Request, res: Response) => healthModelV1(req, responseHandler.delegate(res))

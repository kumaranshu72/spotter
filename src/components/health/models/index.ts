import { Request } from 'express'

import { IresponseCallbck } from '../../../utils'

export const healthModelV1 = (req: Request, res: IresponseCallbck) => {
  console.log(req.hostname)
  res(null, { status: 'Live' }, 200, 'success', { status: 'Live' })
}

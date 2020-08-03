import { Router, Request, Response } from 'express'
import { responseHandler } from '../utils'

const router: Router = Router()

router.use('/health', (req: Request, res: Response) => {
  global.ctx.log.info('hello world', req.hostname)
  res.send('hi')
})

/*  404 handler Always @end */
router.use((req: Request, res: Response) => {
  const logObj = {
    reqHeaders: req.headers,
    reqBody: req.body,
  }
  responseHandler.sendError({ message: 'url not found' }, 'url_not_found', res, 404, 'error', logObj)
})

export default router
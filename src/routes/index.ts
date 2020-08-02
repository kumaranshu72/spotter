import { Router } from 'express'
import { responseHandler } from '../utils'

const router: Router = Router()

router.use('/health', (req, res) => {
  global.ctx.log.info('hello world')
  res.send('hi')
})

/*  404 handler Always @end */
router.use((req, res) => {
  const logObj = {
    reqHeaders: req.headers,
    reqBody: req.body,
  }
  responseHandler.sendError({ message: 'url not found' }, 'url_not_found', res, 404, 'error', logObj)
})

export default router
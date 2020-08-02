import { Router } from 'express'

const router: Router = Router()

router.use('/health', (req, res) => {
  global.ctx.log.info('hello world')
  res.send('hi')
})


export default router
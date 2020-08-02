import { Router } from 'express'

const router: Router = Router()

router.use('/health', (req, res) => {
  res.send('hi')
})


export default router
import { Request, Response, Router } from 'express'

import { routeConst } from './constant'

const router: Router = Router()
const {
  health,
} = routeConst

router.route(health)
  .get((req: Request, res: Response) => {
    console.log(req.hostname)
    res.send('Hello world')
  })

export default router
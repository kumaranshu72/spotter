import { Router } from 'express'

import { routeConst } from './constant'
import healthRouteV1 from './v1'

const router = Router()

router.use(routeConst.v1, healthRouteV1)

export default router
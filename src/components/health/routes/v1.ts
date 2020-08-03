import { Router } from 'express'

import { validateParams } from '../../../middlewares'
import { healthControllerV1 } from '../controllers'
import { routeConst } from './constant'
import paramSchema from './validationSchema'

const router: Router = Router()
const {
  health,
} = routeConst

router.route(health)
  .get([validateParams(paramSchema.healthValidator)], healthControllerV1)

export default router
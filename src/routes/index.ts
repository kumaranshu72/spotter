import { Request, Response, Router } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import health from '../components/health/routes'
import { responseHandler } from '../utils'
import { routeConstants, SWAGGER_OPTIONS } from './constant'

const router: Router = Router()
const {
  HEALTH,
  SWAGGER_ROUTE,
} = routeConstants
const swaggerDocs = swaggerJsdoc(SWAGGER_OPTIONS)

router.use(SWAGGER_ROUTE, swaggerUi.serve, swaggerUi.setup(swaggerDocs))

router.use(HEALTH, health)

/*  404 handler Always @end */
router.use((req: Request, res: Response) => {
  const logObj = {
    reqHeaders: req.headers,
    reqBody: req.body,
  }
  responseHandler.sendError({ message: 'url not found' }, 'url_not_found', res, 404, 'error', logObj)
})

export default router
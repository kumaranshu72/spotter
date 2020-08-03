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
/**
 * @swagger
 * definition:
 *   health:
 *     properties:
 *       status:
 *         type: string
 *         enum:
 *          - "LIVE"
 */
/**
 * @swagger
 *
 * /v1/health:
 *   get:
 *     description: Check the health of the server
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: x-correlation-id
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique Id for each request
 *       - in: header
 *         name: content-type
 *         schema:
 *           type: string
 *         description: application/json is allowed
 *       - in: header
 *         name: token
 *         schema:
 *           type: string
 *         description: token generated from L2 services
 *       - in: header
 *         name: source
 *         schema:
 *           type: string
 *         description: source will varry based on the platform example web,ios, etc
 *     responses:
 *       200:
 *         description: Server is alive
 *         schema:
 *           $ref: "#/definitions/health"
 *         headers:
 *            x-correlation-id:
 *                schema:
 *                 type: string
 *                description: Unique Id for each request.
 *            Cache-Control:
 *                schema:
 *                 type: string
 *                description: Cache Control Value
 *       401:
 *          description: Error Unauthorized
 *          headers:
 *            x-correlation-Id:
 *                schema:
 *                 type: string
 *                description: Unique Id for each request.
 *            Cache-Control:
 *                schema:
 *                 type: string
 *                description: Cache Control Value
 *       422:
 *          description: Unable to process the request header
 *          headers:
 *            x-correlation-Id:
 *                schema:
 *                 type: string
 *                description: Unique Id for each request.
 *            Cache-Control:
 *                schema:
 *                 type: string
 *                description: Cache Control Value
 *       404:
 *          description: Server is dead
 */
  .get([validateParams(paramSchema.healthValidator)], healthControllerV1)

export default router
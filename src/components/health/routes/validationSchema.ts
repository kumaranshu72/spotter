import BaseJoi from 'joi'
import Extension from 'joi-date-extensions'

const Joi = BaseJoi.extend(Extension)

const source = Joi.string().valid(['android', 'ios', 'website', 'msite']).optional()

export default {
  healthValidator: Joi.object().keys({
    source,
  }),
}

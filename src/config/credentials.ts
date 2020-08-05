import env from '../config/env/environment'

export const mongoConfig = {
  mongoUrl: env.mongo.mongoUrl,
}

export const redisConfig = {
  redisPort: env.redis.redisPort,
  redisUrl: env.redis.redisUrl,
}

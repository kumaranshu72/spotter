export const mongoConfig = {
  mongoUrl:
    process.env.MONGO_URL ||
    'mongodb://root:root@mongo/spotter?authSource=admin',
}

const getCustomRedisPort = () => process.env.REDIS_PORT || ''

export const redisConfig = {
  redisPort: parseInt(getCustomRedisPort(), 10) || 6379,
  redisUrl: process.env.REDIS_URL || 'redis',
}
export const mongoConfig = {
  mongoUrl:
    process.env.MONGO_URL ||
    'mongodb://root:root@mongo/spotter?authSource=admin',
}

export const redisConfig = {
  redisPort: process.env.REDIS_PORT || 6379,
  redisUrl: process.env.REDIS_URL || 'redis',
}

const nodeEnv: string = process.env.NODE_ENV || 'dev'

const config: any = {
  dev: {
    redis: {
      redisPort: 6379,
      redisUrl: 'localhost'
    },
    mongo: {
      mongoUrl: 'mongodb://root:root@localhost/spotter?authSource=admin'
    }
  },
  prod: {
    redis: {
      redisPort: 6379,
      redisUrl: 'localhost'
    },
    mongo: {
      mongoUrl: 'mongodb://root:root@localhost/spotter?authSource=admin'
    }
  },
  test: {

  }
}

export default config[nodeEnv]
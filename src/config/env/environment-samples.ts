const nodeEnv: string = process.env.NODE_ENV || 'dev'

const config: any = {
  dev: {

  },
  prod: {

  },
  test: {

  }
}

export default config[nodeEnv]
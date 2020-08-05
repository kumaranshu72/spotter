import redis, { RedisClient } from 'redis'
import { promisify } from 'util'

import { redisConfig } from '../config'

class Redis {
    private connection: RedisClient
    private options: redis.ClientOpts
    private getAsync: any
    private setAsync: any
    private hsetAsync: any
    private hgetAsync: any

    constructor() {
        this.options = {
            host: redisConfig.redisUrl,
            port: redisConfig.redisPort
        }
        this.connection = redis.createClient(this.options)
        this.checkConnectionStatus()
        this.getAsync = promisify(this.connection.get).bind(this.connection)
        this.setAsync = promisify(this.connection.setex).bind(this.connection)
        this.hsetAsync = promisify(this.connection.hset).bind(this.connection)
        this.hgetAsync = promisify(this.connection.hget).bind(this.connection)
    }

    public get = (key: string) => {
        return this.getAsync(key)
    }

    public set = (key: string, value: string, ttl: number) => {
        return this.setAsync(key, value, ttl)
    }

    public hset = (key: string, key1: string, value: string) => {
        return this.hsetAsync(key, key1, value)
    }

    public hget = (key: string, key1: string) => {
        return this.hgetAsync(key, key1)
    }

    public setExpire = (key: string, ttl: number) => {
        this.connection.expire(key, ttl)
    }

    private checkConnectionStatus = () => {
        this.connection.on('connect', () => {
            global.ctx.log.info(`Redis server is connected on port ${this.options.port}.`)
        })
        this.connection.on('error', () => {
            global.ctx.log.info('Error occurs while connection to redis server.')
        })
    }
}

export const RedisService = new Redis()

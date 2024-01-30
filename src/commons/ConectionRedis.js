import { createClient } from 'redis'
import constans from './Constans'
import logger from '../logger/logger'

export const redisInstance = createClient({ url: constans.URI_REDIS })

export const createConnectionRedis = async () => {
  redisInstance.on('error', err => logger.error('Redis Client Error', err))
  await redisInstance.connect()
  logger.info(`Conection Redis Ping: ${await redisInstance.ping()}`)
}
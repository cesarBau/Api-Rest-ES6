import { redisInstance } from '../commons/ConectionRedis'
import constans from '../commons/Constans'

const deleteRedis = constans.REDIS_TIME_EXPIRED

const saveRedis = async (idempotentia, result, statsCode) => {
    const saveRedis = { result, statsCode }
    await redisInstance.set(idempotentia, JSON.stringify(saveRedis), {EX: deleteRedis})
}

const getRedis = async key => {
    const value = await redisInstance.get(key)
    return value
}

export const validationRedis = {
    saveRedis,
    getRedis
}
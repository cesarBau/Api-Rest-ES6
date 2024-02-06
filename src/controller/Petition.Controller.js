import axios from 'axios'
import { Utils } from '../commons/utils'
import { validationRedis } from '../dao/DaoRedis'
import logger from '../logger/logger'

const errorResponse = async (req, res) => {
  logger.info('method errorResponse Controller started')
  const { body } = req
  logger.info(`create service => ${JSON.stringify(body)}`)
  const result = Utils.errorResponse
  logger.info('method errorResponse Controller ending')
  res.json(result)
}

const errorCancelResponse = async (req, res) => {
  logger.info('method errorCancelResponse Controller started')
  const { body } = req
  logger.info(`cancel service => ${JSON.stringify(body)}`)
  const result = Utils.errorResponse
  logger.info('method errorCancelResponse Controller ending')
  res.json(result)
}

const intercePetition = async (req, res) => {
  logger.info('method intercePetition Controller started')
  let bodyResponse = {}
  let statusResponse = 200
  const idempotentia = req.body['merchant-request-id']
  const { body } = req
  const value = await validationRedis.getRedis(idempotentia)
  if (value) {
    logger.info(`Exist ${idempotentia} in redis: ${value}`)
    const response = JSON.parse(value)
    bodyResponse = response.result
    statusResponse = response.statsCode
  }
  else {
    await validationRedis.saveRedis(idempotentia, { reason: { code: 'request in process', retriable: true } }, 200)
    const response = await axios.post('https://imperius.smapps.mx:2443/smi/apple-cip/notification/1.0.0', body)
    const { data, status } = response
    bodyResponse = data
    statusResponse = status
    await Utils.delay()
    await validationRedis.saveRedis(idempotentia, data, status)
  }
  logger.info('method intercePetition Controller ending')
  res.status(statusResponse).json(bodyResponse)
}


export const PetitionController = {
  errorResponse,
  errorCancelResponse,
  intercePetition
}

export default null

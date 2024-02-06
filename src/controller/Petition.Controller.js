import axios from 'axios'
import { ServicePetition } from '../service/Petition.Service'
import { Utils } from '../commons/utils'
import { validationRedis } from '../dao/DaoRedis'
import logger from '../logger/logger'

const errorResponse = async (req, res) => {
  logger.info('method errorResponse Controller started')
  const { body } = req
  const petition = Utils.typeTask(1, body)
  logger.info(`requestBody => ${JSON.stringify(body)}`)
  const result = await ServicePetition.savePetition(petition)
  logger.info(`result => ${JSON.stringify(result)}`)
  logger.info('method errorResponse Controller ending')
  res.json(result)
}

const errorCancelResponse = async (req, res) => {
  logger.info('method errorCancelResponse Controller started')
  const { body } = req
  const petition = Utils.typeTask(2, body)
  logger.info(`requestBody => ${JSON.stringify(body)}`)
  const result = await ServicePetition.savePetition(petition)
  logger.info(`result => ${JSON.stringify(result)}`)
  logger.info('method errorCancelResponse Controller ending')
  res.json(result)
}

const getPetition = async (req, res) => {
  logger.info('method getPetition Controller started')
  const { query } = req
  logger.info(`query => ${JSON.stringify(query)}`)
  const result = await ServicePetition.getPetition(query)
  logger.info(`result => ${JSON.stringify(result)}`)
  logger.info('method getPetition Controller ending')
  res.json(result)
}

const deletePetition = async (_req, res) => {
  logger.info('method deletePetition Controller started')
  await ServicePetition.deletePetition()
  logger.info('method deletePetition Controller ending')
  res.status(204).json({})
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
  getPetition,
  deletePetition,
  intercePetition
}

export default null

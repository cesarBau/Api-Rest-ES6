import { ServicePetition } from '../service/Petition.Service'
import { Utils } from '../commons/utils'
import { validationRedis } from '../dao/DaoRedis'

const errorResponse = async (req, res) => {
  console.log('method errorResponse Controller started')
  const { body } = req
  const petition = Utils.typeTask(1, body)
  console.log(`requestBody => ${JSON.stringify(body)}`)
  const result = await ServicePetition.savePetition(petition)
  console.log(`result => ${JSON.stringify(result)}`)
  //await validationRedis.saveRedis(body['partner-request-id'], result, 200)
  console.log('method errorResponse Controller ending')
  res.json(result)
}

const errorCancelResponse = async (req, res) => {
  console.log('method errorCancelResponse Controller started')
  const { body } = req
  const petition = Utils.typeTask(2, body)
  console.log(`requestBody => ${JSON.stringify(body)}`)
  const result = await ServicePetition.savePetition(petition)
  console.log(`result => ${JSON.stringify(result)}`)
  //await validationRedis.saveRedis(body['partner-request-id'], result, 200)
  console.log('method errorCancelResponse Controller ending')
  res.json(result)
}

const getPetition = async (req, res) => {
  console.log('method getPetition Controller started')
  const { query } = req
  console.log(`query => ${JSON.stringify(query)}`)
  const result = await ServicePetition.getPetition(query)
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method getPetition Controller ending')
  res.json(result)
}

const deletePetition = async (_req, res) => {
  console.log('method deletePetition Controller started')
  await ServicePetition.deletePetition()
  console.log('method deletePetition Controller ending')
  res.status(204).json({})
}

const intercepActivate = async (req, res) => {
  console.log('method intercepActivate Controller started')
  const idempotentia = req.body['partner-request-id']
  console.log(`idempotentia ${idempotentia}`)
  const value = await validationRedis.getRedis(idempotentia)
  if (value) {
    console.log(`Exist ${idempotentia} in redis: ${value}`)
    const response = JSON.parse(value)
    const { result, statsCode } = response
    res.status(statsCode).json(result)
  }
  else {
    await validationRedis.saveRedis(idempotentia, {message: 'request in process'}, 200)
    await errorResponse(req, res)
  }
  console.log('method intercepActivate Controller ending')
}

const intercepCancel = async (req, res) => {
  console.log('method intercepCancel Controller started')
  const idempotentia = req.body['partner-request-id']
  const value = await validationRedis.getRedis(idempotentia)
  if (value) {
    console.log(`Exist ${idempotentia} in redis: ${value}`)
    const response = JSON.parse(value)
    const { result, statsCode } = response
    res.status(statsCode).json(result)
  }
  else {
    await validationRedis.saveRedis(idempotentia, {message: 'Request in process'}, 200)
    await Utils.delay()
    await errorCancelResponse(req, res)
  }
  console.log('method intercepCancel Controller ending')
}


export const PetitionController = {
  errorResponse,
  errorCancelResponse,
  getPetition,
  deletePetition,
  intercepActivate,
  intercepCancel
}

export default null

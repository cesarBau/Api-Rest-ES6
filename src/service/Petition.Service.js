import _ from 'lodash'
import { PetitionDAO } from '../dao/DaoPetition'
import { Utils } from '../commons/utils'
import logger from '../logger/logger'

const savePetition = async (document) => {
  logger.info('method savePetition Service started')
  logger.info(`document => ${JSON.stringify(document)}`)
  const result = await PetitionDAO.savePetition(document)
  logger.info(`result => ${JSON.stringify(result)}`)
  logger.info('method savePetition Service ending')
  return Utils.errorResponse
}

const getPetition = async (query) => {
  logger.info('method getPetition Service started')
  let result
  if (_.isEmpty(query)){
    result = await PetitionDAO.getPetition()
  } else {
    let values = []
    const process = await PetitionDAO.getPetitionQuery(query)
    const { registries } = process
    registries.forEach(element => {
        values.push(element.body)
    })
    result = {
        count: process.count,
        registries: values
    }
  }
  logger.info(`result => ${JSON.stringify(result.count)}`)
  logger.info('method getPetition Service ending')
  return result
}

const deletePetition = async () => {
  logger.info('method deletePetition Service started')
  await PetitionDAO.deletePetition()
  logger.info('method deletePetition Service ending')
}


export const ServicePetition = {
  savePetition,
  getPetition,
  deletePetition
}

export default null

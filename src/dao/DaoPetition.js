import Mongoose from 'mongoose'
import { testSchema } from '../models/ModelTest'
import logger from '../logger/logger'

const Petition = Mongoose.model('petition', testSchema)

const savePetition = async (body) => {
  logger.info('method savePetition DAO started')
  logger.info(`document => ${JSON.stringify(body)}`)
  const result = await Petition.create(body)
  logger.info('method savePetition DAO ending')
  return result
}

const getPetition = async () => {
  logger.info('method getPetition DAO started')
  const count = await Petition.countDocuments()
  logger.info(`registries: ${count}`)
  const registries = await Petition.find({})
  const result = {
    count,
    registries
  }
  logger.info('method getPetition DAO ending')
  return result
}

const getPetitionQuery = async (query) => {
  logger.info('method getPetitionQuery DAO started')
  const count = await Petition.countDocuments(query)
  logger.info(`registries: ${count}`)
  const registries = await Petition.find(query)
  const result = {
    count,
    registries
  }
  logger.info('method getPetitionQuery DAO ending')
  return result
}

const deletePetition = async () => {
  logger.info('method deletePetition DAO started')
  const count = await Petition.countDocuments()
  logger.info(`registries: ${count}`)
  await Petition.deleteMany({})
  logger.info('method deletePetition DAO ending')
}

export const PetitionDAO = {
  savePetition,
  getPetition,
  deletePetition,
  getPetitionQuery
}

export default null

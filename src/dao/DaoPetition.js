import Mongoose from 'mongoose'
import { testSchema } from '../models/ModelTest'

const Petition = Mongoose.model('petition', testSchema)

const savePetition = async (body) => {
  console.log('method savePetition DAO started')
  console.log(`document => ${JSON.stringify(body)}`)
  const result = await Petition.create(body)
  console.log('method savePetition DAO ending')
  return result
}

const getPetition = async () => {
  console.log('method getPetition DAO started')
  const count = await Petition.countDocuments()
  console.log(`registries: ${count}`)
  const registries = await Petition.find({})
  const result = {
    count,
    registries
  }
  console.log('method getPetition DAO ending')
  return result
}

const getPetitionQuery = async (query) => {
  console.log('method getPetitionQuery DAO started')
  const count = await Petition.countDocuments(query)
  console.log(`registries: ${count}`)
  const registries = await Petition.find(query)
  const result = {
    count,
    registries
  }
  console.log('method getPetitionQuery DAO ending')
  return result
}

const deletePetition = async () => {
  console.log('method deletePetition DAO started')
  const count = await Petition.countDocuments()
  console.log(`registries: ${count}`)
  await Petition.deleteMany({})
  console.log('method deletePetition DAO ending')
}

export const PetitionDAO = {
  savePetition,
  getPetition,
  deletePetition,
  getPetitionQuery
}

export default null

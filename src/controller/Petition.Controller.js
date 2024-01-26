import { ServicePetition } from '../service/Petition.Service'
import { Utils } from '../commons/utils'

const errorResponse = async (req, res) => {
  console.log('method errorResponse Controller started')
  const { body } = req
  const petition = Utils.typeTask(1, body)
  console.log(`requestBody => ${JSON.stringify(body)}`)
  const result = await ServicePetition.savePetition(petition)
  console.log(`result => ${JSON.stringify(result)}`)
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

export const PetitionController = {
  errorResponse,
  errorCancelResponse,
  getPetition,
  deletePetition
}

export default null

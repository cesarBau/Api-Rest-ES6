import _ from 'lodash'
import { PetitionDAO } from '../dao/DaoPetition'
import { Utils } from '../commons/utils'

const savePetition = async (document) => {
  console.log('method savePetition Service started')
  console.log(`document => ${JSON.stringify(document)}`)
  const result = await PetitionDAO.savePetition(document)
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method savePetition Service ending')
  return Utils.errorResponse
}

const getPetition = async (query) => {
  console.log('method getPetition Service started')
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
  console.log(`result => ${JSON.stringify(result.count)}`)
  console.log('method getPetition Service ending')
  return result
}

const deletePetition = async () => {
  console.log('method deletePetition Service started')
  await PetitionDAO.deletePetition()
  console.log('method deletePetition Service ending')
}


export const ServicePetition = {
  savePetition,
  getPetition,
  deletePetition
}

export default null

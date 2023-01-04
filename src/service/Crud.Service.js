import _ from 'lodash'
import { TestDAO } from '../dao/DaoTest'

const saveCrud = async (document) => {
  console.log('method saveCrud Service started')
  const result = await TestDAO.saveTest(document)
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method saveCrud Service ending')
  return result
}

const getCrud = async (query) => {
  console.log('method getCrud Service started')
  let response = []
  if (_.isEmpty(query)){
    response = await TestDAO.getTest()
  } else {
    response = await TestDAO.getQueryTest(query)
  }
  console.log(`result => ${JSON.stringify(response)}`)
  const result = { registries: response }
  console.log('method getCrud Service ending')
  return result
}

const getByIdCrud = async (params) => {
  console.log('method getByIdCrud Service started')
  const { id } = params
  const response = await TestDAO.getByIdTest(id)
  console.log(`result => ${JSON.stringify(response)}`)
  const result = { registries: response }
  console.log('method getByIdCrud Service ending')
  return result
}

const updateCrud = async (params, document) => {
  console.log('method updateCrud Service started')
  const { id } = params
  const result = await TestDAO.updateTest(id, document)
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method updateCrud Service ending')
  return result
}

const deleteCrud = async (params) => {
  console.log('method deleteCrud Service started')
  const { id } = params
  const result = await TestDAO.deleteTest(id)
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method deleteCrud Service ending')
  return result
}

export const ServiceCrud = {
  saveCrud,
  getCrud,
  updateCrud,
  deleteCrud,
  getByIdCrud,
}

export default null

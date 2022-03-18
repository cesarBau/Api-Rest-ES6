import { TestDAO } from '../dao/DaoTest'

const saveCrud = async (document) => {
  console.log('method saveCrud Service started')
  const result = await TestDAO.saveTest(document)
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method saveCrud Service ending')
  return result
}

const getCrud = async () => {
  console.log('method getCrud Service started')
  const result = await TestDAO.getTest()
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method getCrud Service ending')
  return result
}

export const ServiceCrud = {
  saveCrud,
  getCrud,
}

export default null

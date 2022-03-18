import { ServiceCrud } from '../service/Crud.Service'

const saveCrud = async (req, res) => {
  console.log('method saveCrud Controller started')
  const requestBody = req.body
  console.log(`requestBody => ${JSON.stringify(requestBody)}`)
  const result = await ServiceCrud.saveCrud(requestBody)
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method saveCrud Controller ending')
  res.json(result)
}

const getCrud = async (req, res) => {
  console.log('method getCrud Controller started')
  const result = await ServiceCrud.getCrud()
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method getCrud Controller ending')
  res.json(result)
}

export const CrudController = {
  saveCrud,
  getCrud,
}

export default null

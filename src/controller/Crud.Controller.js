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

const getByIdCrud = async (req, res) => {
  console.log('method getByIdCrud Controller started')
  const { params } = req
  const result = await ServiceCrud.getByIdCrud(params)
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method getByIdCrud Controller ending')
  res.json(result)
}

const updateCrud = async (req, res) => {
  console.log('method updateCrud Controller started')
  const { body, params } = req
  console.log(`requestBody => ${JSON.stringify(body)}`)
  console.log(`params => ${JSON.stringify(params)}`)
  const result = ServiceCrud.updateCrud(params, body)
  console.log('method updateCrud Controller ending')
  res.status(204).json(result)
}

const deleteCrud = async (req, res) => {
  console.log('method deleteCrud Controller started')
  const { params } = req
  console.log(`params => ${JSON.stringify(params)}`)
  const result = ServiceCrud.deleteCrud(params)
  console.log('method deleteCrud Controller ending')
  res.status(204).json(result)
}

export const CrudController = {
  saveCrud,
  getCrud,
  updateCrud,
  deleteCrud,
  getByIdCrud
}

export default null

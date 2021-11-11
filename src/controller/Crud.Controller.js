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

export const CrudController = {
  saveCrud,
}

export default null

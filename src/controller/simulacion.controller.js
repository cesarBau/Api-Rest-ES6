import { simulacionService } from '../service/simulacion.service'

const simulacion = async (req, res) => {
  console.log('method simulacion controller started')
  const result = simulacionService.example
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method simulacion controller ending')
  res.json(result)
}
export const simulacionController = {
  simulacion,
}

export default null

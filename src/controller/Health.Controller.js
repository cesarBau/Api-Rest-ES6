import Constans from '../commons/Constans'
import HealthService from '../service/Health.Service'

const healthCheck = async (req, res) => {
  console.log('method healthCheck Controller started')
  const result = HealthService.healthCheck
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method healthCheck Controller ending')
  res.json(result)
}

const delay = async (_, res) => {
  console.log('method delay Controller started')
  console.log(`time to delay => ${Constans.DELAY}`)
  await sleep(Constans.DELAY)
  const result = { message: 'delay complete' }
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method delay Controller ending')
  res.json(result)
}


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const HelloController = {
  healthCheck,
  delay
}

export default null

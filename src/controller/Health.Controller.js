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

const errors_400 = async (_, res) => {
  console.log('method errors_400 Controller started')
  const result = {}
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method errors_400 Controller ending')
  res.status(400).json(result)
}

const errors_403 = async (_, res) => {
  console.log('method errors_403 Controller started')
  const result = {}
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method errors_403 Controller ending')
  res.status(403).json(result)
}

const errors_500 = async (_, res) => {
  console.log('method errors_500 Controller started')
  const result = {}
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method errors_500 Controller ending')
  res.status(500).json(result)
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const HelloController = {
  healthCheck,
  delay,
  errors_400,
  errors_403,
  errors_500
}

export default null

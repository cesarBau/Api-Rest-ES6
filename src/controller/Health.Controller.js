import HealthService from '../service/Health.Service'

const healthCheck = async (req, res) => {
  console.log('method healthCheck Controller started')
  const result = HealthService.healthCheck
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method healthCheck Controller ending')
  res.json(result)
}

const errorResponse = async (req, res) => {
  console.log('method errorResponse Controller started')
  const result = {
    'confirmation-id': null,
    reason: {
      code: 'failure',
      'error-key': 'InternalError',
      retriable: false,
      'error-message': 'Predefined error'
    }
  }
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method errorResponse Controller ending')
  res.json(result)
}

const correctResponse = async (req, res) => {
  console.log('method correctResponse Controller started')
  const result = {
    'confirmation-id': 914567181919,
    'partner-request-id': 1234567890,
    'activation-data': {
      deeplink: 'https://tv.apple.com/us/subscription/link?product=PPCC_ATV_HB&id=1472441559&token=eyJhbGciOiJIUzI1NiJ9',
      expiration: '2022-11-22 04:44:16'
    },
    reason: {
      code: 'success',
      retriable: false
    }
  }
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method correctResponse Controller ending')
  res.json(result)
}


export const HelloController = {
  healthCheck,
  errorResponse,
  correctResponse
}

export default null

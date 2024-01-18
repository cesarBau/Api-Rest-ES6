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
  console.log(`Body petition => ${JSON.stringify(req.body)}`)
  const result = {
    'confirmation-id': null,
    'partner-request-id': 1234567890,
    reason: {
      code: 'failure',
      'error-key': 'InternalError',
      retriable: true,
      'error-message': 'Predefined error'
    }
  }
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method errorResponse Controller ending')
  res.json(result)
}

const errorCancelResponse = async (req, res) => {
  console.log('method errorCancelResponse Controller started')
  console.log(`Body petition => ${JSON.stringify(req.body)}`)
  const result = {
    'confirmation-id': null,
    'partner-request-id': 1234567890,
    reason: {
      code: 'failure',
      'error-key': 'InternalError',
      retriable: true,
      'error-message': 'Predefined error'
    }
  }
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method errorCancelResponse Controller ending')
  res.json(result)
}


export const HelloController = {
  healthCheck,
  errorResponse,
  errorCancelResponse
}

export default null

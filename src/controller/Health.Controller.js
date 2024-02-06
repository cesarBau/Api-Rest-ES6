import HealthService from '../service/Health.Service'
import logger from '../logger/logger'

const healthCheck = async (req, res) => {
  logger.info('method healthCheck Controller started')
  const result = HealthService.healthCheck
  logger.info(`result => ${JSON.stringify(result)}`)
  logger.info('method healthCheck Controller ending')
  res.json(result)
}

export const HelloController = {
  healthCheck
}

export default null

import express from 'express'
import { HelloController } from '../controller/Health.Controller'

const router = express.Router()

router.get('/', HelloController.healthCheck)
router.post('/activate/entitlement/create', HelloController.errorResponse)
router.post('/cancel/entitlement/cancel', HelloController.errorCancelResponse)


module.exports = router

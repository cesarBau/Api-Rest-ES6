import express from 'express'
import { HelloController } from '../controller/Health.Controller'

const router = express.Router()

router.get('/', HelloController.healthCheck)
router.post('/god/entitlement/create', HelloController.correctResponse)
router.post('/bad/entitlement/create', HelloController.errorResponse)


module.exports = router

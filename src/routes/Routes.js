import express from 'express'
import { HelloController } from '../controller/Health.Controller'
import { PetitionController } from '../controller/Petition.Controller'

const router = express.Router()

router.get('/', HelloController.healthCheck)
router.post('/entitlement/create', PetitionController.errorResponse)
router.post('/entitlement/cancel', PetitionController.errorCancelResponse)
router.post('/intercept', PetitionController.intercePetition)

module.exports = router

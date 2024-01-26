import express from 'express'
import { HelloController } from '../controller/Health.Controller'
import { PetitionController } from '../controller/Petition.Controller'

const router = express.Router()

router.get('/', HelloController.healthCheck)
router.get('/petition', PetitionController.getPetition)
router.delete('/petition', PetitionController.deletePetition)
router.post('/entitlement/create', PetitionController.errorResponse)
router.post('/entitlement/cancel', PetitionController.errorCancelResponse)



module.exports = router

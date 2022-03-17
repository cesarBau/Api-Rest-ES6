import express from 'express'
import { HelloController } from '../controller/Health.Controller'
import { simulacionController } from '../controller/simulacion.controller'

const router = express.Router()

router.get('/', HelloController.healthCheck)
router.get('/simulacion', simulacionController.simulacion)

module.exports = router

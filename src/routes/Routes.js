import express from 'express'
import { HelloController } from '../controller/Health.Controller'
import { CrudController } from '../controller/Crud.Controller'

const router = express.Router()

router.get('/', HelloController.healthCheck)
router.post('/delay', HelloController.delay)
router.post('/400', HelloController.errors_400)
router.post('/403', HelloController.errors_403)
router.post('/500', HelloController.errors_500)

module.exports = router

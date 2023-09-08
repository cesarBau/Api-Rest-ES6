import express from 'express'
import { HelloController } from '../controller/Health.Controller'
import { CrudController } from '../controller/Crud.Controller'

const router = express.Router()

router.get('/', HelloController.healthCheck)
router.post('/delay', HelloController.delay)

module.exports = router

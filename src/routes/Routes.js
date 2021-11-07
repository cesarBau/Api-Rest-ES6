import express from 'express'
import { HelloController } from '../controller/Health.Controller'
import { CrudController } from '../controller/Crud.Controller'

const router = express.Router()

router.get('/', HelloController.healthCheck )

router.route('/crud')
.post(CrudController.saveCrud)
.get(HelloController.healthCheck)

module.exports = router

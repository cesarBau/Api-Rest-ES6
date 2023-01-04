import express from 'express'
import { HelloController } from '../controller/Health.Controller'
import { CrudController } from '../controller/Crud.Controller'

const router = express.Router()

router.get('/', HelloController.healthCheck)

router.route('/crud').post(CrudController.saveCrud).get(CrudController.getCrud)

router.route('/crud/:id').put(CrudController.updateCrud).delete(CrudController.deleteCrud).get(CrudController.getByIdCrud)

module.exports = router

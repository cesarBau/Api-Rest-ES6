import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/Routes'
import Constans from './commons/Constans'
import { createConnection } from './commons/Connection'
import { createConnectionRedis } from './commons/ConectionRedis'
import logger from './logger/logger'
import os from 'os'

const app = express()
const PORT = Constans.PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(`/${Constans.CONTEXT_NAME}/${Constans.VERSION}/`, router)

createConnectionRedis().then(() => {
  createConnection().then(() => {
    app.listen(PORT, () => {
      logger.info(
        `Example app listening at http://${os.hostname}:${PORT}/${Constans.CONTEXT_NAME}/${Constans.VERSION}/`
      )
    })
  })
})

module.exports = app

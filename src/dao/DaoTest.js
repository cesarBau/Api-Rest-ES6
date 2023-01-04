import Mongoose from 'mongoose'
import { testSchema } from '../models/ModelTest'

const Test = Mongoose.model('note', testSchema)

const saveTest = async (test) => {
  console.log('method saveTest DAO started')
  const result = await Test.create(test)
  console.log('method saveTest DAO ending')
  return result
}

const getTest = async () => {
  console.log('method getTest DAO started')
  const count = await Test.count()
  console.log(`registries: ${count}`)
  const result = await Test.find({})
  console.log('method getTest DAO ending')
  return result
}

export const TestDAO = {
  saveTest,
  getTest,
}

export default null

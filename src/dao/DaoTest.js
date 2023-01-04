import Mongoose from 'mongoose'
import { testSchema } from '../models/ModelTest'

const Test = Mongoose.model('note', testSchema)

const saveTest = async (body) => {
  console.log('method saveTest DAO started')
  const result = await Test.create(body)
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

const getByIdTest = async (id) => {
  console.log('method getByIdTest DAO started')
  const result = await Test.findById(id)
  console.log('method getByIdTest DAO ending')
  return result
}

const updateTest = async (id, body) => {
  console.log('method updateTest DAO started')
  const result = await Test.findByIdAndUpdate(id, body)
  console.log('method updateTest DAO ending')
  return result
}

const deleteTest = async (id) => {
  console.log('method deleteTest DAO started')
  const result = await Test.findByIdAndDelete(id)
  console.log('method deleteTest DAO ending')
  return result
}

export const TestDAO = {
  saveTest,
  getTest,
  updateTest,
  deleteTest,
  getByIdTest,
}

export default null

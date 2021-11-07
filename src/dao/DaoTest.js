import Mongoose from 'mongoose'
import { testSchema } from '../models/ModelTest'

const Test = Mongoose.model('blog', testSchema)

const saveTest = async test => {
    console.log('method saveTest DAO started')
    const result = await Test.create(test)
    console.log('method saveTest DAO ending')
    return result
}

export const TestDAO = {
    saveTest
}

export default null
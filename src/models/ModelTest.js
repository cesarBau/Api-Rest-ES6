import mongoose from 'mongoose'
import Moment from 'moment'

export const testSchema = new mongoose.Schema(
  {
    title: String,
  },
  {
    versionKey: false,
    timestamps: {
      currentTime: () => Moment(Moment.now(), 'x').toISOString(),
    },
  }
)

export default null

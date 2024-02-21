import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/ads')
  .then(() => console.log('Connected!'));

export const db=mongoose.connection
  
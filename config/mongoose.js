const mongoose = require('mongoose')

//非production環境使用dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.once('open', () => {
  console.log('mongoDB connect!!')
})

db.on('error', () => {
  console.log('mongoDB connect error!!')
})

module.exports = db 

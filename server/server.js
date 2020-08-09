import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise
//mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connect(
  'mongodb+srv://devuser:abcd1234@cluster0-ge7nw.mongodb.net/social?retryWrites=true&w=majority',
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  },
  () => console.log('DB Connected!')
)
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

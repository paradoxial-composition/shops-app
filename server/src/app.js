const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

var mongoose = require('mongoose')
require('./api/models/shopListModel')
require('./api/models/prefferedShopListModel')
require('./api/models/dislikedShopListModel')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/MyShops', { useNewUrlParser: true })

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

require('./api/routes/shopListRoutes')(app)

require('./api/routes/prefferedShopListRoutes')(app)
require('./api/routes/dislikedShopListRoutes')(app)

app.listen(config.portAPI)
console.log('shop List started on:' + config.portAPI)

sequelize.sync() // {force: true} to drop all data ! be warry of use
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

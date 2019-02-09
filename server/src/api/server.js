let express = require('express')
let app = express()
let port = process.env.PORT || 8085
let mongoose = require('mongoose')
require('./models/shopListModel')
require('./models/prefferedShopListModel')
require('./models/dislikedShopListModel')
let bodyParser = require('body-parser')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/MyShops', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require('./routes/shopListRoutes')
routes(app)

let prefferedRoutes = require('./routes/prefferedShopListRoutes')
prefferedRoutes(app)

let dislikedRoutes = require('./routes/dislikedShopListRoutes')
dislikedRoutes(app)

app.listen(port)

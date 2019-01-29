var express = require('express')
var app = express()
var port = process.env.PORT || 8085
var mongoose = require('mongoose')
require('./models/shopListModel')
require('./models/prefferedShopListModel')
var bodyParser = require('body-parser')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/MyShops', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./routes/shopListRoutes')
routes(app)

var prefferedRoutes = require('./routes/prefferedShopListRoutes')
prefferedRoutes(app)

app.listen(port)
console.log('shop List started on:' + port)

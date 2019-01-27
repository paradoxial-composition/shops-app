var express = require('express')
var app = express()
var port = process.env.PORT || 8085
var mongoose = require('mongoose')
var Shop = require('./models/shopListModel')
var bodyParser = require('body-parser')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/MyShops', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./routes/shopListRoutes')
routes(app)

app.listen(port)
console.log('shop List started on:' + port)

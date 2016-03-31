'use strict'

// require('dotenv').config()

// Set default node environment to development
// process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var express        = require('express') // import express.js
var hbs            = require('express-hbs') // handlebars
var bodyParser     = require('body-parser') // parse request bodies
var cookieParser   = require('cookie-parser')
var path           = require('path') // work with file paths
var logger 		   = require('morgan')
// var methodOverride = require('method-override') // allow put, delete through post
var request 	   = require('request')

var routes = require('./routes')

var app = express() // create the express application
// var server = require('http').createServer(app) // create the server

// app.engine('hbs', hbs.express4({
//   partialsDir: __dirname + '/views',
//   defaultLayout: __dirname + '/views/layout'
// }))

// app.set('view engine', 'hbs')
// app.set('views', __dirname + '/views')

app.use(logger( 'dev' ))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(methodOverride('_method'))

app.get('/', function (req, res) {
  res.redirect('/myhobby/user')
})

app.use('/myhobby', routes)

request('/users', function(err, res, body) {
	if(err || res.statusCode != 200) {console.log(err); return}
	res.json(body)
})




// Start the app only when run with npm start
// Don't run it when imported into the tests
// if (require.main === module) {
//   server.listen(5000, function () {
//     console.log('Running on port 5000!')
//   })
// }

// For testing purposes
exports = module.exports = app
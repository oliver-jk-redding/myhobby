'use strict'

require('dotenv').config()

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var express        = require('express') // import express.js
var hbs            = require('express-hbs') // handlebars
var bodyParser     = require('body-parser') // parse request bodies
var cookieParser   = require('cookie-parser')
var path           = require('path') // work with file paths
var logger 		   = require('morgan')
var methodOverride = require('method-override') // allow put, delete through post
var request 	   = require('request')

var routes = require('./routes')

var app = express() // create the express application
var server = require('http').createServer(app) // create the server

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views',
  defaultLayout: __dirname + '/views/layout'
}))

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use(logger( 'dev' ))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))

app.get('/', function (req, res) {
  res.redirect('/myhobby/user')
})

app.use('/myhobby', routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

request('/users', function(err, res, body) {
	if(err || res.statusCode != 200) {console.log(err); return}
})





// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// Start the app only when run with npm start
// Don't run it when imported into the tests
if (require.main === module) {
  server.listen(5000, function () {
    console.log('Running on port 5000!')
  })
}

// For testing purposes
exports = module.exports = app
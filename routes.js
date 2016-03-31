var express = require('express')
var router = express.Router()

// Returns json of users
router.get('/users', function (req, res) {
  res.send(userData)
})

// Returns json of user information
router.get('/user', function (req, res) {
  res.send(userData)
})

//returns a json of the user's hobbies
router.get('/user/hobbies/', function (req, res) {
  res.send(userProjectData)
})

// Returns json list of user's projects
router.get('/user/projects/', function (req, res) {
  res.send(userProjectData)
})

//returns a json of the id specified user's pinterest board
router.get('/user/pinterest/:id', function (req, res) {
  res.send(userProjectData)
})

//returns a json of the latest projects
router.get('/projects/', function (req, res) {
  res.send(userProjectData)
})

//returns a json of the latest projects of a specified hobby
router.get('/projects/:hobby', function (req, res) {
  res.send(userProjectData)
})

//returns a json of a project matching the specified id
router.get('/projects/:id', function (req, res) {
  res.send(userProjectData)
})

//creates a new project with the given id
router.post('/projects/:id', function (req, res) {
  res.send(userProjectData)
})

//returns a json of the updated project
router.patch('/projects/:id', function (req, res) {
  res.send()
})

//removes the project with the matching id and returns a json of the projects without the id
router.delete('/projects/:id', function (req, res) {
  res.end('You found the delete!')
})


module.exports = router
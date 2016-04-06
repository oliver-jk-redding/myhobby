var express = require('express')
var router = express.Router()

var users = {
  users: [
    {"id":"1","name":"Harry Hobbymouse","profileImg":"http://pngimg.com/upload/rat_mouse_PNG2465.png","hobbies":["karate","scissor-cutting"]},
    {"id":"2","name":"Larry Craftdog","homepage":"http://animaliaz-life.com/data_images/dog/dog4.jpg","hobbies":["music","car modding"]}
  ]
}

// Returns json of users
router.get('/users', function (req, res, callback) {
  // getUserInfo(function(err, data) {
    // if(err) {callback(err); return}
    res.status(200)
    var json = {cats: [{name: 'piet'}]};
    // res.json({cats: [{name: 'piet'}]});
    // res.json(json)
    callback(null, res, json)
  // })
})

// Returns json of user information
router.get('/user', function (req, res) {
  // res.send(userData)
})

//returns a json of the user's hobbies
router.get('/user/hobbies/', function (req, res) {
  // res.send(userProjectData)
})

// Returns json list of user's projects
router.get('/user/projects/', function (req, res) {
  // res.send(userProjectData)
})

//returns a json of the id specified user's pinterest board
router.get('/user/pinterest/:id', function (req, res) {
  // res.send(userProjectData)
})

//returns a json of the latest projects
router.get('/projects/', function (req, res) {
  // res.send(userProjectData)
})

//returns a json of the latest projects of a specified hobby
router.get('/projects/:hobby', function (req, res) {
  // res.send(userProjectData)
})

//returns a json of a project matching the specified id
router.get('/projects/:id', function (req, res) {
  // res.send(userProjectData)
})

//creates a new project with the given id
router.post('/projects/:id', function (req, res) {
  // res.send(userProjectData)
})

//returns a json of the updated project
router.patch('/projects/:id', function (req, res) {
  // res.send()
})

//removes the project with the matching id and returns a json of the projects without the id
router.delete('/projects/:id', function (req, res) {
  // res.end('You found the delete!')
})


module.exports = router
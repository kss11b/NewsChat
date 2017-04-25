var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var board = require('../controllers/board.js');
var post = require('../controllers/post.js');
module.exports = function(app) {
  app.post('/create', function(req, res) {
    console.log('routes reached')
    users.create(req, res);
  });
  app.post('/login', function(req, res) {
    users.login(req, res);
  });
  app.post('/board', function(req, res) {
    board.board(req, res)
})
  app.get('/pull', function(req, res){
    board.pull(req, res)
  })
  app.get('/users/:id', function(req, res){
    users.show(req, res)
  })
  app.get('/getUsers', function(req, res){
    users.getUsers(req, res)
  })
  app.delete('/delete/:id', function(req, res){
    board.delete(req, res)
  })
  app.get('/getBoard/:id', function(req, res){
    board.getBoard(req, res)
  })
  app.post('/post/', function(req, res){
    post.post(req, res)
  })
}

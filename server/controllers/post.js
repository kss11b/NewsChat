var mongoose = require('mongoose');
var Board = mongoose.model('Board');
var User = mongoose.model('User');
var Post = mongoose.model('Post')
module.exports = {

  post: function(req, res){

    var newPost = new Post({
      text: req.body.text,
      poster: req.body.poster,
      board: req.body.board,
      username: req.body.username
    })
    newPost.save(function(err, doc){
      if(err){
        console.log('could not save original')
        return res.json(err);
      }
      else{
        Board.findById(req.body.board).exec(function(err, board){
          if(err){
            res.json(err)
          }
          else{
            board.users.push(req.body.poster)
            board.posts.push(newPost)
            board.save(function(err, doc){
              if(err){
                res.json(err)
              }
              else{
                res.json(doc)
              }
            })
          }
        })

      };
    })
  },

}

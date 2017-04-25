var mongoose = require('mongoose');
var Board = mongoose.model('Board');
var User = mongoose.model('User');
var Post = mongoose.model('Post')
module.exports = {

  board: function(req, res){

    var newBoard = new Board({
      title: req.body.title,
      topic: req.body.topic,
      admin: req.body.admin
    })
      newBoard.users.push(req.body.admin)
    newBoard.save(function(err, doc){
      if(err){
        console.log('could not save original')
        return res.json(err);
      }
      else{
        console.log('Create Board Successs')
        res.json(doc);
      };
    })
  },





  pull: function(req,res){
    console.log("pull")
    Board.find({}, function(err, doc){
      if(err){
        res.json(err)
      }
      else{
        res.json(doc);
      }
    }).populate("admin").sort('-createdAt')


  },



delete: function(req, res){
  Board.remove({_id: req.params.id}, function(err, doc) {
    if(err){
      res.json(err)
    }
    else{
      console.log('board removed')
      res.json(doc)
    }

  });
},

show: function(req, res){
  console.log('backend hit')
  Question.findById(req.params.id, function(err, doc){
    if(err){
      res.json(err)
    }
    else{
      res.json(doc)
    }
  }).populate('options')
},

getBoard: function(req, res) {
  Board.findById({_id : req.params.id}, function(err, doc){
    if(err){
      res.json(err)
    }
    else{
      res.json(doc)
    }
  }).populate('admin').populate('posts').sort('posts').exec()
}




}

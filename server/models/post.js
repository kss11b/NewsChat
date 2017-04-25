var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema({
 poster: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 board: {type: mongoose.Schema.Types.ObjectId, ref: 'Board'},
 text: {type: String, minlength:1, required: true},
 username: {type: String, required: true}





}, {timestamps: true})
var Bid = mongoose.model('Post', PostSchema);

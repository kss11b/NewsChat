var mongoose = require('mongoose');
var BoardSchema = new mongoose.Schema({
 admin: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
 users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
 title: {type: String, required: true},
 topic: {type: String}




}, {timestamps: true})
var Bid = mongoose.model('Board', BoardSchema);

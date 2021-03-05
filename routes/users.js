const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/database');

let postSchema = mongoose.Schema({
  post: String,
})

module.exports = mongoose.model('user', postSchema);
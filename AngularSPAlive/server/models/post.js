var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ------ MONGOOSE DB -------
// This is the only place connection needs to be.
// Right now I am using separate connection for each model
const dbPost = mongoose.createConnection('mongodb://localhost:27017/posts');
dbPost.on("error", console.error.bind(console, "connection error"));
dbPost.once("open", function(callback) {
  console.log("Connection succeeded")
});


var PostSchema = new Schema({
  name: String,
  title: String,
  post: String,
});

var Post = dbPost.model("Post", PostSchema);
module.exports = Post;

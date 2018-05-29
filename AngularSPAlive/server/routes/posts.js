var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

var Post = require("../models/post")

router.post('/', (req, res) => {
  var db = req.db;
  var name = req.body.name;
  var title = req.body.title;
  var post = req.body.post;

  var new_post = new Post({
    name,
    title,
    post,
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: "Post saved successfully!"
    })
  })
})

// Fetch Posts (and sort)
router.get('/', (req, res) => {
  Post.find({}, 'name title post', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

// Fetch single post
router.get('/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'name title post', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})

// Update a post
router.put('/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'name title post', function (error, post) {
    if (error) { console.error(error); }

    post.name = req.body.name
    post.title = req.body.title
    post.post = req.body.title
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete a post
router.delete('/:id', (req, res) => {
  var db = req.db;
  Post.remove({
    _id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

module.exports = router;

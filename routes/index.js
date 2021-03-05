const express = require('express');
const router = express.Router();
const postModel = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', function(req, res) {
  postModel
    .create({
      post: req.body.post 
    })
    .then(function(createdval){
      res.redirect('/read');
    })
});

router.get('/read', function(req, res){
  postModel
    .find()  
    .then(function(data){
      res.render('read', {data: data});
    })
});

router.get('/update/:userid', function(req, res){
  postModel
    .findOne({_id:req.params.userid})
    .then(function(updata){
      res.render('update', {updata: updata})
    })
});

router.post('/updateit/:userid', function(req, res){
  postModel
    .findOneAndUpdate({_id:req.params.userid}, {post:req.body.post})
    .then(function(updated){
      res.redirect('/read');
    })
});

router.get('/delete/:userid', function(req, res){
  postModel
    .findOneAndDelete({_id:req.params.userid})
    .then(function(data){
      res.redirect('/read');
    })
});

module.exports = router;

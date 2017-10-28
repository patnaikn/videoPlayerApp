var express = require('express');
var apiRouter = express.Router();
var mongoose = require('mongoose');
var video = require('../models/video');

var mongoDB = 'mongodb://localhost:27017/myDatabase';

mongoose.Promise = global.Promise;

mongoose.connect(mongoDB, {
  useMongoClient: true
}, function (err) {
  if (err) {
    console.log('Error!!!!!!!', err);
  }

});

apiRouter.get('/videos', function (req, res) {

  console.log('Get request for all videos');

  video.find({}).exec(function (err, videos) {
    if (err) {
      console.log('Error Retrieving Videos!!!!!!!', err);
    } else {
      res.json(videos);
    }

  })

});

apiRouter.get('/videos/:id', function (req, res) {

  console.log('Get request for a single video');

  video.findById(req.params.id).exec(function (err, video) {
    if (err) {
      console.log('Error Retrieving Video!!!!!!!', err);
    } else {
      res.json(video);
    }

  })

});

apiRouter.post('/videos', function (req, res) {
  "use strict";
  console.log('Post a video');
  var newVideo = new video();
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.desc = req.body.desc;
  newVideo.save(function (err, insertedVideo) {
    if (err) {
      res.send('Error Inserting Video!!!!!!!');
    } else {
      res.json(insertedVideo);
    }
  });

});

apiRouter.put('/videos/:id', function (req, res) {

  console.log('Update a video');

  video.findByIdAndUpdate(req.params.id, {
    $set: {title: req.body.title, url: req.body.url, desc: req.body.desc}
  }, {new: true}, function (err, updatedVideo) {
    if (err) {
      res.send('Error Updating Video!!!!!!!');
    } else {
      res.json(updatedVideo);
    }

  });

});

apiRouter.delete('/videos/:id',function(req,res){

  console.log('Delete a video');

  video.findByIdAndRemove(req.params.id, function(err,deletedVideo){
    if (err) {
      res.send('Error Deleting Video!!!!!!!');
    } else {
      res.json(deletedVideo);
    }

  })

});

module.exports = apiRouter;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: String,
  url: String,
  desc: String
  }
);

module.exports = mongoose.model('video', videoSchema, 'videoPlayer');

/* 1st param: video model, 2nd param: schema name, 3rd param: collection name in mongodb*/

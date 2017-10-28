var express = require('express');
var bodyParser = require('body-parser');
var path  = require('path');

const app = express();

var api= require('./server/routes/api');

const port = 3000;

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/api',api);

app.get('*',function(req,res){

  res.sendFile(path.join(__dirname),'/dist/index.html');

});

app.listen(port,function(req,res){

  console.log('Server started listening on '+port);

})


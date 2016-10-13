  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }))

  var cors = require('cors');  //解除同源限制
  app.use(cors());              //开放跨域共享
  var Post = require('./models/post.js');
  var mongoose = require('mongoose');
  mongoose.Promise = global.Promise;  //删除命令行中的垃圾信息（过期信息）
  mongoose.connect('mongodb://localhost:27017/mi-express-api');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('success')
  })
  var routes = require('./routes')
  routes(app)

  app.listen(3000,function(){
    console.log('running on post 3000')
  })

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


var Post = require('./models/post.js');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;  //删除命令行中的垃圾信息（过期信息）
mongoose.connect('mongodb://localhost:27017/mi-express-api');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('success')
})

  app.get('/',function(req,res){
    var page = "<form method='post' action='/posts'>"+
                "<input type='text' name='title' />"+
                "<input type='submit' />"+
                "</form>"
    res.send(page)
  })
  app.get('/posts',function(req,res){
    Post.find().sort({'createdAt':-1}).exec(function(err,posts){
      res.json({post:posts})
    })
  })
  app.post('/posts',function(req,res){
    var post = new Post({title:req.body.title})
    post.save(function(){
      console.log('saved!')
    });
    res.redirect('/posts')

  })
  app.listen(3000,function(){
    console.log('running on post 3000')
  })
// app.put('/posts/:id',function(req,res){
//   res.send('put')
// })

// app.delete('/posts/:id',function(req,res){
//   res.send('delete')
// })

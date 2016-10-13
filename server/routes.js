var Post = require('./models/post');
module.exports= function(app){

  // get all the posts
  app.get('/posts',function(req,res){
    Post.find().sort({'createdAt':-1}).exec(function(err,posts){
      res.json({posts:posts})
    })
  })

  // get a post
  app.get('/post/:id',function(req,res){
    Post.findOne({_id:req.params.id},function(err,doc){
      res.json({post:doc})
    })
  })

  // create a post
  app.post('/posts',function(req,res){
    var post = new Post({
      title:req.body.title,
      content:req.body.content,
      classify:req.body.classify
    })
    post.save(function(err){
      if(err) return console.log(err);
      console.log('saved!')
    });
    res.json({message:'success'})
  })

   // update a post
    app.put('/posts/:id', function(req, res) {
        if (req.body.title === '') return res.status(400).json({error: '文章标题不能为空！'});
        Post.findById({_id: req.params.id}, function(err, post) {
          if (err) return res.status(500).json({error:  err.message});
          for (prop in req.body) {
            post[prop] = req.body[prop];
          }
          post.save(function(err) {
            if (err) return res.status(500).json({error: err.message});
            res.json({
              message: '文章更新成功了！'
            });
          });
     });
    });

    // delete a post
    app.delete('/posts/:id', function(req, res) {
      Post.findById({_id: req.params.id}, function(err, post) {
        if (err) return res.status(500).json({error: err.message});
        post.remove(function(err){
          if (err) return res.status(500).json({error: err.message});
          res.json({ message: '文章已经删除了！' });
        });
      });
    });
}

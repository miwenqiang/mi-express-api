  var mongoose = require('mongoose');
  mongoose.Promise = global.Promise;  //删除命令行中的垃圾信息（过期信息）
  mongoose.connect('mongodb://localhost:27017/mi-express-api');



  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {


    // var catSchema = mongoose.Schema({
    //   name: String
    // });
    // var cat = mongoose.model('cat', catSchema);
    // var kitty = new cat({ name: 'kitty' });
    // console.log(kitty.name);
    // kitty.save();



    var userSchema = mongoose.Schema({userName: String,password:Number,age:String});

    var Info = mongoose.model('user', userSchema);

    // var xiaomi = new Info({ userName: 'xiaomi',password:123456,age:'48岁'});
    // xiaomi.save();
    // Info.update({ueserName:'xiaohong',age:'80'})
    // Info.find().exec(function(err, users) {
    // // 异步执行
    // console.log(users);
    // });

    Info.findById({_id: '57ecc66763f5b511c427435f'}, function(err, user) {
      user.remove(function(err){
        console.log('delete')
      })
      // user.age = '666666'
      // user.save(function(err){
      //   console.log('更新了！')
        Info.find().exec(function(err, users) {
          // 异步执行
          console.log(users);
        });
      // });
    });

    console.log("我先出来了")

  });

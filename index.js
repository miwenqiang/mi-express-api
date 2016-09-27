var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log('hello mi')
})
app.get('/xiaomi', function (req, res) {
  console.log('Hello xiaomi')
})

app.listen(3000,function(){
  console.log('running on port 3000...plz visit http://localhost:3000')
})

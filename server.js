var express = require('express'); //name package('')
var app = express();
var bodyParser = require('body-parser'); //in node_module ('')
var users = require('./users.js'); //use file in file tall path('./....name file...')
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
//------------------------------------teach teacher

function logger(req,res,next){
    console.log(new Date(), req.method, req.url);
    next();
    }
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(logger); //use all request
app.use(express.static('www')) // time run http://localhost:3000/welcome.html


app.get('/users', (req, res) => {
  var resultArray = [];
  mongo.connect(url, function (err, db) {
    // assert.equal(null, err);
    var cursor = db.collection('users').find();
    cursor.forEach(function (doc, err) {
    //   assert.equal(null, err);
      resultArray.push(doc);
    }, function () {
      db.close();
      // res.render('view', {
      //   items: resultArray
      // });
      res.json(resultArray);
    });
  });
});

app.get('/users/search', (req, res) => {
    var fname = req.query.fname;
    mongo.connect(url, function (err, db) {
      if (err) throw err;
      var query = { first_name: new RegExp('.*' + fname + '.*') };
      db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        // res.render('search', {
        //   items: result
        // });
        res.json(result);
      });
    });
  });
  
  app.get('/users/role/:role', (req, res) => {
    var role = req.params.role;
    mongo.connect(url, function (err, db) {
      if (err) throw err;
      var query = { role: new RegExp('.*' + role + '.*') };
      db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        // res.render('search', {
        //   items: result
        // });
        res.json(result);
      });
    });
  });


app.listen(3000); //port that run at port3000 
console.log('Server is running at http://localhost:3000');
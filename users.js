var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;

MongoClient.connect(url, function(err, database) {
    if (err) throw err;
    db = database;
    console.log("Connected to " + url);
    });



// update create delete
//time run http://localhost:3000/customers 
function findAll(req, res){
    //get data from mongoDB
        var query = {};
        db.collection("users").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.json(result);  //send to browser
        });
    
}

function searchByFname(req, res) {
    var fname = req.query.fname;
    //seach
    console.log(fname);
    // if (err) throw err;
    var query = {first_name:fname};
    db.collection("users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  }

function seachByRole(req, res) {
    var role = req.params.role;
    //seach
    if (err) throw err;
    var query = {role:role};
    db.collection("users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  }

  function searchBYexpired(req, res) {
    var expired = req.params.expired;
    //seach
    if (err) throw err;
    var query = { expired: expired};
    db.collection("users").find(true,false).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  }
//file use can use
module.exports = {
        findAll: findAll,
        searchByFname:searchByFname,
        seachByRole : seachByRole,
        searchBYexpired : searchBYexpired


    };
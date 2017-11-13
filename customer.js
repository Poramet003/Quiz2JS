var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
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
        db.collection("customers").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.json(result);  //send to browser
        });
    
}
//file use can use
module.exports = {
        findAll: findAll
    };
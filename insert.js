var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
       {
        "id":6,
         "first_name":"Nan",
         "last_name":"Janjira",
         "expired":"false",
         "role": [
         "admin",
         "user"
         
         ]
     }

];
  db.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
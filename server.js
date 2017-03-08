express = require("express");
var app = express();
var bodyParser = require("body-parser")
app.use(express.static("."));
app.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient , format = require('util').format;

var port = 8000

var response = {};
query = false;
var resultArray;


app.post('/filterData' , function(req , res){

	lowerLimit = parseInt(req.body.lowerLimit);
	upperLimit = parseInt(req.body.upperLimit);

	//The URL to the database will have to be in accordance with the local location of the database.
	MongoClient.connect('mongodb://127.0.0.1:27017/52NorthDump', function(err, db) {
		if(err){
			console.log("DataBase Error : " + err);
			res.send(err);
		}
		else{

			collection = db.collection('tracks');
	
			collection.find({ $and : [ { "length" : {$gt : lowerLimit } } ,  { "length" : {$lt : upperLimit } }  ] } , function(err , cursor){

				if(!err){

					cursor.toArray(function(err , items){
								query = true;
						 		resultArray = items;	

						lowerBound = parseInt(lowerLimit - (.4*lowerLimit));
						upperBound = parseInt(upperLimit + (.4*upperLimit));

						//console.log("upperLimit : " + upperBound)

						//delete all documents outside the specified 
						collection.deleteMany({ $or : [ { "length" : {$lt : lowerBound } } ,  { "length" : {$gt : upperBound } }  ] } , function(err){
							if(!err){

								response.deleted = "Success";
								if(query){
									//console.log("Yess");
									response.result = "Success";
									response.data = resultArray;
								}

							}
							else{
								response.deleted = "Deletion Unsuccessful";
								
							}

										res.send(response);
							
						})


					})
				 	
				}

			})
				
		}
	});

})

app.listen(port , function(){console.log("Connected to port " + port );});

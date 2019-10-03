var fs = require('fs');
var url = require('url');
var express = require('express');
var app = express({ defaultErrorHandler: false });
var bodyParser = require('body-parser');
var najax = require('najax');

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());

// To handle CORS requests
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();

});

// This api uses convential routing (does not map to HTTP verbs). The only advantage is being able to add more helper methods without having to have a separate controller. 
// The ideal naming pattern for HTTP verb mapping is prefixing the methods with GET, POST, PUT, UPDATE. Conventional routing can use this too, but not essential. 

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/cats", function (err, db) {
	if (err) { return console.dir(err); }

	app.post("/auth", function (req, res) {
		// Simple auth
		let email = req.body.login;
		let pass = req.body.pass;
		let users = db.collection('users', function (err, collection) { });
		users.findOne({ email: email, pass: pass }, function (err, item) {
			if (err) {
				// Could pass back to user 
				console.log(error);
			} else {
				if (item != null) {
					res.json(item._id)
				} else {
					res.json('fail');
				}
			}
		});
	})

	app.get("/catsearch/:searchQuery/:userID", function (req, res) {
		const q = req.params.searchQuery;
		const userID = req.params.userID; // not really needed but nice to have 
		najax({
			url: `https://cat-fact.herokuapp.com/facts`,
			type: 'GET',
			dataType: "json",
			crossDomain: true,
			async: true,
			success: function (response) {
				let catFactModelList = [];
				let items = response.all;
				// This api does not support search or filtering so adding simple filters here
				for (const item of items) {
					let text = item.text;
					if (text.includes(q)) {
						let catFactModel = {};
						catFactModel.id = item._id;
						catFactModel.text = item.text;
						catFactModel.isFavorite = false;
						catFactModelList.push(catFactModel);
					} else {
						let id = item._id;
						// Normally this a lookup or a SQL Join if in a db
						if (q.includes(id)) {
							let catFactModel = {};
							catFactModel.id = item._id;
							catFactModel.text = item.text;
							catFactModel.isFavorite = true;
							catFactModelList.push(catFactModel);
						}
					}				 
				}
				res.json(catFactModelList);
			},
			error: function (response) {
				console.log(response);
			}
		})
	})

	app.get("/getcatfavorite/:userID/:catID", function (req, res) {
		const userID = req.params.userID;
		const catID = req.params.catID;
		favorites.findOne({ userID: userID, catID: catID }, function (err, item) {
			if (err) {
				console.log(error);
			} else {
				if (item != null) {
					res.json(item);
				} else {
					res.json('fail');
				}
			}
		})
	})		

	app.post("/addcatfavorite", function (req, res) {
		let item = req.body;
		db.collection("favorites").insertOne(item, function (err, res) {
			if (err) {
				console.log(err);
			} else {
				console.log("1 favorite record inserted");
			}
		})
	})

	app.post("/editcatfavorite", function (req, res) {
		let item = req.body;
		db.collection("favorites").update({factID: req.body.factID, userID: req.body.userID },{$set: {comment: req.body.comment}}, function(err, res) {
			if (err) {
				console.log(err);
			} else {
				console.log("1 favorite record updated");
			}
		})
	})	

	app.post("/removestockfavorite", function (req, res) {
		let item = req.body;
		db.collection("favorites").remove({factID: req.body.factID, userID: req.body.userID}, function (err, res) {
			if (err) {
				console.log(err);
			} else {
				console.log("1 favorite record removed");
			}
		})
	})		

	app.get("/catlistfavorites/:userID", function (req, res) {
		const userID = req.params.userID;
		db.collection('favorites').find({userID: userID}).toArray((err, items) => {
			if (err) { 
				console.log(error);
			} else {
				if (items != null) {
					res.json(items);
				} else {
					res.json('fail');
				}
			}
		})
	})	

	app.listen(3002, function () {

	});

})


var mongoose = require("mongoose");
var champSchema = require("./champ.js").schema;

var teamSchema = new mongoose.Schema({

	name: String,
	userId: String,
	champ: [],
	stats: {}

});

module.exports = mongoose.model("teamSchema", teamSchema);
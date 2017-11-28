const app =  require("../app.js");
const links = require("./links.js");
const download = require("./download.js");
const games = require("./games.js");
const util = require("./util.js");

exports.ver = function(game, onSuccess, onError) {

	//function(url, onUpdate, onFinish, onError) {

	var base = game.packagerLink;
	var params = [
		"do", "ver",
		"uv", app.CORE_VER
	];
	var url = links.constructUrl(base, params);

	console.log("Fetching version number");
	console.log(url);
	download(url, 
		null, 
		(progress, total, body) => {
			onSuccess(body);
		},
		(err) => {
			if (onError)
				onError(err);
		}
	);

}

exports.validate = function(user, pass, onSuccess, onError) {

	var encodedPassword = util.encodePassword(pass);
	console.log("Encoded password: " + encodedPassword);

	var base = games.WOW.packagerLink;
	var params = [
		"do", "validate",
		"uv", app.CORE_VER,
		"user", user,
		"pass", encodedPassword
	];

	var url = links.constructUrl(base, params);

	console.log("Validating user/pass");
	console.log(url);
	download(url, 
		null, 
		(progress, total, body) => {
			onSuccess(body);
		},
		(err) => {
			if (onError)
				onError(err);
		}
	);
}

console.log("packager.js loaded");
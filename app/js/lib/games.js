const links = require("./links.js");

exports.WOW = {
	name: "World of Warcraft",
	abbrev: "wow",
	packagerLink: links.SERVER_CONTENT + "/updater/packager.php",
	imagePath: "./src/images/wow_icon.png"
}

exports.ESO = {
	name: "The Elder Scrolls Online",
	abbrev: "eso",
	packagerLink: links.SERVER_CONTENT + "/updater_eso/packager.php",
	imagePath: "./src/images/eso_icon.png"
}
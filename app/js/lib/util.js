let b64 = require("base-64");
let urlencode = require("urlencode");

exports.base64Encode = function(str) {
	console.log(str + ", encoded=" + b64.encode(str));
	return b64.encode(str);
}

exports.base64Decode = function(str) {
	return b64.decode(str);
}


exports.urlEncode = function(str) {
	return urlencode.encode(str);
}

exports.urlDecode = function(str) {
	return urlencode.decode(str);
}

exports.encodePassword = function(password) {
	var prefix = "Q%C3%B6";
	var suffix = exports.urlEncode(exports.base64Encode(password));

	return prefix + suffix;
}

exports.rgbToHex = function(rgb) {
	if (  rgb.search("rgb") == -1 ) {
		return rgb;
	} else {
		rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
		function hex(x) {
			return ("0" + parseInt(x).toString(16)).slice(-2);
		}
		return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]); 
	}
}

console.log("util.js loaded");
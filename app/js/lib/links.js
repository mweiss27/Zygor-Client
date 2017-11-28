exports.SERVER = "http://zygorguides.com";
exports.SERVER_CONTENT = "http://content.zygorguides.com";

exports.constructUrl = function(base, vars) {
	var result = base;
	if (vars.length > 0) {
		if (vars.length % 2 != 0) {
			console.log("[ERROR] vars must be % 2");
			return null;
		}
		result += "?";
		for (var i = 0; i < vars.length; i+=2) {
			var key = vars[i];
			var val = vars[i+1];

			if (!result.endsWith("?"))
				result += "&";

			result += key + "=" + val;
		}
	}
	return result;
}
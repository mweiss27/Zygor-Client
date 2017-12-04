const packager = require("./js/lib/packager.js");

let forgotPasswordUrl = "http://zygorguides.com/members/password-reset.php";
let signupUrl = "http://zygorguides.com/members/signup-elite";

const {shell} = require("electron");

$(function() {
	$("#login-login").on("click", () => {
		//user, pass, onSuccess, onError
		var user = $("#login-username-textbox").val();
		var pass = $("#login-password-textbox").val();

		var onSuccess = function(response) {
			loadView("./html/client/client.html");
		};

		var onError = function(response, responseCode) {
		};

		//packager.validate(user, pass, onSuccess, onError);
		loadView("./html/client/client.html");
	});

	$("#login-forgot").on("click", () => {
		shell.openExternal(forgotPasswordUrl);
	});

	$("#login-signup").on("click", () => {
		shell.openExternal(signupUrl);
	});

	$("#login-exit").on("click", () => {
		require("electron").remote.getCurrentWindow().close();
	});

	// $("#login-login").click();

});
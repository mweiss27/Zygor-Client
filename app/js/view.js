
const app = require("./js/app");

/*
    Loads the file at the given path into the shell's container.
    This should be a top-level view. i.e. Login, Client
*/
function loadView(path) {
	$("#container").load(path);
}

function load(file, container) {
    $.ajax({
        url: file,
        dataType: "text",
        success: function(contents) {
            $(container).append(contents);
        }
    });
}

$(function() {

	loadView("./html/login/loginview.html");

	console.log("zgcore.js loaded");

    $(".dropdown-toggle").dropdown();
});

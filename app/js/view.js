
const app = require("./js/app");

/*
    Loads the file at the given path into the shell's container.
    This should be a top-level view. i.e. Login, Client
*/
function loadView(path) {
	$("#container").load(path);
}

function load(file, container, onSuccess) {
    $.ajax({
        url: file,
        dataType: "text",
        success: function(contents) {
            if (container) {
                $(container).append(contents);
            }
            
            if (onSuccess)
                onSuccess(contents);
        }
    });
}

$(function() {

	loadView("./html/login/loginview.html");

	console.log("zgcore.js loaded");
});


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

function showModal(id) {
    console.log("showModal(" + id + ")");
    $("body, #container, #" + id + ", #zmodal-background").toggleClass("active");
}

function hideModal() {
    $("body, #container, .zmodal, #zmodal-background").toggleClass("active");
}

$(function() {

	loadView("./html/login/loginview.html");

    load("./html/modals/changelog.html", "", (contents) => {
        $(contents).insertAfter("#zmodal-background");
        //showModal("zmodal-changelog");
    });

    $(document).on("click", "#zmodal-background, .zmodal-close", () => {
        hideModal();
    });

	console.log("zgcore.js loaded");
});

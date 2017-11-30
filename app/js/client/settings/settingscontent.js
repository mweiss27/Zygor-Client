function getGame(target) {
	var child = $(target).parents("[data-game]").first();
	var game = child.attr("data-game");

	return game;
}

function addInstallationDirectoryClicked(game) {
	alert("Add Installation Directory -- Game: " + game);
}

$(function() {


    $(document).on("mouseenter", ".settings-addInstallation", function(e) {
        $(e.currentTarget).find("label").addClass("labelHovered");
    });

    $(document).on("mouseleave", ".settings-addInstallation", function(e) {
        $(e.currentTarget).find("label").removeClass("labelHovered");
    });

    $(document).on("click", ".settings-addInstallation", function(e) {
    	var game = getGame(e.target);

		addInstallationDirectoryClicked(game);
    });

});
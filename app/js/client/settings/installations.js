$(function() {

	function addInstallationDirectory(game, path) {
		load("./html/client/settings/tabs/templates/installations-directory-template.html", null, (contents) => {
			var jq = $.parseHTML(contents);

			$(jq).find(".settings-installations-directory-index").html("1.");
			$(jq).find(".settings-installations-directory-path").attr("value", path);

			$("#settings-installations-" + game.toLowerCase()).append($(jq).prop("outerHTML"));
		});
	}

	addInstallationDirectory("wow", "C:/Program Files (x86)/World of Warcraft");

});
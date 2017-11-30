const games = require("./js/lib/games.js");
const util = require("./js/lib/util.js");

const statusButtonOrangeBackground = "#ff6000";
const statusButtonOrangeBackgroundH = "#ffA000";

$(function() {
	//initHoverHighlights();


	$("#productsview-actions span").hover(
		(e) => { $(e.currentTarget).find("label").addClass("labelHovered"); },
		(e) => { $(e.currentTarget).find("label").removeClass("labelHovered"); }
	);

	$(".statusButton").hover(
		(e) => {
			var ele = $(e.currentTarget);
			var background =  util.rgbToHex(ele.css("background-color"));

			if (background === "#ff6000")
				ele.css("background-color", "#ffa000");
			else if (background === "#484848")
				ele.css("background-color", "#646464");

		},
		(e) => {
			var ele = $(e.currentTarget);
			var background =  util.rgbToHex(ele.css("background-color"));

			if (background === "#ffa000")
				ele.css("background-color", "#ff6000");
			else if (background === "#646464")
				ele.css("background-color", "#484848");
		}
	);


});

function initHoverHighlights() {
	function hin() {
		var e = $(this);
		var next = e.next();

		next.addClass("labelHovered");

	}

	function hout() {
		var e = $(this);
		var next = e.next();

		next.removeClass("labelHovered");
	}

	$("#productsview-actions img").hover(hin, hout);
}

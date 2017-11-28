$(function() {

    function toggle() {
        var currentlyMain = $("#bottombar-icon-settings").css("display") !== "none";

        var mainDisplay = currentlyMain ? "none" : "block";
        var settingsDisplay = currentlyMain ? "block" : "none";

        // Toggle settings icon
        $("#bottombar-icon-settings").css("display", mainDisplay);
        $("#bottombar-icon-back").css("display", settingsDisplay);

        // Load settings
        $("#overview-container").css("display", mainDisplay);
        $("#settings-menu").css("display", settingsDisplay);

        $("#productsview-container").css("display", mainDisplay);
        $("#settings-content").css("display", settingsDisplay);

    }

    $("#bottombar-icon-settings").on("click", function() {
        toggle();
    });

    $("#bottombar-icon-back").on("click", function() {
        toggle();
    });

    //$("#bottombar-icon-settings").click();

    console.log("bottombar.js loaded");
});


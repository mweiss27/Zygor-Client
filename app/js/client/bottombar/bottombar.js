$(function() {

    $("#bottombar-icon-settings").on("click", function() {
        // Defined in client.js
        toSettings();
    });

    $("#bottombar-icon-back").on("click", function() {
        // Defined in client.js
        back();
    });

    console.log("bottombar.js loaded");
});


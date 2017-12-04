var headerFileMap = {
    "settingsTabGeneral": "general.html",
    "settingsTabAccount": "account.html",
    "settingsTabInstallations": "installations.html",
    "settingsTabTrendData": "trenddata.html",
    "settingsTabUpdates": "updates.html",
    "settingsTabNotifications": "notifications.html",

};

$(function() {

    function onHeaderChange(selectedHeader) {
        if (selectedHeader) {
            if (selectedHeader.toLowerCase() === "guides") {
                // Defined in client.js
                toGuides();
            }
            else if (selectedHeader.toLowerCase()  === "news") {
                // Defined in client.js
                toNews();
            }
        }
    }

    $(".topbar-header").on("click", function() {

        var current = $(this).attr("data-selected");
        var wasntSelected = current == null || current == "false";

        $(".topbar-header").attr("data-selected", "false");

        $(this).attr("data-selected", "true");

        if (wasntSelected) {
            onHeaderChange($(this).html());
        }

    });

    $("#main-topbar-close").on("click", function() {
        require("electron").remote.getCurrentWindow().close();
    });

    var first = $(".topbar-header").first();
    first.attr("data-selected", "true");
    onHeaderChange(first.html());

    console.log("topbar.js loaded");

    $("#main-topbar-logo").on("click", function() {
        require("electron").remote.getCurrentWindow().reload();
    });

});
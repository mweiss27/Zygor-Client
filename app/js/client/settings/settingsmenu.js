var tabFileMap = {
    "settingsTabGeneral": "general.html",
    "settingsTabAccount": "account.html",
    "settingsTabInstallations": "installations.html",
    "settingsTabTrendData": "trenddata.html",
    "settingsTabUpdates": "updates.html",
    "settingsTabNotifications": "notifications.html",

};

var headerContentMap = { 
    "settingsTabGeneral": "settingsContentGeneral",
    "settingsTabAccount": "settingsContentAccount",
    "settingsTabInstallations": "settingsContentInstallations",
    "settingsTabTrendData": "settingsContentTrendData",
    "settingsTabUpdates": "settingsContentUpdates",
    "settingsTabNotifications": "settingsContentNotifications",
};

$(function() {

    for (var tabId in tabFileMap) {
        var html = tabFileMap[tabId];
        load("./html/client/settings/tabs/" + html, "#settings-content", () => {
            $("select").selectize({
                create: true
            });
        });
    }

    function selectTab(tabId) {
        console.log("selectTab: " + tabId);
        $(".settings-tab-content").css("display", "none");

        var contentId = headerContentMap[tabId];
        console.log("contentId: " + contentId);
        if (typeof(contentId) !== "undefined") {
            $("#" + contentId).css("display", "block");
        }
        else
            console.log("undefined")
    }

    $(".settingsTab").on("click", function() {

        var current = $(this).attr("data-selected");
        var wasntSelected = current == null || current == "false";

        $(".settingsTab").attr("data-selected", "false");

        $(this).attr("data-selected", "true");
        
        if (wasntSelected) {
            selectTab($(this).attr("id"));
        }

    });

    var first = $(".settingsTab").first();
    first.attr("data-selected", "true");
    selectTab(first.attr("id"));

});
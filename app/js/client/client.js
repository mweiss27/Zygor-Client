/*

        // Toggle settings icon
        $("#bottombar-icon-settings").css("display", mainDisplay);
        $("#bottombar-icon-back").css("display", settingsDisplay);

        // Load settings
        $("#overview-container").css("display", mainDisplay);
        $("#settings-menu").css("display", settingsDisplay);

        $("#productsview-container").css("display", mainDisplay);
        $("#settings-content").css("display", settingsDisplay);
*/

var lastLeft; // Left panel
var lastCenter; // Main display
var lastIcon; // Bottom-right icon


    /*
        
        // Load settings
        $("#overview-container").css("display", mainDisplay);
        $("#settings-menu").css("display", settingsDisplay);

        $("#productsview-container").css("display", mainDisplay);
        $("#settings-content").css("display", settingsDisplay);

    */


function hideAll() {
    $("#client-content-left > *").css("display", "none");
    $("#client-content-center > *").css("display", "none");
    $("#bottombar-bottomright > *").css("display", "none");
}

function setLast() {
    lastLeft = $("#client-content-left > *:visible").attr("id");
    lastCenter = $("#client-content-center > *:visible").attr("id");
    lastIcon = $("#bottombar-bottomright > *:visible").attr("id");
}

function toSettings() {
    setLast();
    hideAll();

    $("#settings-menu").css("display", "block");
    $("#settings-content").css("display", "block"); 
    $("#bottombar-icon-back").css("display", "block");
}

function toNews() {
    hideAll();

    $("#ads-container").css("display", "block");
    $("#news-container").css("display", "block");
    $("#bottombar-icon-settings").css("display", "block");
}

function toGuides() {
    hideAll();

    $("#overview-container").css("display", "block");
    $("#productsview-container").css("display", "block");
    $("#bottombar-icon-settings").css("display", "block");
}

function back() {
    hideAll();

    $("#" + lastLeft).css("display", "block");
    $("#" + lastCenter).css("display", "block");
    $("#" + lastIcon).css("display", "block");
}

$(function() {


    load("./html/client/topbar/topbar.html", "#client-topbar");
    
    load("./html/client/main/accountoverview.html", "#client-content-left");
    load("./html/client/settings/settingsmenu.html", "#client-content-left");
    load("./html/client/ads/ads.html", "#client-content-left");

    load("./html/client/main/productsview.html", "#client-content-center");
    load("./html/client/settings/settingscontent.html", "#client-content-center");
    load("./html/client/news/news.html", "#client-content-center");

    load("./html/client/bottombar/bottombar.html", "#client-bottombar");
});

console.log("client.js loaded");
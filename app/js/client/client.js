
$(function() {


    load("./html/client/topbar/topbar.html", "#client-topbar");
    
    load("./html/client/main/accountoverview.html", "#client-content-left");
    load("./html/client/settings/settingsmenu.html", "#client-content-left");

    load("./html/client/main/productsview.html", "#client-content-center");
    load("./html/client/settings/settingscontent.html", "#client-content-center");

    load("./html/client/bottombar/bottombar.html", "#client-bottombar");
});

console.log("client.js loaded");
$(function() {

    /*
        Realm = {
            locale: [US, EU, TW, KR, XX],
            display,
            slug,
            current,
            latest

        }
    */
    var realms = [];

    // Adds or updates a given realm
    function setRealm(realm) {
        var addedRealmsRows = $("#settings-trenddata-realms .row").not("#settings-trenddata-realms-header");

        var addedSlugs = addedRealmsRows.toArray().map(e => $(e).attr("data-slug"));

        if (addedSlugs.includes(realm.slug)) {
            var existingRow = addedRealmsRows.toArray().filter(e => $(e).attr("data-slug") === realm.slug)[0];
            if (existingRow) {
                $(existingRow).find(".display").html(`[${realm.locale.toUpperCase()}] ${realm.display}`);
                $(existingRow).find(".current").html(realm.current);
                $(existingRow).find(".latest").html(realm.latest);
            }
            else
                alert("We found a row with this slug, but couldn't find the row element");
        }
        else {
            load("./html/client/settings/tabs/templates/trend-data-realm-template.html", "", function(contents) {
                var ele = $($.parseHTML(contents))[0];
                $(ele).attr("data-slug", realm.slug);
                $(ele).find(".display").html(`[${realm.locale.toUpperCase()}] ${realm.display}`);
                $(ele).find(".current").html(realm.current);
                $(ele).find(".latest").html(realm.latest);

                $("#settings-trenddata-realms").append($(ele).prop("outerHTML"));
            });
        }
    }


    var stormrage = {
        locale: "US",
        display: "Stormrage",
        slug: "stormrage",
        current: "Nov 30, 2017 1:43PM",
        latest: "Nov 30, 2017 1:43PM"
    };

    var illidan = {
        locale: "US",
        display: "Illidan",
        slug: "illidan",
        current: "Nov 29, 2017, 11:59PM",
        latest: "Nov 29, 2017, 11:59PM"
    };

    setRealm(stormrage);
    setRealm(illidan);
});
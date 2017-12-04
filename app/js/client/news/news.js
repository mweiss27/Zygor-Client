/*
<div class="container-fluid news-entry">
    <div class="row">
        <div class="news-entry-date col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label>Tuesday, May 30th</label>
        </div>
    </div>
    <div class="row">
        <div class="news-entry-img col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img draggable="true" />
        </div>

        <div class="news-entry-content col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <label class="news-entry-title" />
            <label class="news-entry-body" />
        </div>

    </div>
</div>
*/

function addNewsEntry(date, imageUrl, title, body) {
    load("./html/client/news/news-entry-template.html", null, (contents) => {
        var jq = $.parseHTML(contents);

        $(jq).find(".news-entry-date label").html(date);
        $(jq).find(".news-entry-img img").attr("src", imageUrl);
        $(jq).find(".news-entry-content .news-entry-title").html(title);
        $(jq).find(".news-entry-content .news-entry-body").html(body);

        $("#news-container").append($(jq).prop("outerHTML"));
    });
}

$(function() {

    // Hardcode some news entries for display

    addNewsEntry(
        "TUESDAY, NOV 28TH",
        "https://cdn.blizzardwatch.com/wp-content/uploads/2017/09/Antorus_load_screen_header.jpg",
        "Antorus, The Burning Throne Raid Guide Now Available!",
        "A new update is available (Version 6.0.17108) ad adds in a guide for the new raid \"Antorus, The Burning Throne\" that opened today (tomorrow for EU players). You will need to be a Zygor Elite member, or own the standalone Legion version of the Dungeons and Gear guide"
    );

    addNewsEntry(
        "TUESDAY, MAY 30TH", 
        "https://cdn.blizzardwatch.com/wp-content/uploads/2017/07/Not-Antorus-Header-WoW.jpg",
        "Legionfall Campaign Week 10 \"Championing Our Cause\" Guide Now Available!",
        "A new update is available that adds in this weeks new content for the Legionfall campaign"
    );

    addNewsEntry(
        "THURSDAY, MAY 4TH",
        "https://img00.deviantart.net/c14f/i/2011/125/8/0/happy_children__s_week_everyone_by_mullinsthegreat-d3fmazh.png",
        "Zygor's In-Game Event Guide For Children's Week 2017",
        "Zygor's in-game guide for the 2017 version of the Children's Week event has been updated and is rolling out now to Zygor Elite members."
    );

    addNewsEntry(
        "TUESDAY, APRIL 25TH",
        "http://zygorguides.com/images/home/screen_viewer_1.png",
        "Path 7.2 Content Released To Stable Build (And Beta Changes)",
        "A new update is available (Version 6.1.15770) that adds in most of the content for Path 7.2 to our live/stable build. We're also making some changes to the way our beta guides program is handled."
    );

});
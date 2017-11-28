$(function() {

    function onTabChange(selected) {
    }

    $(".settingsTab").on("click", function() {

        var current = $(this).attr("data-selected");
        var wasntSelected = current == null || current == "false";

        $(".settingsTab").attr("data-selected", "false");

        $(this).attr("data-selected", "true");
        
        if (wasntSelected) {
            onTabChange($(this).find("label").html());
        }

    });

    var first = $(".settingsTab").first();
    first.attr("data-selected", "true");
    onTabChange(first.find("label").html());

});
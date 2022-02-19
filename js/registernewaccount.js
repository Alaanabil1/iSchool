$(".mobile-header .menu").click(function() {
    $(".mobile-header .menucontainer").show("blind", { direction: "right" });
})
$(".mobile-header .close").click(function() {
    $(".mobile-header .menucontainer").hide("blind", { direction: "right" });
})
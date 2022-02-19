$(".mobile-header .menu").on('click', function(e) {
    e.preventDefault();
    $(".mobile-header .menucontainer").animate({
        right: 0

    }, 100)

})
$(".mobile-header .close").click(function() {

    $(".mobile-header .menucontainer").animate({
        right: "-90%"

    }, 100)
})
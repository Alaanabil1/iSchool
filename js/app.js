

$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('.number1').jQuerySimpleCounter({end: 8,duration: 3000});
$('.number2').jQuerySimpleCounter({end: 100,duration: 3000});
$('.number3').jQuerySimpleCounter({end: 300,duration: 2000});
$('.number4').jQuerySimpleCounter({end: 400,duration: 2500});
$('.number5').jQuerySimpleCounter({end: 5,duration: 2400});
$(".mobile-header .menu").click(function() {
    $(".menucontainer").show("blind", { direction: "right" });
})
$(".menucontainer .close").click(function() {
    $(".menucontainer").hide("blind", { direction: "right" });
})


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:1,
    autoplay:true,
autoplayTimeout:4000,
autoplayHoverPause:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
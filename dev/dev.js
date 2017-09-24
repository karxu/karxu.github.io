var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
    
    $window.scroll(function(e){
        if ($window.scrollTop() < pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};

$('#nav').followTo(1100);

// $('body').scrollspy({ target: '#nav' });

$("#button_about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#button_morningstar").click(function() {
    $('html, body').animate({
        scrollTop: $("#morningstar").offset().top
    }, 1000);
});

$("#button_pickupp").click(function() {
    $('html, body').animate({
        scrollTop: $("#pickupp").offset().top
    }, 1000);
});

$("#button_tt").click(function() {
    $('html, body').animate({
        scrollTop: $("#tt").offset().top
    }, 1000);
});

$("#button_flex").click(function() {
    $('html, body').animate({
        scrollTop: $("#flex").offset().top
    }, 1000);
});

$("#button_gt").click(function() {
    $('html, body').animate({
        scrollTop: $("#gt").offset().top
    }, 1000);
});

$("#button_design").click(function() {
    $('html, body').animate({
        scrollTop: $("#design").offset().top
    }, 1000);
});

$("#button_contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 1000);
});

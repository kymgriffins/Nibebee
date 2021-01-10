$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");

    }
});
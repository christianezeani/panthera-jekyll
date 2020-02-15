// var input_lang = $("#input_lang").val();
// localStorage.set("lang", input_lang)
// console.log(input_lang);

// Hide Header on on scroll down
var didScroll = false;
var lastScrollTop = 0;
var delta_nav_up = 10;
var delta_nav_down = 100;

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 10);

function hasScrolled() {
    var navbarHeight = $('header').outerHeight();
    var st = $(this).scrollTop();    

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop
        && Math.abs(lastScrollTop - st) >= delta_nav_up) {
        // Scroll Down        
        $('header').removeClass('nav-down').addClass('nav-up');

        lastScrollTop = st;
    }
    else if ((st < lastScrollTop
        && Math.abs(lastScrollTop - st) >= delta_nav_down) 
        || st == 0) {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }

        lastScrollTop = st;
    }
}
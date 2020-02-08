// var input_lang = $("#input_lang").val();
// localStorage.set("lang", input_lang)
// console.log(input_lang);

// Hide Header on on scroll down
var didScroll = false;
var lastScrollTop = 0;
var delta = 100;

$(window).scroll(function(event){
    didScroll = true;    
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 10);

function hasScrolled() {    
    var navbarHeight = $('header').outerHeight();
    var st = $(this).scrollTop();
        
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta) {        
        return;
    }        
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down        
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {        
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
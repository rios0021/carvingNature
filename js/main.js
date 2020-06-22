$(window).on('load', function () {
    removeLoader();
    // setTimeout(removeLoader, 3000);
});

window.onscroll = function () { scrollFunction() };

function removeLoader() {
    $("#pre-loader").fadeOut( "slow" );

}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $('nav').addClass('scrolled');
        $('#navLogo').removeClass('logo-default');
        $('#navLogo').addClass('logo-small');
    } else {
        $('nav').removeClass('scrolled');
        $('#navLogo').addClass('logo-default');
        $('#navLogo').removeClass('logo-small');
    }
}
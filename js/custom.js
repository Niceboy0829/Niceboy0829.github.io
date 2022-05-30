$(document).ready(function() {
    $('.icon-bar').click(function() {
        $('.right.content').toggleClass('nav-show')
    });
    $('.button-edit a').click(function() {
        $('.right.content').removeClass('nav-show')
    });

});
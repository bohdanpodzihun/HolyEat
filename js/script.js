let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    return false;
});

$('.menuBurger').click(function() {
    $('.menuMBL').toggle(500);
    $(this).toggleClass('close');
});
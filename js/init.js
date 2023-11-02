$(function () {

    let isTouchDevice = window.matchMedia("(pointer:coarse)").matches;

    $('body').addClass(isTouchDevice ? 'is-touch-device' : '')
        .addClass(isTouchDevice ? (navigator.userAgent.match(/iPad/g) ? 'is-tablet' : 'is-mobile') : '');

    fetch('header.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.querySelector('nav').innerHTML = data;
            // if (document.querySelector('nav').classList.contains('dark-top-logo')) {
            //     document.querySelector('.top-image').src = '/images/logos/LH Title Horizontal - Black/LH%20Title%20Horizontal%20-%20Black.png';
            // }

            setLink('.header-container');
        });

    fetch('footer.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.querySelector('footer').innerHTML = data;

            setLink('.footer-container');
        });

});

function setLink(selector) {
    $(selector + ' .nav-link-dynamic').each(function () {
        let path = $(this).attr('href');
        let currentPagePath = window.location.pathname;
        if (currentPagePath == path) {
            $(this).attr('href', '#');
            $(this).append('<span class="sr-only"> (current)</span>');
        } else {
            $(this).attr('href', path);
        }
    });
}

$(function () {
    $('.first-view .slide-item').vegas({
        slides: [
            { src: 'img/firstview/firstview1.jpg' },
            { src: 'img/firstview/firstview2.jpg' },
            { src: 'img/firstview/firstview3.jpg' }
        ],
        transition: 'blur',
        delay: 10000,
        transitionDuration: 2000,
        timer: false,
    });
});
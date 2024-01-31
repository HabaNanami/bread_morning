$(function () {
    if ($('body').hasClass('bread-page')) {
        $('body').addClass('appear');
    }

    $('.hamburger-menu').on('click', function () {
        if ($('header').hasClass('open')) {
            $('header').removeClass('open');
        } else {
            $('header').addClass('open');
        }
    });
    $('.site-link ul li a').on('click', function () {
        $('header').removeClass('open');
    });

    $('a[href^="#"]').on('click', function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let pos = target.offset().top;
        $("html, body").animate({ scrollTop: pos }, 600, "swing");
        return false;
    });
});

$(function () {
    setInterval(function () {
        let count = $('.green').text();

        if (count < 3) {
            count++;
            $('.green').text(count);
        } else if (count = 3) {
            count = 1;
            $('.green').text(count);
        };

    }, 11000);
});

const header = document.querySelector('header');
let prevPos = window.scrollY;

window.addEventListener('scroll', () => {
    const currentPos = window.scrollY;

    if (currentPos < prevPos) {
        header.classList.remove('hidden');
    } else {
        if (currentPos > 500) {
            header.classList.add('hidden');
        }
    }
    prevPos = currentPos;
});

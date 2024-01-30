// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(splash_ber, {
    strokeWidth: 1.2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#2f6e65',
    trailColor: '#eee',
    trailWidth: 1.2,
    svgStyle: { width: '100%', height: '100%' },
    text: {
        style: {
            'font-size': '16px',
            color: '#2f6e65',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});

//アニメーションスタート
bar.animate(1.0, function () {
    $(".splash").delay(500).fadeOut(10, function () {
        $('body').addClass('appear');
    });
});

if (sessionStorage.getItem('access')) {
    $('.splash').addClass('is-active');
    $('body').addClass('appear');
} else {
    sessionStorage.setItem('access', 'true');
};
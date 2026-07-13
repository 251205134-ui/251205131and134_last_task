$(function () {
    $('.toggle-menu-button').on('click', function () {
        $('.header-site-menu').toggleClass('is-show');
    });

    // ランダムなきらめき星を hero に生成
    var $twinkles = $('.twinkles');
    if ($twinkles.length) {
        var count = 40;
        for (var i = 0; i < count; i++) {
            var top = Math.random() * 100;
            var left = Math.random() * 100;
            var delay = (Math.random() * 3).toFixed(2);
            $('<span></span>')
                .css({
                    top: top + '%',
                    left: left + '%',
                    animationDelay: delay + 's'
                })
                .appendTo($twinkles);
        }
    }
});

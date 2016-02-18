$(function() {
    var img = $('img');
    var tracker = new tracking.ObjectTracker('face');

    img.wrap('<div class="img-container"></div>');

    img.each(function(i) {
        tracking.track(img[i], tracker);
    });

    tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
            trumpify(rect.x, rect.y, rect.width, rect.height);
        });
    });

    $(window).on('resize', function() {
        img.each(function(i) {
            tracking.track(img[i], tracker);
        });
    });

    function trumpify(x, y, w, h) {
        $('.hair').remove();
        var rect = $('<img src="../img/hair.png" class="hair">');
        rect.css('width', w + 20 + 'px');
        rect.css('left', (img[0].offsetLeft + x - 10) + 'px');
        rect.css('top', (img[0].offsetTop + y - 50) + 'px');
        $('.img-container').append(rect);
    }
});

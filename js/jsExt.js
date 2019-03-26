(function() {
    var ev = new $.Event('style'),
        orig = $.fn.css;
    $.fn.css = function() {
        $(this).trigger(ev);
        return orig.apply(this, arguments);
    }
})();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};
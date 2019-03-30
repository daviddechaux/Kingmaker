// https://stackoverflow.com/questions/2157963/is-it-possible-to-listen-to-a-style-change-event
(function() {
    var ev = new $.Event('style'),
        orig = $.fn.css;
    $.fn.css = function() {
        $(this).trigger(ev);
        return orig.apply(this, arguments);
    }
})();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

// http://pietschsoft.com/post/2008/01/14/JavaScript-intTryParse-Equivalent
function tryParseInt(str, defaultValue) {
    if(str !== null && str != undefined && !isNaN(str)) {
        return parseInt(str);
    }
    
    return defaultValue;
}
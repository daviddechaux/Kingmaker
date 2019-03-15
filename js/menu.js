function displayMapOpenner(){
    var menu = $(".openOrCreateMap");
    menu.removeClass("hide");

    var offsetHeight = $(".openOrCreateMap").height() / 2;
    var offsetWidth = $(".openOrCreateMap").width() / 2;

    var width = window.innerWidth / 2;
    var height = window.innerHeight / 2;

    var offsetX = window.scrollX;
    var offsetY = window.scrollY;

    menu.css('left', width + offsetX - offsetWidth + 'px');
    menu.css('top', height + offsetY - offsetHeight + 'px');
    
    menu.css('bottom', '0px');
    menu.css('right', '0px');
    menu.css('margin', 'auto');
};

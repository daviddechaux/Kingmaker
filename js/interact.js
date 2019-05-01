function dragAndDrop(){
    interact('.draggable')
        .draggable({
            autoScroll: true,
            onmove: dragMoveListener
        });
};

function tapTarget(){
    interact('.tap-target')
        .on('tap', function (event) {
            interactWithElement(event);
            event.preventDefault();
        })
};

function interactWithElement(event){
    idSelectedElement = event.currentTarget.id;
    $(event.currentTarget).addClass("draggable inFront");

    var pos = getEditMenuPosition(event.currentTarget, true);
    $(".editMapDecoration").css("top", pos.top);
    $(".editMapDecoration").css("left", pos.left);
    
    $(".editMapDecoration").show();
    $(".editorBackground").show();

    var obj = htmlToObject($(event.currentTarget));
    $("#titleMapDecoration").val(obj.title);

    var indexType = ddElementType.find( e => e.text.toLowerCase() === obj.elementType.toLowerCase()).value;
    $('#editDecorationDdlType').ddslick('select', {index: indexType });
    var index = ddElement.find( e => e.userClass.toLowerCase() === obj.img.toLowerCase()).value;
    
    $('#editDecorationDdl').ddslick('select', {index: index });
    $("#decorationToChange").val(idSelectedElement);

    var currentFaction = $(event.currentTarget).data("faction");

    displayDropDownFaction($("#editDecorationDdlFaction"), currentFaction);
};

function getEditMenuPosition(el, useOffset, useTranlate){
    var offset = 0, x = 0, y = 0;

    if (useOffset){
        offset = $(el).height()
    }

    if(useTranlate){
       y = tryParseInt(el.attr("data-y"), 0);
       x = tryParseInt(el.attr("data-x"), 0);
    }

    return { top : (parseInt($(el)[0].style["top"].replace("px", "")) + offset + y) + "px",
            left : (parseInt($(el)[0].style["left"].replace("px", "")) + offset + x) + "px"};
};

function dragMoveListener(event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    var translate = 'translate(' + x + 'px, ' + y + 'px)';
    target.style.webkitTransform = translate;
    target.style.transform = translate;

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
};

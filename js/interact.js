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
    interact('.fog')
        .on('tap', function (event) {
            interactWithFog(event)
            event.preventDefault();
        })
};

function interactWithFog(event){
    var element = $("#" + event.currentTarget.id);

    if (element.hasClass("visited")){
        element.removeClass("visited");
        element.attr( "title", "Click to remove");
    }
    else{
        element.addClass("visited");
        element.attr( "title", "Click to add");
    }
};


function interactWithElement(event){
    idSelectedElement = event.currentTarget.id;
    $(event.currentTarget).addClass("draggable inFront");

    var pos = getEditMenuPosition(event);
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

    displayDropDownFaction($("#editDecorationDdlFaction"));
};

function getEditMenuPosition(event){
    var offset = $(event.currentTarget).height()
    return { top : (parseInt($(event.currentTarget)[0].style["top"].replace("px", "")) + offset) + "px",
            left : (parseInt($(event.currentTarget)[0].style["left"].replace("px", "")) + offset) + "px"};
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

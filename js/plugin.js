function tooltip() {
    $('.tooltip').tooltipster();
};

function tooltipOne(id) {
    $('#' + id).tooltipster();
};

function dragAndDrop(){
    interact('.draggable')
        .draggable({
            autoScroll: true,
            onmove: dragMoveListener
        });
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
    var name = $(event.currentTarget)[0].attributes["name"].value;
    var element = document.getElementsByName(name)[0];
    var obj = htmlToObject(element);
    
    idSelectedElement = event.currentTarget.id;

    $(event.currentTarget).addClass("draggable inFront");

    $(".editMapDecoration").css("top", parseInt(obj.top) + element.clientHeight + "px");
    $(".editMapDecoration").css("left", parseInt(obj.left) + element.clientWidth + "px");
    
    $(".editMapDecoration").show();
    $(".editorBackground").show();

    $("#nameMapDecoration").val(name);
    $("#titleMapDecoration").val(obj.title);
    $("#decorationToChange").val(event.currentTarget.id);
};

function displayNiceDropdownList(){
    //$("#decorationDdlType").ddslick('destroy');
    $("#decorationDdlType").ddslick({
        data: ddElementType,
        selectText: "Select element type"
    });

    //$("#decorationDdl").ddslick('destroy');
    $("#decorationDdl").ddslick({
        height: 300,
        data: ddElement,
        selectText: "Select an icon"
    });
};

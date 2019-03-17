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
            // call this function on every dragmove event
            onmove: dragMoveListener
        });
};

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

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
            var element = document.getElementsByName(event.currentTarget.name)[0];
            var obj = htmlToObject(element);
            
            idSelectedElement = event.currentTarget.id;

            $("#" + event.currentTarget.id).addClass("draggable inFront");
            dragAndDrop();

            $(".editMapDecoration").css("top", parseInt(obj.top) + element.clientHeight + "px");
            $(".editMapDecoration").css("left", parseInt(obj.left) + element.clientWidth + "px");
            
            $(".editMapDecoration").show();
            $(".editorBackground").show();
            $("#nameMapDecoration").val(event.currentTarget.name);
            $("#titleMapDecoration").val(event.currentTarget.alt);

            $("#decorationToChange").val(event.currentTarget.id);

            event.preventDefault();
        })
    interact('.fog')
        .on('tap', function (event) {
            $("#" + event.currentTarget.id).addClass("visited");
            event.preventDefault();
        })
};


function displayNiceDropdownList(){
    $("#decorationDdlType").ddslick('destroy');
    $("#decorationDdlType").ddslick({
        data: ddElementType,
        selectText: "Select element type"
    });

    $("#decorationDdl").ddslick('destroy');
    $("#decorationDdl").ddslick({
        height: 300,
        data: ddElement,
        selectText: "Select an icon"
    });
}

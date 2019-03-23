function createDecoration(){
    var pos = getElementPos(".player");

    var className = $("#decorationDdl-dd-placeholder").find(".dd-selected-text").text().trim().toLowerCase() + " tooltip tap-target";
    var imgName = $("#decorationDdl-dd-placeholder").find(".dd-selected-text")[0].className.replace("dd-selected-text", "");
    var elementType = $("#decorationDdlType-dd-placeholder").find(".dd-selected-text").text().trim().toLowerCase();

    var img = createImgTag(idElement,
        imgName,
        $("#addNameMapDecoration").val(),
        className.toLowerCase(),
        "",
        elementType,
        pos.top,
        pos.left,
        $("#addTitleMapDecoration").val());

    $("." + elementType + "Section").append(img);
    if ($("#" + elementType)[0].checked){
        $("#" + elementType)[0].checked = true;
        $("#" + idElement).show();
    }

    closeMenuDecoration();
    tooltipOne(idElement);
    idElement++;
};

function editElement(){
    var decorationToChange = $("#decorationToChange").val();
    var itemToChange = $("#" + decorationToChange);

    var name = $("#nameMapDecoration").val();
    var title = $("#titleMapDecoration").val();
    var className = itemToChange[0].className
                                .replace("tooltipstered", "")
                                .replace("draggable", "")
                                .replace("inFront", "");
    var id = itemToChange[0].id;
    var imgName = getIconName(itemToChange[0]);

    var pos = getElementPos("#" + decorationToChange);

    var img = createImgTag(id,
        imgName,
        name,
        className,
        "",
        "",
        pos.top,
        pos.left,
        title );

    var section = itemToChange[0].parentNode.className;
    itemToChange.remove();
    
    $("." + section).append(img);

    closeMenuDecoration();
    tooltipOne(id);
};

function getElementPos(element){
    var pos = { left: $(element)[0].offsetLeft + tryParseInt($(element).data("x"), 0),
                top : $(element)[0].offsetTop + tryParseInt($(element).data("y"), 0)};

    return pos;
};


function addMapDecoration(){
    $(".editorBackground").show();
    $(".addElement").show();

    var pos = getElementPos(".player");

    $(".addElement").css("top", pos.top + $(".player").height() / 2 + "px");
    $(".addElement").css("left", pos.left + $(".player").width() / 2 + "px");

    $("#addNameMapDecoration").val("");
    $("#addTitleMapDecoration").val("");

};

function getIconName(element){
    var classes = $(element)[0].attributes["class"].value.split(" ");

    for(var i = 0; i < classes.length; i++){
        if (classes[i].startsWith("icon-")){
            return classes[i];
        }
    }
};

function unselectElement(){
    $("#" + idSelectedElement).removeClass("draggable");
    $("#" + idSelectedElement).removeClass("inFront");

    idSelectedElement = 0;
};

function deleteElement(){
    $("#" + idSelectedElement).remove();
    closeMenuDecoration();
};
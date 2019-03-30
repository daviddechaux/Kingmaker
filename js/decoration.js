function createDecoration(){
    var pos = getElementPos(".player");

    var className = $("#decorationDdl").find("a.dd-selected").find("label").text().trim().toLowerCase() + " tooltip tap-target";
    var imgName = $("#decorationDdl").find("a.dd-selected").find("label")[0].className.replace("dd-selected-text", "").trim();
    var elementType = $("#decorationDdlType").find("a.dd-selected").find("label").text().trim().toLowerCase()

    var img = createImgTag(idElement,
        imgName,
        $("#addNameMapDecoration").val(),
        className.toLowerCase(),
        "",
        elementType,
        pos.top,
        pos.left,
        $("#addTitleMapDecoration").val(),
        elementType);

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

    var title = $("#titleMapDecoration").val();
    var className = removeOldIcon(itemToChange[0].className
                                .replace("icon", "")
                                .replace("tooltipstered", "")
                                .replace("draggable", "")
                                .replace("inFront", "")
                                .replace("  ", " ")
                                .trim());

    className = removeOldSection(className);

    var userClass = $('#editDecorationDdl').data('ddslick').selectedData.userClass;
    var newIcon = getIconName(userClass.split(" ")).replace("icon-", "");

    var id = itemToChange[0].id;
    var pos = getElementPos("#" + decorationToChange);

    var newSection = $('#editDecorationDdlType').data('ddslick').selectedData.text.toLowerCase();

    var img = createImgTag(id,
        userClass,
        "",
        className + " " + newIcon,
        "",
        newSection,
        pos.top,
        pos.left,
        title,
        newSection);

    itemToChange.remove();   
    $("." + newSection + "Section").append(img);

    closeMenuDecoration();
    tooltipOne(id);
};

function removeOldSection(className){
    for(var i = 0; i < elementType.length; i++){
        className = className.replace(elementType[i], "");
    }
    
    return className;
};

function removeOldIcon(className){
    var oldIcon = getIconName(className.split(" "));
    var oldClass = oldIcon.replace("icon-", "");

    var result = className.replace(oldIcon, "")
                        .replace(oldClass, "");

    return result;
};

function getElementPos(element){
    return { left: $(element)[0].offsetLeft + tryParseInt($(element).data("x"), 0),
             top : $(element)[0].offsetTop + tryParseInt($(element).data("y"), 0)};
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

function getIconName(classes){
    for(var i = 0; i < classes.length; i++){
        if (classes[i].startsWith("icon-")){
            return classes[i];
        }
    }

    return "";
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
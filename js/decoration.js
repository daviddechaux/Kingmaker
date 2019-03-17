function createDecoration(){
    // <img id="252" src="pics/village.png" name="moskva" class="building village  tooltip tap-target tooltipstered" style="top:500px; left:4670px" alt="Moskva">

    var className = $("#decorationDdl").find(".dd-selected-text").text() + " tooltip tap-target";
    var imgName = imgPathToImgName($("#decorationDdl").find(".dd-selected").find("img")[0].currentSrc);
    var pos = getElementPos(".player");
    var elementType = $("#decorationDdlType").find(".dd-selected-text").text().toLowerCase();

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

    closeMenuDecoration();
    tooltipOne(idElement);
    idElement++;
};

function changeDecoration(){
    var decorationToChange = $("#decorationToChange").val();
    var itemToChange = $("#" + decorationToChange);

    var name = $("#nameMapDecoration").val();
    var title = $("#titleMapDecoration").val();
    var className = itemToChange[0].className
                                .replace("tooltipstered", "")
                                .replace("draggable", "")
                                .replace("inFront", "");
    var id = itemToChange[0].id;
    var imgName = imgPathToImgName(itemToChange[0].src);

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
    var pos = { left: $(element)[0].offsetLeft + TryParseInt(document.querySelector(element).dataset.x, 0),
                top : $(element)[0].offsetTop + TryParseInt(document.querySelector(element).dataset.y, 0)};

    return pos;
};


function addMapDecoration(){
    displayNiceDropdownList();

    $(".editorBackground").show();
    $(".addElement").show();

    var pos = getElementPos(".player");

    $(".addElement").css("top", pos.top + $(".player").height() / 2 + "px");
    $(".addElement").css("left", pos.left + $(".player").width() / 2 + "px");

    $("#addNameMapDecoration").val("");
    $("#addTitleMapDecoration").val("");

};

function imgPathToImgName(imgPath){
    //Firefox doesn't suppport "?<=" regex properly so I use a workaround
    //var myRegexp = /(?<=pics\/)(.*)(?=\.png)/g;
    //var img = myRegexp.exec(element.currentSrc)[1];

    var imageName = imgPath.split("pics/");
    return imageName[1].replace(".png", "")
};

function unselectElement(){
    $("#" + idSelectedElement).removeClass("draggable");
    $("#" + idSelectedElement).removeClass("inFront");

    idSelectedElement = 0;
};
function removeClassNameOnSave(className, classToRemove) {
    for (var i = 0; i < classToRemove.length; i++) {
        className = className.replace(classToRemove[i], "");
    }

    return className.trim();
};


function getIconNameFromElement(element) {
    var classes = $(element)[0].attributes["class"].value.split(" ");

    return getIconName(classes);
};



function createElement(imgId, picName, elementName, cssClass, visited, additionalClass, top, left, title, elementType, faction) {
    if (faction == undefined || faction == "") {
        faction = "None";
    }

    if (elementType === "fogOfWar") {
        var fullClass = (cssClass + " " + visited + " " + additionalClass).trim().replace("  ", " ");

        var div = "<div class='hex' data-faction='" + faction + "'>";
        div += "<div id='" + imgId + "' name='" + elementName + "' class='" + fullClass + "' data-elementType='" + elementType + "' alt='" + title + "' style='top:" + top + "px; left:" + left + "px' />";
        div += createBorder(faction, elementName, top, left);
        div += displayAreaCode(elementName, top, left);
        div += "</div>";
        return div;
    }
    else {
        var fullClass = (cssClass + " " + additionalClass + " " + picName).trim().replace("  ", " ");

        var color = getFactionColorFromId(faction);

        return '<div id="' + imgId + '" data-faction="' + faction + '" class="icon ' + fullClass + '" data-elementType="' + elementType + '" alt="' + title + '" title="' + title + '" style="top:' + top + 'px; left:' + left + 'px; color:' + color + '" />';
    }
};

function displayAreaCode(hexName, top, left) {
    var newTop = parseInt(top) + 221;
    var newLeft = parseInt(left) + 97;
    var row = hexName.substring(0, 1);
    var column = parseInt(hexName.substring(1, 3)) - 14;

    //return "<label class='hexLabel' style='top:" + newTop + "px; left:" + newLeft + "px';>" + hexName + "</label>";
    if (0 < column && column < 8)
        return "<label class='hexLabel' style='top:" + newTop + "px; left:" + newLeft + "px';>" + row + column + "</label>";

    return "";
}
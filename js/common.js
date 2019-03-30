function htmlToObject(element) {
    var img = "fog";
    var name = $(element)[0].attributes["name"] != undefined ? $(element)[0].attributes["name"].value : "";
    var className = removeClassNameOnSave($(element)[0].className, ["fog", "  "]);
    var title = "";

    if (className.indexOf("fog") === -1) {
        img = getIconNameFromElement(element);

        className = removeClassNameOnSave(className, ["tooltipstered", "tooltip", "tap-target", "inFront", "draggable", "icon", img, "  "]);
        title = $(element)[0].attributes["alt"].value;
    }

    var elementType = $(element).data("elementtype");

    var top = $(element)[0].style.top.replace("px", "").replace('"', "");
    var left = $(element)[0].style.left.replace("px", "");

    return { "class": className.trim(), img, name, elementType, top, left, title };
};

function removeClassNameOnSave(className, classToRemove) {
    for (var i = 0; i < classToRemove.length; i++) {
        className = className.replace(classToRemove[i], "");
    }

    return className.trim();
};


function getIconNameFromElement(element){
    var classes = $(element)[0].attributes["class"].value.split(" ");

    return getIconName(classes);
};



function createImgTag(imgId, picName, elementName, cssClass, visited, additionalClass, top, left, title, elementType) {
    if (elementType === "fogOfWar") {
        var fullClass = (cssClass + " " + visited + " " + additionalClass).trim().replace("  ", " ");
        return "<img id='" + imgId + "' src='pics/" + picName + ".png' name='" + elementName + "' class='" + fullClass + "' title='" + title + "' data-elementType='" + elementType + "' alt='" + title + "' style='top:" + top + "px; left:" + left + "px' />";
    }
    else {
        var fullClass = (cssClass + " " + additionalClass + " " + picName).trim().replace("  ", " ");
        return "<div id='" + imgId + "' class='icon " + fullClass + "' data-elementType='" + elementType + "' alt='" + title + "' title='" + title + "' style='top:" + top + "px; left:" + left + "px' />";
    }
};
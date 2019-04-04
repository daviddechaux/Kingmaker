function htmlToObject(element) {
    var img = "fog";
    var name = $(element)[0].attributes["name"] != undefined ? $(element)[0].attributes["name"].value : "";
    var className = removeClassNameOnSave($(element)[0].className, ["fog", "  "]);
    var title = "";
    var faction = "";

    if (className.indexOf("fog") === -1) {
        img = getIconNameFromElement(element);

        className = removeClassNameOnSave(className, ["tooltipstered", "tooltip", "tap-target", "inFront", "draggable", "icon", img, "  "]);
        title = $(element)[0].attributes["alt"].value;
        faction = $(element).data("faction");
    }

    var elementType = $(element).data("elementtype");

    var top = $(element)[0].style.top.replace("px", "").replace('"', "");
    var left = $(element)[0].style.left.replace("px", "");

    var obj = { "class": className.trim(), img, name, elementType, top, left, title, faction };

    console.log(obj);
    return obj;
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



function createImgTag(imgId, picName, elementName, cssClass, visited, additionalClass, top, left, title, elementType, faction) {
    if (elementType === "fogOfWar") {
        var fullClass = (cssClass + " " + visited + " " + additionalClass).trim().replace("  ", " ");
        return "<div id='" + imgId + "' name='" + elementName + "' class='" + fullClass + "' title='" + title + "' data-elementType='" + elementType + "' alt='" + title + "' style='top:" + top + "px; left:" + left + "px' />";
    }
    else {
        var fullClass = (cssClass + " " + additionalClass + " " + picName).trim().replace("  ", " ");

        if (faction == undefined){
            faction = "None";
        }
        var color = factionNameToColor(faction); 
        
        return "<div id='" + imgId + "' data-faction='" + faction + "' class='icon " + fullClass + "' data-elementType='" + elementType + "' alt='" + title + "' title='" + title + "' style='top:" + top + "px; left:" + left + "px; " + color + "' />";
    }
};
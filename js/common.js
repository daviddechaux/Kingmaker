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
        return "<div id='" + imgId + "' name='" + elementName + "' class='" + fullClass + "' data-elementType='" + elementType + "' alt='" + title + "' style='top:" + top + "px; left:" + left + "px' />";
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
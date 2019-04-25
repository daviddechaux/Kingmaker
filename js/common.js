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



function createImgTag(imgId, picName, elementName, cssClass, visited, additionalClass, top, left, title, elementType, faction) {
    if (faction == undefined) {
        faction = "None";
    }

    if (elementType === "fogOfWar") {
        var fullClass = (cssClass + " " + visited + " " + additionalClass).trim().replace("  ", " ");
        var div = "<div><div id='" + imgId + "' name='" + elementName + "' class='" + fullClass + "' data-elementType='" + elementType + "' data-faction='" + faction + "' alt='" + title + "' style='top:" + top + "px; left:" + left + "px' />";

        if (faction != "" && faction != "None") {
            var factionColor = getFactionColorFromId(faction);
            var position = "top:" + top + "px; left:" + left + "px";

            div +=
                "<svg class='border ne' style='" + position + "'>" +
                "<polygon points='115,0 230,67 225,72 115,7' style='fill:" + factionColor + "'/>" +
                "</svg>" +
                "<svg class='border e' style='" + position + "'>" +
                "<polygon points='230, 67 230,200 225,195 225, 72' style='fill:" + factionColor + "'/>" +
                "</svg>" +
                "<svg class='border se' style='" + position + "'>" +
                "<polygon points='230,200 115,266 115,259 225,195' style='fill:" + factionColor + "'/>" +
                "</svg>" +
                "<svg class='border sw' style='" + position + "'>" +
                "<polygon points='115,266 0,200 5,195 115,259' style='fill:" + factionColor + "'/>" +
                "</svg>" +
                "<svg class='border w' style='" + position + "'>" +
                "<polygon points='0,200 0,67 5,72 5,195' style='fill:" + factionColor + "'/>" +
                "</svg>" +
                "<svg class='border nw' style='" + position + "'>" +
                "<polygon points='0,67 115,0 115,7 5,72' style='fill:" + factionColor + "'/>" +
                "</svg>";
        }

        div += "</div>";
        return div;
    }
    else {
        var fullClass = (cssClass + " " + additionalClass + " " + picName).trim().replace("  ", " ");

        var color = getFactionColorFromId(faction);

        return '<div id="' + imgId + '" data-faction="' + faction + '" class="icon ' + fullClass + '" data-elementType="' + elementType + '" alt="' + title + '" title="' + title + '" style="top:' + top + 'px; left:' + left + 'px; color:' + color + '" />';
    }
};
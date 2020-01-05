function saveFile() {
    $("#saveData").click();

    var map = convertMapToObject();

    var file = new Blob([map], { type: "text/ plain" });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, "map.json");
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = "Kingmaker.map";
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
};

function convertMapToObject() {
    var mapContainer = document.querySelectorAll("[data-elementtype='fogOfWar']");
    var fog = [];
    for (var i = 0; i < mapContainer.length; i++) {
        var newElement = fogToObject(mapContainer[i]);
        fog.push(newElement);
    }

    var mapContainer = $(".mapDecoration").find(".icon");
    var building = [];
    var resources = [];
    var armies = [];
    var misc = [];
    
    for (var i = 0; i < mapContainer.length; i++) {
        var newElement = htmlToObject(mapContainer[i]);
        
        var elementType = getElementType(newElement.class);
        switch (elementType) {
            case "building": building.push(newElement);
                break;
            case "resources": resources.push(newElement);
                break;
            case "armies": armies.push(newElement);
                break;
            case "misc": misc.push(newElement);
                break;
        }
    }

    var player = createPlayerObject();
    var factions = createFactionObject();
    var options = createOptionObject();
    var map = { player, options, factions, building, resources, misc, armies, fog };

    return JSON.stringify(map);
};

function fogToObject(element) {
    var img = "fog";
    var name = $(element)[0].attributes["name"] != undefined ? $(element)[0].attributes["name"].value : "";
    var className = removeClassNameOnSave($(element)[0].className, ["fog", "  "]);
    var elementType = $(element).data("elementtype");
    var faction = $(element)[0].parentNode.attributes[1].value.toString();
    var top = $(element)[0].style.top.replace("px", "").replace('"', "");
    var left = $(element)[0].style.left.replace("px", ""); 
    
    var obj = { "class": className.trim(), img, name, elementType, top, left, faction };
    return obj;
};


function createPlayerObject(){
    var x1 = parseInt($(".player")[0].style.left.replace("px", ""))
    var y1 = parseInt($(".player")[0].style.top.replace("px", ""))

    var x2 = parseInt($(".player")[0].getAttribute("data-x"));
    var y2 = parseInt($(".player")[0].getAttribute("data-y"));

    x = getSavingPos(x1, x2);
    y = getSavingPos(y1, y2);

    return {x, y};
};

function createOptionObject(){
    var fogOpacity = $(".fogOpacity").val();
    var menuOpacity = $(".menuOpacity").val();
    var hexNumber = $('input[name="hexNumber"]:checked')[0].value;

    return {fogOpacity, menuOpacity, hexNumber};
};

function getSavingPos(initialPos, currentPos){
    var newPos = isNaN(currentPos) ? initialPos : initialPos + currentPos;

    if(newPos < 0)
        newPos = 0

    return newPos;
};

function createFactionObject(){
    // Select all factions
    var factions = $(".faction");

    var factionList = [];
    for (var i = 0; i < factions.length; i++) {
        var currentFaction = factions[i];

        var faction = {
            "id": $(currentFaction).find(".factionDescription").data("factionid"),
            "name": $(currentFaction).find(".factionDescription").val(),
            "color": $(currentFaction).find(".factionBox")[0].style["background-color"],
            "suzerain": $(currentFaction).find(".factionDescription").data("suzerain")
        };

        factionList.push(faction);
    }

    return factionList;
};

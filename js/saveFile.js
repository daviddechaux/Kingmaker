function saveFile() {
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
    var misc = [];
    for (var i = 0; i < mapContainer.length; i++) {
        var newElement = htmlToObject(mapContainer[i]);
        
        var elementType = getElementType(newElement.class);
        switch (elementType) {
            case "building": building.push(newElement);
                break;
            case "resources": resources.push(newElement);
                break;
            case "misc": misc.push(newElement);
                break;
        }
    }

    var player = createPlayerObject();
    var factions = createFactionObject();
    var map = { player, factions, building, resources, misc, fog };

    return JSON.stringify(map);
};

function createPlayerObject(){
    var x1 = parseInt($(".player")[0].style.top.replace("px", ""))
    var y1 = parseInt($(".player")[0].style.left.replace("px", ""))

    var x2 = parseInt($(".player")[0].getAttribute("data-x"));
    var y2 = parseInt($(".player")[0].getAttribute("data-y"));

    x = isNaN(x2) ? 0 + x1 : x1 + x2;
    y = isNaN(y2) ? 0 + y1 : y1 + y2;

    return {x, y};
};

function createFactionObject(){
    // Select all factions
    var factions = $(".faction");

    var factionList = [];
    for (var i = 0; i < factions.length; i++) {
        var currentFaction = factions[i];

        var faction = {
            "id": $(currentFaction).find(".factionName").data("factionid"),
            "name": $(currentFaction).find(".factionName").val(),
            "color": $(currentFaction).find(".factionBox")[0].style["background-color"]
        };

        factionList.push(faction);
    }

    return factionList;
};

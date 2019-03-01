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
    var mapContainer = $(".mapDecoration").find("img");

    var building = [];
    var resources = [];
    var misc = [];
    var fog = [];
    for (var i = 0; i < mapContainer.length; i++) {
        var newElement = htmlToObject(mapContainer[i]);
        
        var elementType = getElementType(newElement.class);
        switch (elementType) {
            case "fog": fog.push(newElement);
                break;
            case "building": building.push(newElement);
                break;
            case "resources": resources.push(newElement);
                break;
            case "misc": misc.push(newElement);
                break;
        }
        var player = createPlayerObject();

        var map = { player, building, resources, misc, fog };
    }

    return JSON.stringify(map);
};

function getElementType(className) {
    return className.includes("building") ? "building" :
            className.includes("resources") ? "resources" :
                className.includes("misc") ? "misc" : "fog";
};

function createPlayerObject(){
    var x = $(".player").data("x") ;
    var y = $(".player").data("y") ;

    return {x, y};
};


function loadFile(){
    $("#openData").change(function (e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = JSON.parse(e.target.result);
            createMapDecoration(data);
        };
        reader.readAsText(file);
    });
};

function createMapDecoration(data) {
    cleanMap();

    addPlayerToMap(data.player);
    addElementToMap(data.fog, "fogOfWar", true);
    addElementToMap(data.building, "buildingSection", false);
    addElementToMap(data.resources, "resourcesSection", false);
    addElementToMap(data.misc, "miscSection", false);

    tooltip();
};


function addPlayerToMap(player){
    var x = player && player.x ? player.x : 0;
    var y = player && player.y ? player.y : 0;
    $(".player").data("x", x);
    $(".player").data("y", y);
    $(".player").css({"-webkit-transform":"translate(" + x + "px, " + y + "px)"});
    $(".player").css({"-transform":"translate(" + x + "px, " + y + "px)"});
};


function addElementToMap(item, sectionName, isFogOfWar) {
    if (item) {
        $(".mapDecoration").append("<div class='" + sectionName + "'> </div>");
        var div = $("." + sectionName);

        for (var i = 0; i < item.length; i++) {
            var obj = item[i];

            var visited = obj.visited && obj.visited == true ? "visited" : "";
            var name = obj.name ? obj.name : "";
            var cssClass = obj.class ? obj.class : "";
            var title = obj.title ? obj.title.replace("'", "&#39;") : "";
            var elementType = isFogOfWar ? "fog" : "tooltip";

            var img = createImgDiv(obj.img, name, cssClass, visited, elementType, obj.top, obj.left, title);
            div.append(img);
        }
    }
};


function createImgDiv(picName, elementName, cssClass, visited, elementType, top, left, title) {
    var fullClass = (cssClass + " " + visited + " " + elementType + " tap-target").trim();
    return "<img src='img/" + picName + ".png' name='" + elementName + "' class='" + fullClass + "' style='top:" + top + "px; left:" + left + "px' title='" + title + "' alt='" + title + "' />";
};
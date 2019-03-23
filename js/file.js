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
    var fog = [];
    for (var i = 0; i < mapContainer.length; i++) {
        var newElement = htmlToObject(mapContainer[i]);
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
    var map = { player, building, resources, misc, fog };

    return JSON.stringify(map);
};

function getElementType(className) {
    return className.includes("building") ? "building" :
            className.includes("resources") ? "resources" :
                className.includes("misc") ? "misc" : "fog";
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

function createNew(){
    var data = JSON.parse('{"player": {"x": 205,"y": 4335},"building": [],"resources": [],"misc": [],"fog": [{"img": "fog","name": "a1","top": "208","left": "142"},{"img": "fog","name": "a2","top": "208","left": "370"},{"img": "fog","name": "a3","top": "208","left": "598"},{"img": "fog","name": "a4","top": "208","left": "828"},{"img": "fog","name": "a5","top": "208","left": "1056"},{"img": "fog","name": "a6","top": "208","left": "1284"},{"img": "fog","name": "a7","top": "208","left": "1512"},{"img": "fog","name": "a8","top": "208","left": "1742"},{"img": "fog","name": "a9","top": "208","left": "1970"},{"img": "fog","name": "a10","top": "208","left": "2200"},{"img": "fog","name": "a11","top": "208","left": "2430"},{"img": "fog","name": "a12","top": "208","left": "2655"},{"img": "fog","name": "a13","top": "208","left": "2884"},{"img": "fog","name": "a14","top": "208","left": "3114"},{"img": "fog","name": "a15","class": "light","top": "208","left": "3343"},{"img": "fog","name": "a16","class": "light","top": "208","left": "3572"},{"img": "fog","name": "a17","class": "light","top": "208","left": "3800"},{"img": "fog","name": "a18","class": "light","top": "208","left": "4030"},{"img": "fog","name": "a19","class": "light","top": "208","left": "4258"},{"img": "fog","name": "a20","class": "light","top": "208","left": "4488"},{"img": "fog","name": "a21","class": "light","top": "208","left": "4715"},{"img": "fog","name": "a22","top": "208","left": "4944"},{"img": "fog","name": "a23","top": "208","left": "5172"},{"img": "fog","name": "a24","top": "208","left": "5401"},{"img": "fog","name": "a25","top": "208","left": "5630"},{"img": "fog","name": "a26","top": "208","left": "5860"},{"img": "fog","name": "a27","top": "208","left": "6088"},{"img": "fog","name": "b1","top": "405","left": "28"},{"img": "fog","name": "b2","top": "405","left": "256"},{"img": "fog","name": "b3","top": "405","left": "484"},{"img": "fog","name": "b4","top": "405","left": "714"},{"img": "fog","name": "b5","top": "405","left": "942"},{"img": "fog","name": "b6","top": "405","left": "1170"},{"img": "fog","name": "b7","top": "405","left": "1398"},{"img": "fog","name": "b8","top": "405","left": "1628"},{"img": "fog","name": "b9","top": "405","left": "1856"},{"img": "fog","name": "b10","top": "405","left": "2086"},{"img": "fog","name": "b11","top": "405","left": "2316"},{"img": "fog","name": "b12","top": "405","left": "2541"},{"img": "fog","name": "b13","top": "405","left": "2770"},{"img": "fog","name": "b14","top": "405","left": "3000"},{"img": "fog","name": "b15","class": "light","top": "405","left": "3229"},{"img": "fog","name": "b16","class": "light","top": "405","left": "3458"},{"img": "fog","name": "b17","class": "light","top": "405","left": "3686"},{"img": "fog","name": "b18","class": "light","top": "405","left": "3916"},{"img": "fog","name": "b19","class": "light","top": "405","left": "4144"},{"img": "fog","name": "b20","class": "light","top": "405","left": "4374"},{"img": "fog","name": "b21","class": "light","top": "405","left": "4601"},{"img": "fog","name": "b22","top": "405","left": "4830"},{"img": "fog","name": "b23","top": "405","left": "5058"},{"img": "fog","name": "b24","top": "405","left": "5287"},{"img": "fog","name": "b25","top": "405","left": "5516"},{"img": "fog","name": "b26","top": "405","left": "5746"},{"img": "fog","name": "b27","top": "405","left": "5974"},{"img": "fog","name": "b28","top": "405","left": "6200"},{"img": "fog","name": "c1","top": "604","left": "142"},{"img": "fog","name": "c2","top": "604","left": "370"},{"img": "fog","name": "c3","top": "604","left": "598"},{"img": "fog","name": "c4","top": "604","left": "828"},{"img": "fog","name": "c5","top": "604","left": "1056"},{"img": "fog","name": "c6","top": "604","left": "1284"},{"img": "fog","name": "c7","top": "604","left": "1512"},{"img": "fog","name": "c8","top": "604","left": "1742"},{"img": "fog","name": "c9","top": "604","left": "1970"},{"img": "fog","name": "c10","top": "604","left": "2200"},{"img": "fog","name": "c11","top": "604","left": "2430"},{"img": "fog","name": "c12","top": "604","left": "2655"},{"img": "fog","name": "c13","top": "604","left": "2884"},{"img": "fog","name": "c14","top": "604","left": "3114"},{"img": "fog","name": "c15","class": "light","top": "604","left": "3343"},{"img": "fog","name": "c16","class": "light","top": "604","left": "3572"},{"img": "fog","name": "c17","class": "light","top": "604","left": "3800"},{"img": "fog","name": "c18","class": "light","top": "604","left": "4030"},{"img": "fog","name": "c19","class": "light","top": "604","left": "4258"},{"img": "fog","name": "c20","class": "light","top": "604","left": "4488"},{"img": "fog","name": "c21","class": "light","top": "604","left": "4715"},{"img": "fog","name": "c22","top": "604","left": "4944"},{"img": "fog","name": "c23","top": "604","left": "5172"},{"img": "fog","name": "c24","top": "604","left": "5401"},{"img": "fog","name": "c25","top": "604","left": "5630"},{"img": "fog","name": "c26","top": "604","left": "5860"},{"img": "fog","name": "c27","top": "604","left": "6088"},{"img": "fog","name": "d1","top": "800","left": "28"},{"img": "fog","name": "d2","top": "800","left": "256"},{"img": "fog","name": "d3","top": "800","left": "484"},{"img": "fog","name": "d4","top": "800","left": "714"},{"img": "fog","name": "d5","top": "800","left": "942"},{"img": "fog","name": "d6","top": "800","left": "1170"},{"img": "fog","name": "d7","top": "800","left": "1398"},{"img": "fog","name": "d8","top": "800","left": "1628"},{"img": "fog","name": "d9","top": "800","left": "1856"},{"img": "fog","name": "d10","top": "800","left": "2086"},{"img": "fog","name": "d11","top": "800","left": "2316"},{"img": "fog","name": "d12","top": "800","left": "2541"},{"img": "fog","name": "d13","top": "800","left": "2770"},{"img": "fog","name": "d14","top": "800","left": "3000"},{"img": "fog","name": "d15","class": "light","top": "800","left": "3229"},{"img": "fog","name": "d16","class": "light","top": "800","left": "3458"},{"img": "fog","name": "d17","class": "light","top": "800","left": "3686"},{"img": "fog","name": "d18","class": "light","top": "800","left": "3916"},{"img": "fog","name": "d19","class": "light","top": "800","left": "4144"},{"img": "fog","name": "d20","class": "light","top": "800","left": "4374"},{"img": "fog","name": "d21","class": "light","top": "800","left": "4601"},{"img": "fog","name": "d22","top": "800","left": "4830"},{"img": "fog","name": "d23","top": "800","left": "5058"},{"img": "fog","name": "d24","top": "800","left": "5287"},{"img": "fog","name": "d25","top": "800","left": "5516"},{"img": "fog","name": "d26","top": "800","left": "5746"},{"img": "fog","name": "d27","top": "800","left": "5974"},{"img": "fog","name": "d28","top": "800","left": "6200"},{"img": "fog","name": "e1","top": "1000","left": "142"},{"img": "fog","name": "e2","top": "1000","left": "370"},{"img": "fog","name": "e3","top": "999","left": "599"},{"img": "fog","name": "e4","top": "1000","left": "828"},{"img": "fog","name": "e5","top": "1000","left": "1056"},{"img": "fog","name": "e6","top": "1000","left": "1284"},{"img": "fog","name": "e7","top": "1000","left": "1512"},{"img": "fog","name": "e8","top": "1000","left": "1742"},{"img": "fog","name": "e9","top": "1000","left": "1970"},{"img": "fog","name": "e10","top": "1000","left": "2200"},{"img": "fog","name": "e11","top": "1000","left": "2430"},{"img": "fog","name": "e12","top": "1000","left": "2655"},{"img": "fog","name": "e13","top": "1000","left": "2884"},{"img": "fog","name": "e14","top": "1000","left": "3114"},{"img": "fog","name": "e15","class": "light","top": "1000","left": "3343"},{"img": "fog","name": "e16","class": "light","top": "1000","left": "3572"},{"img": "fog","name": "e17","class": "light","top": "1000","left": "3800"},{"img": "fog","name": "e18","class": "light","top": "1000","left": "4030"},{"img": "fog","name": "e19","class": "light","top": "1000","left": "4258"},{"img": "fog","name": "e20","class": "light","top": "1000","left": "4488"},{"img": "fog","name": "e21","class": "light","top": "1000","left": "4715"},{"img": "fog","name": "e22","top": "1000","left": "4944"},{"img": "fog","name": "e23","top": "1000","left": "5172"},{"img": "fog","name": "e24","top": "1000","left": "5401"},{"img": "fog","name": "e25","top": "1000","left": "5630"},{"img": "fog","name": "e26","top": "1000","left": "5860"},{"img": "fog","name": "e27","top": "1000","left": "6088"},{"img": "fog","name": "f1","top": "1196","left": "28"},{"img": "fog","name": "f2","top": "1196","left": "256"},{"img": "fog","name": "f3","top": "1196","left": "484"},{"img": "fog","name": "f4","top": "1196","left": "714"},{"img": "fog","name": "f5","top": "1196","left": "942"},{"img": "fog","name": "f6","top": "1196","left": "1170"},{"img": "fog","name": "f7","top": "1196","left": "1398"},{"img": "fog","name": "f8","top": "1196","left": "1628"},{"img": "fog","name": "f9","top": "1196","left": "1856"},{"img": "fog","name": "f10","top": "1196","left": "2086"},{"img": "fog","name": "f11","top": "1196","left": "2316"},{"img": "fog","name": "f12","top": "1196","left": "2541"},{"img": "fog","name": "f13","top": "1196","left": "2770"},{"img": "fog","name": "f14","top": "1196","left": "3000"},{"img": "fog","name": "f15","top": "1196","left": "3229"},{"img": "fog","name": "f16","top": "1196","left": "3458"},{"img": "fog","name": "f17","top": "1196","left": "3686"},{"img": "fog","name": "f18","top": "1196","left": "3916"},{"img": "fog","name": "f19","top": "1196","left": "4144"},{"img": "fog","name": "f20","top": "1196","left": "4374"},{"img": "fog","name": "f21","top": "1196","left": "4601"},{"img": "fog","name": "f22","top": "1196","left": "4830"},{"img": "fog","name": "f23","top": "1196","left": "5058"},{"img": "fog","name": "f24","top": "1196","left": "5287"},{"img": "fog","name": "f25","top": "1196","left": "5516"},{"img": "fog","name": "f26","top": "1196","left": "5746"},{"img": "fog","name": "f27","top": "1196","left": "5974"},{"img": "fog","name": "f28","top": "1196","left": "6200"},{"img": "fog","name": "g1","top": "1394","left": "142"},{"img": "fog","name": "g2","top": "1394","left": "370"},{"img": "fog","name": "g3","top": "1394","left": "598"},{"img": "fog","name": "g4","top": "1394","left": "828"},{"img": "fog","name": "g5","top": "1394","left": "1056"},{"img": "fog","name": "g6","top": "1394","left": "1284"},{"img": "fog","name": "g7","top": "1394","left": "1512"},{"img": "fog","name": "g8","top": "1394","left": "1742"},{"img": "fog","name": "g9","top": "1394","left": "1970"},{"img": "fog","name": "g10","top": "1394","left": "2200"},{"img": "fog","name": "g11","top": "1394","left": "2430"},{"img": "fog","name": "g12","top": "1394","left": "2655"},{"img": "fog","name": "g13","top": "1394","left": "2884"},{"img": "fog","name": "g14","top": "1394","left": "3114"},{"img": "fog","name": "g15","top": "1394","left": "3343"},{"img": "fog","name": "g16","top": "1394","left": "3572"},{"img": "fog","name": "g17","top": "1394","left": "3800"},{"img": "fog","name": "g18","top": "1394","left": "4030"},{"img": "fog","name": "g19","top": "1394","left": "4258"},{"img": "fog","name": "g20","top": "1394","left": "4488"},{"img": "fog","name": "g21","top": "1394","left": "4715"},{"img": "fog","name": "g22","top": "1394","left": "4944"},{"img": "fog","name": "g23","top": "1394","left": "5172"},{"img": "fog","name": "g24","top": "1394","left": "5401"},{"img": "fog","name": "g25","top": "1394","left": "5630"},{"img": "fog","name": "g26","top": "1394","left": "5860"},{"img": "fog","name": "g27","top": "1394","left": "6088"},{"img": "fog","name": "h1","top": "1590","left": "28"},{"img": "fog","name": "h2","top": "1590","left": "256"},{"img": "fog","name": "h3","top": "1590","left": "484"},{"img": "fog","name": "h4","top": "1590","left": "714"},{"img": "fog","name": "h5","top": "1590","left": "942"},{"img": "fog","name": "h6","top": "1590","left": "1170"},{"img": "fog","name": "h7","top": "1590","left": "1398"},{"img": "fog","name": "h8","top": "1590","left": "1628"},{"img": "fog","name": "h9","top": "1590","left": "1856"},{"img": "fog","name": "h10","top": "1590","left": "2086"},{"img": "fog","name": "h11","top": "1590","left": "2316"},{"img": "fog","name": "h12","top": "1590","left": "2541"},{"img": "fog","name": "h13","top": "1590","left": "2770"},{"img": "fog","name": "h14","top": "1590","left": "3000"},{"img": "fog","name": "h15","top": "1590","left": "3229"},{"img": "fog","name": "h16","top": "1590","left": "3458"},{"img": "fog","name": "h17","top": "1590","left": "3686"},{"img": "fog","name": "h18","top": "1590","left": "3916"},{"img": "fog","name": "h19","top": "1590","left": "4144"},{"img": "fog","name": "h20","top": "1590","left": "4374"},{"img": "fog","name": "h21","top": "1590","left": "4601"},{"img": "fog","name": "h22","top": "1590","left": "4830"},{"img": "fog","name": "h23","top": "1590","left": "5058"},{"img": "fog","name": "h24","top": "1590","left": "5287"},{"img": "fog","name": "h25","top": "1590","left": "5516"},{"img": "fog","name": "h26","top": "1590","left": "5746"},{"img": "fog","name": "h27","top": "1590","left": "5974"},{"img": "fog","name": "h28","top": "1590","left": "6200"},{"img": "fog","name": "i1","top": "1788","left": "142"},{"img": "fog","name": "i2","top": "1788","left": "370"},{"img": "fog","name": "i3","top": "1788","left": "598"},{"img": "fog","name": "i4","top": "1788","left": "828"},{"img": "fog","name": "i5","top": "1788","left": "1056"},{"img": "fog","name": "i6","top": "1788","left": "1284"},{"img": "fog","name": "i7","top": "1788","left": "1512"},{"img": "fog","name": "i8","top": "1788","left": "1742"},{"img": "fog","name": "i9","top": "1788","left": "1970"},{"img": "fog","name": "i10","top": "1788","left": "2200"},{"img": "fog","name": "i11","top": "1788","left": "2430"},{"img": "fog","name": "i12","top": "1788","left": "2655"},{"img": "fog","name": "i13","top": "1788","left": "2884"},{"img": "fog","name": "i14","top": "1788","left": "3114"},{"img": "fog","name": "i15","top": "1788","left": "3343"},{"img": "fog","name": "i16","top": "1788","left": "3572"},{"img": "fog","name": "i17","top": "1788","left": "3800"},{"img": "fog","name": "i18","top": "1788","left": "4030"},{"img": "fog","name": "i19","top": "1788","left": "4258"},{"img": "fog","name": "i20","top": "1788","left": "4488"},{"img": "fog","name": "i21","top": "1788","left": "4715"},{"img": "fog","name": "i22","top": "1788","left": "4944"},{"img": "fog","name": "i23","top": "1788","left": "5172"},{"img": "fog","name": "i24","top": "1788","left": "5401"},{"img": "fog","name": "i25","top": "1788","left": "5630"},{"img": "fog","name": "i26","top": "1788","left": "5860"},{"img": "fog","name": "i27","top": "1788","left": "6088"}]}');
    createMapDecoration(data); 
    centerviewOnToken();
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
            centerviewOnToken();
        };
        reader.readAsText(file);
    });
};

function createMapDecoration(data) {
    cleanMap();

    addPlayerToMap(data.player);

    addElementToMap(data.fog, "fogOfWar");
    addElementToMap(data.building, "buildingSection");
    addElementToMap(data.resources, "resourcesSection");
    addElementToMap(data.misc, "miscSection");

    tooltip();
    menuDisplayer();

    isMapLoaded = true;
};

function centerviewOnToken(){
    var pos = getElementPos(".player");

    var heightSize = $(window)[0].innerHeight;
    var scrollV = pos.top - heightSize / 2;

    var widthSize = $(window)[0].innerWidth;
    var scrollH = pos.left - widthSize / 2;
    
    window.scrollTo(scrollH, scrollV);
};

function menuDisplayer(){
    $(".openOrCreateMap").hide();
    $(".editorBackground").hide();
    $(".wrapper").show();

    $(".editorBackground").click(function(){
        closeMenuDecoration();
        unselectElement();
    })
};

function addPlayerToMap(player){
    $(".player")[0].style.top = player.x + "px";
    $(".player")[0].style.left = player.y + "px";
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

            var elementType = "";
            if(sectionName === "fogOfWar"){
                title = visited ? "Click to add" : "Click to remove";
                elementType = "fog";
            }
            else{
                elementType = "tooltip tap-target";
            }

            var img = createImgTag(idElement, obj.img, name, cssClass, visited, elementType, obj.top, obj.left, title);
            div.append(img);

            idElement++;
        }
    }
};


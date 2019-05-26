function cleanMap(){
    $(".fogOfWar").remove();
    $(".buildingSection").remove();
    $(".resourcesSection").remove();
    $(".miscSection").remove();
};

function displayElement(name) {
    $('input[type="checkbox"][name="display-' + name + '"]').change(function () {
        if (this.checked) {
            $("." + name).show();
        }
        else {
            $("." + name).hide();
        }
    });
};

function changeFogOpacity(){
    var fogOpacity = $(".fogOpacity").val();
    $(".fog").css("opacity", fogOpacity);
};

function changeMenuOpacity(){
    var menuOpacity = $(".menuOpacity").val();
    $(".menu ").css("opacity", menuOpacity);
};

function displayHexNumber(area){
    switch(area){
        case "narl" : 
            $(".narlHex").removeClass("hide");
            $(".allHex").addClass("hide");
            break;
        case "all" : 
            $(".narlHex").addClass("hide");
            $(".allHex").removeClass("hide");
            break;
    }
};
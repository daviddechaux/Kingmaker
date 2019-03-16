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


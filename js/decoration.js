function clodeEditDecoration(){
    $(".editMapDecoration").hide();
    $(".editorBackground").hide();
};

function changeDecoration(){
    var decorationToChange = $("#decorationToChange").val();
    var itemToChange = $("#" + decorationToChange);

    var name = $("#nameMapDecoration").val();
    var title = $("#titleMapDecoration").val();
    var className = itemToChange[0].className.replace("tooltipstered", "");
    var id = itemToChange[0].id;
    var imgName = imgPathToImgName(itemToChange[0].src);

console.log(itemToChange);

    var transform = itemToChange[0].style.transform.replace("translate(", "").replace("px", "").replace(" ", "").replace(")", "").split(",");
    var left = parseInt(itemToChange[0].style.left.replace("px", "")) + parseInt(transform[0]);
    var top = parseInt(itemToChange[0].style.top.replace("px", "")) + parseInt(transform[1]);
    
    var img = createImgTag(id,
        imgName,
        name,
        className,
        "",
        "",
        top,
        left,
        title );
    
    var section = itemToChange[0].parentNode.className;
    $("." + section).append(img);

    itemToChange.remove();

    clodeEditDecoration();
    tooltipOne(id);
};
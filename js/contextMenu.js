function removeMenu(contextMenu){
    while (contextMenu.children().length > 0) {
        contextMenu.empty();
    }
};

function addMenu(contextMenu, hex){
    // If visited
    if ($(hex.children("div.fog")[0].attributes["class"]).val().indexOf("visited") > -1){
        contextMenu.append("<li data-action='unexplore'>Un-explore</li>");
    }
    else{
        contextMenu.append("<li data-action='explore'>Explore</li>");
    }

    if (factions.length > 0){
        contextMenu.append("<hr>");
    }

    // Add claim actions
    for(var i = 0; i < factions.length; i++){
        contextMenu.append("<li data-action='claim' data-faction='" + factions[i].id + "'>Claim " + factions[i].name + "</li>");
    }

    if (factions.length > 0 && hex.children("div.isBorder").length > 0){
        contextMenu.append("<hr>");
        contextMenu.append("<li data-action='unclaim'>Unclaim</li>");
    }

    $(".custom-menu li").click(function(){
        var action = $(this).attr("data-action");
        var faction = $(this).attr("data-faction");
 
        switch(action){
            case "unexplore" : explore(hex); break;
            case "explore" : explore(hex); break;
            case "claim" : claim(hex, faction); break;
            case "unclaim" : unclaim(hex); break;
        }
        
        $(".custom-menu").hide();
    });
};

function explore(hex){
    var isVisited = hex.children("div.fog").hasClass("visited");
    if (isVisited){
        hex.children("div.fog").removeClass("visited");
    }
    else{
        hex.children("div.fog").addClass("visited");
    }  
};

function claim(hex, factionId){
    unclaim(hex);

    hex.attr("data-faction", factionId);
    var name = hex.children("div.fog")[0].attributes["name"].value;
    var top = hex.children("div.fog")[0].style.top.replace("px", "");
    var left = hex.children("div.fog")[0].style.left.replace("px", "");

    var border = createBorder(factionId, name, top, left);
    hex.append(border);

    simplifyBorders();
};

function unclaim(hex){
    var border = hex.children("div.isBorder");
    border.remove();

    // Display all the borders the resimplify after 
    $(".isBorder").children(".hide").removeClass("hide");
    simplifyBorders();
};


function centerMenu(contextMenu){
    contextMenu.toggle().
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
};

// function mouseX(evt) {
//     if (evt.pageX) {
//         return evt.pageX;
//     } else if (evt.clientX) {
//        return evt.clientX + (document.documentElement.scrollLeft ?
//            document.documentElement.scrollLeft :
//            document.body.scrollLeft);
//     } else {
//         return null;
//     }
// }

// function mouseY(evt) {
//     if (evt.pageY) {
//         return evt.pageY;
//     } else if (evt.clientY) {
//        return evt.clientY + (document.documentElement.scrollTop ?
//        document.documentElement.scrollTop :
//        document.body.scrollTop);
//     } else {
//         return null;
//     }
// }
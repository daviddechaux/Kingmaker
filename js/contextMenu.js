function bindMenu(){
    //https://stackoverflow.com/a/20471268/11261984
    $(document).bind("contextmenu", function (event) {
        createPos = {x : event.clientX + document.body.scrollLeft, y: event.clientY + document.body.scrollTop};

        event.preventDefault();

        var contextMenu = $(".custom-menu");
        var subContextMenu = $(".sub-custom-menu");

        removeMenu(contextMenu);
        removeMenu(subContextMenu);
        addMenu(contextMenu, subContextMenu, $(event.target.closest(".hex")), createPos);
        centerMenu(contextMenu);
    });

    $(document).bind("mousedown", function (e) {
        // If the clicked element is not the menu
        if (!$(e.target).parents(".custom-menu").length > 0) {
            $(".custom-menu").hide();
        }
    });
};

function removeMenu(contextMenu){
    while (contextMenu.children().length > 0) {
        contextMenu.empty();
    }
};

function addMenu(contextMenu, subContextMenu, hex, mousePos){
    //Cancel right click on an element => just edit it
    if(hex.length == 0) return;

    // If visited
    if ($(hex.children("div.fog")[0].attributes["class"]).val().indexOf("visited") > -1)
        contextMenu.append("<li data-action='unexplore' onmouseover='hideSubMenu()'><i class='icon-visibility-off'></i><span>Un-explore</span></li>");
    else
        contextMenu.append("<li data-action='explore' onmouseover='hideSubMenu()'><i class='icon-visibility'></i><span>Explore</span></li>");

    contextMenu.append("<li data-action='create' onmouseover='hideSubMenu()'><i class='icon-add'></i><span>Add element</span></li>");

    if (factions.length > 0){
        contextMenu.append("<hr onmouseover='hideSubMenu()'>");

        if(hex.children("div.isBorder").length > 0)
            contextMenu.append("<li data-action='unclaim' onmouseover='hideSubMenu()'>Unclaim</li>");

        contextMenu.append('<li class="claim" onmouseover="displaySubMenu(' + mousePos.x + ', ' + mousePos.y + ')" >' +
                              '<i class="icon-faction"></i>' + 
                              '<span>Claim</span>' +
                              '<i class="dockToRight icon-next"></i>' +
                            '</li>');
    }

    // Add claim actions
    for(var i = 0; i < factions.length; i++){
        subContextMenu.append("<li data-action='claim' data-faction='" + factions[i].id + "'>Claim " + factions[i].name + "</li>");
    }

    bindActions(hex, mousePos);
};

function bindActions(hex, mousePos){
    $(".contextMenu li").click(function(){
        $(".contextMenu").hide();

        var action = $(this).attr("data-action");
        var faction = $(this).attr("data-faction");
 
        switch(action){
            // Menu
            case "unexplore" : explore(hex); break;
            case "explore" : explore(hex); break;
            case "create" : addMapDecoration(mousePos); break;
            case "unclaim" : unclaim(hex); break;
            // Sub menu
            case "claim" : claim(hex, faction); break;
        }
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

function hideSubMenu(){
    $(".sub-custom-menu").hide()
};

function displaySubMenu(x, y){
    $(".sub-custom-menu").show().
    css({
        top: parseInt(y) + parseInt($(".claim")[0].offsetTop) + "px",
        left: parseInt(x) + parseInt($(".custom-menu").width()) + "px"
    });
};

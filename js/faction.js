function displayColorPicker() {
	$(".factionBox").click(function (e) {
		var menu = $(".colorPicker");
		menu.show();
		centerThis(menu);

		$("#factionName").text($(e.currentTarget)[0].id);

		$("#colorPicker").farbtastic("#demoPicker");
		$(".editorBackground").show();
	});

	$("#demoPicker").bind('style', function(e) {
		var color = inputColorToElementColor($("#demoPicker"));
		$(".villagePicker").css("color", color);
	});
};

function inputColorToElementColor(input){
	var style = input[0].style;
	if(style != undefined){
		return style["background-color"];
	}

	// Black
	return "rgb(0, 0, 0)";
};

function saveColor(){
	var factionName = $("#factionName").text();
	var color = inputColorToElementColor($("#demoPicker"));
	$("#" + factionName).css("background-color", color);
	
	closeMenuDecoration();
};

function addFaction(){
    // Get the count of factions
    var factionCount = $(".faction").length + 1;

    // Generate a random color
    var color = "background-color: rgb(" + getRandomInt(256) + "," +
                                        getRandomInt(256) + "," +
                                        getRandomInt(256) + ")";

    // Create the HTML string
    var faction = "<div class='faction gimmeFullSpace'>" +
                    "<input type='text' class='factionName' data-factionId='" + factionCount + "' value='Faction " + factionCount + "' />" +
                    "<input type='text' class='factionBox gimmeOtherSpace' style='" + color + "' id='faction" + factionCount + "'/>" +
                  "</div>";

    // Add the faction to the list of factions
    $(".factions").append(faction);

    displayColorPicker();
};


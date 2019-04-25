function displayColorPicker() {
	$(".factionBox").click(function (e) {
		var menu = $(".colorPicker");
		menu.show();
		centerThis(menu);

		$("#factionName").text($(e.currentTarget)[0].id);

		$("#colorPicker").farbtastic("#demoPicker");
		$(".editorBackground").show();
	});

	$("#demoPicker").bind('style', function (e) {
		var color = inputColorToElementColor($("#demoPicker"));
		$(".villagePicker").css("color", color);
	});
};

function inputColorToElementColor(input) {
	var style = input[0].style;
	if (style != undefined) {
		return style["background-color"];
	}

	// Black
	return "rgb(0, 0, 0)";
};

function saveColor() {
	var factionName = $("#factionName").text();
	var color = inputColorToElementColor($("#demoPicker"));
	$("#" + factionName).css("background-color", color);

	closeMenuDecoration();
};

function addFaction() {
	// Get the count of factions
	var factionCount = $(".faction").length + 1;

	// Generate a random color
	var color = "rgb(" + getRandomInt(256) + "," +
		getRandomInt(256) + "," +
		getRandomInt(256) + ")";

	// Create the HTML string
	var faction = factionToHtml(factionCount, "Faction " + factionCount, color);

	// Add the faction to the list of factions
	$(".factions").append(faction);

	displayColorPicker();
};

function addFactions(factions) {
	if (factions == undefined) return;

	$(".faction").remove();
	var factionsDiv = $(".factions");

	for (var i = 0; i < factions.length; i++) {
		var currentFaction = factions[i];
		// Create the HTML string
		var faction = factionToHtml(currentFaction.id, currentFaction.name, currentFaction.color);

		factionsDiv.append(faction);
	}
};

function factionToHtml(id, name, color) {
	factions.push({ id, name, color });

	var faction =
		"<div class='faction gimmeFullSpace'>" +
		"<input type='text' class='factionName' data-factionId='" + id + "' value='" + name + "' />" +
		"<input type='text' class='factionBox gimmeOtherSpace' style='background-color: " + color + "' id='faction" + id + "'/>" +
		"<div class='icon icon-delete delete deleteFaction' onclick='deleteFaction(" + id + ")'/>" +
		"</div>";

	return faction;
};

function deleteFaction(factionId) {
	$("#faction" + factionId).parent().remove();
};

function getFactionColorFromId(factionId) {
	var faction = factions.filter(f => f.id == factionId)[0];
	if (faction != undefined) {
		return faction.color;
	}

	return "rgb(0, 0, 0)";
}



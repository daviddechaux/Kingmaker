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
};


function simplifyBorders() {
	for (var i = 0; i < factions.length; i++) {
		var factionId = factions[i].id;
		var hex = $(".hex").find("[data-faction='" + factionId + "']");

		for (var j = 0; j < hex.length; j++) {
			var hexname = $(hex[j])[0].attributes["name"].value;
			console.log(hexname);

			var hexCloseTo = getHexNameCloseTo(hexname);
			console.log(hexCloseTo);

			var result = false;
			result = isHexIsInList(hex, hexCloseTo.a2);
			console.log(result);
			//remove nw
			result = isHexIsInList(hex, hexCloseTo.a3);
			console.log(result);
			//remove ne
			result = isHexIsInList(hex, hexCloseTo.b1);
			console.log(result);
			//remove w
			result = isHexIsInList(hex, hexCloseTo.b3);
			console.log(result);
			//remove ne
			result = isHexIsInList(hex, hexCloseTo.c2);
			console.log(result);
			//remove sw
			result = isHexIsInList(hex, hexCloseTo.c3);
			console.log(result);
			//remove se


		}

		console.log(hex);
	}
};

function isHexIsInList(hex, hexName) {
	for (var i = 0; i < hex.length; i++) {
		if ($(hex[i])[0].attributes["name"].value === hexName)
			return true;
	}

	return false;
};

function getHexNameCloseTo(hexName) {
	// We should have 2 to 6 hexagones
	// And 0 to 6 hexagones of the same faction
	var row = hexName.substring(0, 1);
	var col = parseInt(hexName.substring(1, 3));

	//   A2  A3
	// B1  B2  B3
	//   C2  C3
	// The hexagon in param is B2
	var a2Name = previousRow(row) + col;
	var a3Name = previousRow(row) + parseInt(col + 1);

	var b1Name = row + parseInt(col - 1);
	var b3Name = row + parseInt(col + 1);

	var c2Name = nextRow(row) + col;
	var c3Name = nextRow(row) + parseInt(col + 1);

	return { a2: a2Name, a3: a3Name, b1: b1Name, b3: b3Name, c2: c2Name, c3: c3Name };
};


function nextRow(row) {
	if (row === "j")
		return "";
	else
		return String.fromCharCode(row.charCodeAt(0) + 1);
};

function previousRow(row) {
	if (row === "a")
		return "";
	else
		return String.fromCharCode(row.charCodeAt(0) - 1);
};




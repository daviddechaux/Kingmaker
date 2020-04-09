function displayColorPicker() {
	$(".factionBox").click(function (e) {
		var menu = $(".colorPicker");
		menu.show();
		centerThis(menu);

		var currentFaction = $(e.currentTarget)[0];

		var demoColor = currentFaction.style["background-color"];

		$("#factionName").text(currentFaction.id);

		displayDropDownFaction($("#editFactionDdlFaction"), 
								currentFaction.dataset.suzerain,
								true);

		$("#demoPicker").val(rgbColorToHex(demoColor));
		$("#demoPicker").css('background-color', demoColor);
		$("#colorPicker").farbtastic(demoPicker);
		$(".editorBackground").show();

		applyColorToDemo(demoColor);
	});

	$("#demoPicker").bind('style', function (e) {
		var color = getColorFromColorPicker($("#demoPicker"));
		applyColorToDemo(color);
	});
};

function applyColorToDemo(color){
	$(".demoVillage").css("color", color);
	var borders = $(".demoBorder");
	for(var i = 0; i < borders.length; i++){
		$(borders[i]).css("fill", color);
	}
}

function getColorFromColorPicker(input) {
	var style = input[0].style;
	if (style != undefined) {
		return style["background-color"];
	}

	// Black
	return "rgb(0, 0, 0)";
};

function saveColor() {
	var factionName = $("#factionName").text();
	
	var color = getColorFromColorPicker($("#demoPicker"));
	$("#" + factionName).css("background-color", color);
	$("#" + factionName).css("color", color);

	closeMenuDecoration();
	updateFactionElement(factionName.replace("faction", ""), color);

};

function updateFactionElement(factionId, color){
	var listOfHex = selectHexFromFactionId(factionId);
	for(var i = 0; i < listOfHex.length; i++){
		//debugger;

		for(var j = 0; j < listOfHex[i].children.length; j++) {
			$(listOfHex[i].children[j].children[0]).css("fill", color);
		}
	}

	var listOfElement = selectElementFromFactionId(factionId);
	for(var i = 0; i < listOfElement.length; i++){
		$(listOfElement[i]).css("color", color);
	}
};

function selectHexFromFactionId(factionId){
	return $(".hex [data-faction=" + factionId + "]");
}

function selectElementFromFactionId(factionId){
	return $("div [data-faction=" + factionId + "]");
}

function addFaction() {
	// Get the count of factions
	var factionCount = $(".faction").length + 1;

	// Generate a random color
	var red = getRandomInt(256);
	var green = getRandomInt(256);
	var blue = getRandomInt(256);

	var color = "rgb(" + red + "," + green + "," + blue + ")";
	var coloreHex = "#" + rgbColorToHex(color);

	var newFactionName = $(".newFactionName").val();
	if (newFactionName == undefined || newFactionName == "")
		newFactionName =  "Faction " + factionCount;

	$(".newFactionName").val("");

	// Create the HTML string
	var faction = factionToHtml(factionCount, newFactionName, color, coloreHex);
	
	// Add the faction to the list of factions
	$(".factions").append(faction);

	displayColorPicker();
};

function rgbColorToHex(rgb) { 
	var color = rgb.substring(rgb.lastIndexOf("(") + 1, rgb.lastIndexOf(")")).split(",");
	var hexColor =  "#" + decimalToHex(color[0]) + decimalToHex(color[1]) + decimalToHex(color[2]);

	return hexColor;
};

function decimalToHex(decimal){
	//https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb
	var hex = Number(decimal).toString(16);
	if (hex.length < 2) {
		 hex = "0" + hex;
	}

	return hex;
}

function createFactions(dataFactions){
    if (dataFactions == undefined) return;
    
    for (var i = 0; i < dataFactions.length; i++) {
        var currentFaction = dataFactions[i];
        factions.push({ id: currentFaction.id, name : currentFaction.name, color : currentFaction.color, suzerain : currentFaction.suzerain });
    }
};

function getMainFactions(){
	return factions.filter(f => f.suzerain === f.id);
};

function addFactions(factions) {
	if (factions == undefined) return;

	$(".faction").remove();
	var factionsDiv = $(".factions");

	// Loop over list of main factions
	var mainFactions = getMainFactions();

	for (var i = 0; i < mainFactions.length; i++) {
		var mainFaction = mainFactions[i];
		var faction = factionToHtml(mainFaction.id, mainFaction.name, mainFaction.color, rgbColorToHex(mainFaction.color), mainFaction.suzerain, false);
		factionsDiv.append(faction);

		// Loop over vassal
		var vassal = factions.filter(f => f.suzerain === mainFaction.id && f.suzerain !== f.id).sort(function(a, b){
			if(a.name < b.name) { return -1; }
			if(a.name > b.name) { return 1; }
			return 0;
		});
		
		for (var j = 0; j < vassal.length; j++) {
			var vassalFaction = vassal[j];
			var vassalFactionHtml = factionToHtml(vassalFaction.id, vassalFaction.name, vassalFaction.color, rgbColorToHex(mainFaction.color), vassalFaction.suzerain,true);
			factionsDiv.append(vassalFactionHtml);
		}
	}
};

function factionToHtml(id, name, color, coloreHex, suzerainId, isVassal) {
	var vassalIcon = "";
	var factionName = "factionName";

	if (isVassal){
		vassalIcon = '<i class="icon-inheritance" class="inheritance" />';
		factionName = "vassalFactionName";
	}

	var faction =
		'<div class="faction gimmeFullSpace" data-suzerain="' + suzerainId + '" data-factionName="' + name + '" style="display:flex">' +
			vassalIcon + '<input type="text" class="factionBox inputStyling" style="background-color: ' + color + '; color: '+ color + '" data-suzerain="' + suzerainId + '" id="faction' + id + '" value="' + coloreHex + '"/>' +
			'<input type="text" class="factionDescription ' + factionName + ' inputStyling gimmeOtherSpace" data-suzerain="' + suzerainId + '" data-factionId="' + id + '" value="' + name + '" />' +
			'<i class="icon-delete-cross delete" onclick="deleteFaction(' + id + ', \'' + name + '\')"/>' +
		'</div>';

	return faction;
};

function deleteFaction(factionId, factionName) {
	$('div[data-factionname="' + factionName + '"]').remove();

	unClaimHex(factionId);
	unClaimElement(factionId);
	removeSuzerain(factionId, factionName);
};

function removeSuzerain(factionId, factionName){
	var factionDiv = $('div[data-suzerain="' + factionId + '"][data-factionName != "' + factionName + '"]');

	var factionsDiv = $(".factions");
	for(var i = 0; i < factionDiv.length; i++){
		var currentFactionMain = factionDiv[i];

		var currentFaction = $(currentFactionMain).children("input.factionDescription");
		var currentFactionId = currentFaction.data("factionid");
		var currentFactionName = currentFaction.val();

		var currentFactionColor = $(currentFactionMain).children("input.factionBox").css( "background-color" );
		
		var faction = factionToHtml(currentFactionId, currentFactionName, currentFactionColor, rgbColorToHex(currentFactionColor), currentFactionId, false);
		$(currentFactionMain).after(faction);
		$(currentFactionMain).remove();
	}
};

function unClaimHex(factionId){
	var listOfHex = selectHexFromFactionId(factionId);
	for(var i = 0; i < listOfHex.length; i++){
		unclaim($(listOfHex[i]).parent() );	
	}
};

function unClaimElement(factionId){
	var listOfElement = ($("div [data-faction=" + factionId + "]"));
	for(var i = 0; i < listOfElement.length; i++){
		$(listOfElement[i]).attr("data-faction", "None");
		$(listOfElement[i]).css("color", "rgb(0, 0, 0)");
	}
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
			var hexCloseTo = getHexNameCloseTo(hexname);
			
			removeBorder(hex, hexCloseTo.nw, $(hex[j]).children(".nw"));
			removeBorder(hex, hexCloseTo.ne, $(hex[j]).children(".ne"));
			removeBorder(hex, hexCloseTo.w, $(hex[j]).children(".w"));
			removeBorder(hex, hexCloseTo.e, $(hex[j]).children(".e"));
			removeBorder(hex, hexCloseTo.sw, $(hex[j]).children(".sw"));
			removeBorder(hex, hexCloseTo.se, $(hex[j]).children(".se"));
		}
	}
};

function removeBorder(hex, hexName, borderToHide) {
	if (hexName === "") return;

	for (var i = 0; i < hex.length; i++) {
		if ($(hex[i])[0].attributes["name"].value === hexName){
			borderToHide.addClass("hide");
			return;
		}
	}
};

function getHexNameCloseTo(hexName) {
	// We should have 2 to 6 hexagones
	// And 0 to 6 hexagones of the same faction
	var row = hexName.substring(0, 1);
	var col = parseInt(hexName.substring(1, 3));

	var nw = "";
	var ne = "";
	var sw = "";
	var se = "";
	var w = "";
	var e = "";

	// The hexagon in param is B2
	var shortRow = isShortRow(row);
	if (shortRow === false){
		// Row A C E G I
		//   A2  A3
		// B1  B2  B3
		//   C2  C3	
		if (row !== "a"){
			// Nothing before row A
			nw = previousRow(row) + col;
			ne = previousRow(row) + parseInt(col + 1);
		}

		sw = nextRow(row) + col;
		se = nextRow(row) + parseInt(col + 1);
	}
	else{
		// Row B D F H J
		//   A1  A2
		// B1  B2  B3
		//   C1  C2
		nw = previousRow(row) + parseInt(col - 1);
		ne = previousRow(row) + col;

		if (row !== "j")
		{
			// Nothing after row J
			sw = nextRow(row) + parseInt(col - 1);
			se = nextRow(row) + col;
		}
	}

	if (col >= 1){
		// Nothing before col 1
		w = row + parseInt(col - 1);
	}
		

	if (col < 28 && !shortRow || col < 27 && shortRow){
		// Nothing after col 27 / 28
		e = row + parseInt(col + 1);
	}
		

	return { nw, ne, w, e, sw, se };
};

function nextRow(row) {
	if (row === "j")
		return "";
	else
		return String.fromCharCode(row.charCodeAt(0) + 1);
};

function isShortRow(row){
	return row === "a" || row === "c" || row === "e" || row === "g" || row === "i" ? false : true;
};

function previousRow(row) {
	if (row === "a")
		return "";
	else
		return String.fromCharCode(row.charCodeAt(0) - 1);
};

function createBorder(faction, elementName, top, left) {
    if (faction != "None") {
        var factionColor = getFactionColorFromId(faction);
        var position = "top:" + top + "px; left:" + left + "px";

        return "<div class='isBorder' data-faction='" + faction + "' name='" + elementName + "' >" +
            "<svg class='border ne' style='" + position + "'>" +
            "<polygon points='115,1 229,67 229,69 113,2' style='fill:" + factionColor + "'/>" +
            "</svg>" +
            "<svg class='border e' style='" + position + "'>" +
            "<polygon points='229,67 229,200 227,201 227,66' style='fill:" + factionColor + "'/>" +
            "</svg>" +
            "<svg class='border se' style='" + position + "'>" +
            "<polygon points='229,200 115,264 113,263 229,198' style='fill:" + factionColor + "'/>" +
            "</svg>" +
            "<svg class='border sw' style='" + position + "'>" +
            "<polygon points='115,264 1,200 1,198 117,263' style='fill:" + factionColor + "'/>" +
            "</svg>" +
            "<svg class='border w' style='" + position + "'>" +
            "<polygon points='1,200 1,67 3,66 3,201' style='fill:" + factionColor + "'/>" +
            "</svg>" +
            "<svg class='border nw' style='" + position + "'>" +
            "<polygon points='1,67 115,1 117,2 1,69' style='fill:" + factionColor + "'/>" +
            "</svg></div>";
    }

    return "";
};

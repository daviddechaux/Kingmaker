function displayNiceDropdownList() {
	setValueAndSort();
	$("#decorationDdlType").ddslick({
		data: ddElementType,
		selectText: "Select Element Type"
	});
	$("#decorationDdl").ddslick({
		height: 300,
		data: ddElement,
		selectText: "Select Icon"
	});

	$("#editDecorationDdlType").ddslick({
		data: ddElementType,
		selectText: "Select Element Type"
	});
	$("#editDecorationDdl").ddslick({
		height: 300,
		data: ddElement,
		selectText: "Select Icon"
	});
};

function displayDropDownFaction(select, selectedFaction, onlyMainFactions) {
	$(".option").remove();

	select.append("<option class='option' selected hidden>Select Faction</option>");
	select.append("<option class='option' value='0'>None</option>");

	var browsableFactions = onlyMainFactions ? getMainFactions() : factions;
	for (var i = 0; i < browsableFactions.length; i++) {
		var currentFaction = browsableFactions[i];

		var id = currentFaction.id;
		var name = currentFaction.name;

		var selected = selectedFaction == id ? "selected" : "";
		var option = "<option class='option' value='" + id + "' " + selected + ">" + name + "</option>";

		select.append(option);
	}
};

function setValueAndSort(){
	ddElement.sort(function(a, b){
		if(a.text < b.text) { return -1; }
		if(a.text > b.text) { return 1; }
		return 0;
	});

	for (var i = 0; i < ddElement.length; i++) {
		ddElement[i]["value"] = i;
		ddElement[i]["text"] = ddElement[i]["text"].replace("army-", "");
		ddElement[i]["userClass"] = "icon-" + ddElement[i]["text"].toLowerCase();
	}
};

// Dropdown element type
var ddElementType = [
	{
		"value": 0,
		"userClass": "icon-village",
		"text": "Building"
	},
	{
		"value": 1,
		"userClass": "icon-wheat",
		"text": "Resources"
	},
	{
		"value": 2,
		"userClass": "icon-horsemen",
		"text": "Armies"
	},
	{
		"value": 3,
		"userClass": "icon-sign",
		"text": "Misc"
	}
]

// Dropdown element
var ddElement = [
	{ "text": "Bridge" },
	{ "text": "Cabane" },
	{ "text": "Cairn" },
	{ "text": "Camp" },
	{ "text": "Candle" },
	{ "text": "Cave" },
	{ "text": "Clay" },
	{ "text": "Cottage" },
	{ "text": "Crow" },
	{ "text": "Deadtree" },
	{ "text": "Dolmen" },
	{ "text": "Dragon" },
	{ "text": "Elk" },
	{ "text": "Farm" },
	{ "text": "Ferry" },
	{ "text": "Flower" },
	{ "text": "Hill" },
	{ "text": "Hive" },
	{ "text": "House" },
	{ "text": "Inn" },
	{ "text": "Lake" },
	{ "text": "Lys" },
	{ "text": "Mine" },
	{ "text": "Mushroom" },
	{ "text": "Raspberry" },
	{ "text": "Road" },
	{ "text": "Rock" },
	{ "text": "Ruin" },
	{ "text": "Ruin2" },
	{ "text": "Sign" },
	{ "text": "Source" },
	{ "text": "Spiderweb" },
	{ "text": "Stag" },
	{ "text": "Statue" },
	{ "text": "Strain" },
	{ "text": "Swamp" },
	{ "text": "Toad" },
	{ "text": "Tomb" },
	{ "text": "Village" },
	{ "text": "Wheat" },
	{ "text": "Castle" },
	{ "text": "Tree" },
	{ "text": "Sunflower" },
	{ "text": "Tumulus" },
	{ "text": "Lizard" },
	{ "text": "Grove" },
	{ "text": "Watchtower" },
	{ "text": "Castle2" },
	{ "text": "Fortin" },
	{ "text": "Griffon" },
	{ "text": "army-Footmen" },
	{ "text": "army-Horsemen" },
	{ "text": "army-Bowmen" },
	{ "text": "Feather" },
	{ "text": "Nest" },
	{ "text": "Owlbear" },
	{ "text": "Bird" },
	{ "text": "Horse" },
	{ "text": "Battle" },
	{ "text": "Village2" }
];
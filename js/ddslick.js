function displayNiceDropdownList() {
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
	{
		"value": 0,
		"userClass": "icon-bridge",
		"text": "Bridge"
	},
	{
		"value": 1,
		"userClass": "icon-cabane",
		"text": "Cabane"
	},
	{
		"value": 2,
		"userClass": "icon-cairn",
		"text": "Cairn"
	},
	{
		"value": 3,
		"userClass": "icon-camp",
		"text": "Camp"
	},
	{
		"value": 4,
		"userClass": "icon-candle",
		"text": "Candle"
	},
	{
		"value": 5,
		"userClass": "icon-cave",
		"text": "Cave"
	},
	{
		"value": 6,
		"userClass": "icon-clay",
		"text": "Clay"
	},
	{
		"value": 7,
		"userClass": "icon-cottage",
		"text": "Cottage"
	},
	{
		"value": 8,
		"userClass": "icon-crow",
		"text": "Crow"
	},
	{
		"value": 9,
		"userClass": "icon-deadtree",
		"text": "Deadtree"
	},
	{
		"value": 10,
		"userClass": "icon-dolmen",
		"text": "Dolmen"
	},
	{
		"value": 11,
		"userClass": "icon-dragon",
		"text": "Dragon"
	},
	{
		"value": 12,
		"userClass": "icon-elk",
		"text": "Elk"
	},
	{
		"value": 13,
		"userClass": "icon-farm",
		"text": "Farm"
	},
	{
		"value": 14,
		"userClass": "icon-ferry",
		"text": "Ferry"
	},
	{
		"value": 15,
		"userClass": "icon-flower",
		"text": "Flower"
	},
	{
		"value": 16,
		"userClass": "icon-hill",
		"text": "Hill"
	},
	{
		"value": 17,
		"userClass": "icon-hive",
		"text": "Hive"
	},
	{
		"value": 18,
		"userClass": "icon-house",
		"text": "House"
	},
	{
		"value": 19,
		"userClass": "icon-inn",
		"text": "Inn"
	},
	{
		"value": 20,
		"userClass": "icon-lake",
		"text": "Lake"
	},
	{
		"value": 21,
		"userClass": "icon-lys",
		"text": "Lily"
	},
	{
		"value": 22,
		"userClass": "icon-mine",
		"text": "Mine"
	},
	{
		"value": 23,
		"userClass": "icon-mushroom",
		"text": "Mushroom"
	},
	{
		"value": 24,
		"userClass": "icon-raspberry",
		"text": "Raspberry"
	},
	{
		"value": 25,
		"userClass": "icon-road",
		"text": "Road"
	},
	{
		"value": 26,
		"userClass": "icon-rock",
		"text": "Rock"
	},
	{
		"value": 27,
		"userClass": "icon-ruin",
		"text": "Ruin"
	},
	{
		"value": 28,
		"userClass": "icon-ruin2",
		"text": "Ruin"
	},
	{
		"value": 29,
		"userClass": "icon-sign",
		"text": "Sign"
	},
	{
		"value": 30,
		"userClass": "icon-source",
		"text": "Source"
	},
	{
		"value": 31,
		"userClass": "icon-spiderweb",
		"text": "Spider-web"
	},
	{
		"value": 32,
		"userClass": "icon-stag",
		"text": "Stag"
	},
	{
		"value": 33,
		"userClass": "icon-statue",
		"text": "Statue"
	},
	{
		"value": 34,
		"userClass": "icon-strain",
		"text": "Strain"
	},
	{
		"value": 35,
		"userClass": "icon-swamp",
		"text": "Swamp"
	},
	{
		"value": 36,
		"userClass": "icon-toad",
		"text": "Toad"
	},
	{
		"value": 37,
		"userClass": "icon-tomb",
		"text": "Tomb"
	},
	{
		"value": 38,
		"userClass": "icon-village",
		"text": "Village"
	},
	{
		"value": 39,
		"userClass": "icon-wheat",
		"text": "Wheat"
	},
	{
		"value": 40,
		"userClass": "icon-footmen",
		"text": "Footmen"
	},
	{
		"value": 41,
		"userClass": "icon-horsemen",
		"text": "Horsemen"
	},
	{
		"value": 42,
		"userClass": "icon-bowmen",
		"text": "Bowmen"
	},
	{
		"value": 43,
		"userClass": "icon-castle",
		"text": "Castle"
	}
];
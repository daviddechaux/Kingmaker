function displayNiceDropdownList() {
	$("#decorationDdlType").ddslick({
		data: ddElementType,
		selectText: "Select element type"
	});

	$("#decorationDdl").ddslick({
		height: 300,
		data: ddElement,
		selectText: "Select an icon"
	});


	$("#editDecorationDdlType").ddslick({
		data: ddElementType,
		selectText: "Select element type"
	});
	$("#editDecorationDdl").ddslick({
		height: 300,
		data: ddElement,
		selectText: "Select an icon"
	});
};

function displayDropDownFaction(select, selectedFaction) {
	$(".option").remove();

	select.append("<option class='option' value='0'>None</option>");

	for (var i = 0; i < factions.length; i++) {
		var currentFaction = factions[i];

		var id = currentFaction.id;
		var name = currentFaction.name;

		var selected = selectedFaction === id ? "selected" : "";
		var option = "<option class='option' value='" + id + "' " + selected + " >" + name + "</option>";

		select.append(option);
	}
};


// Dropdown element type
var ddElementType = [
	{
		"value": 0,
		"selected": false,
		"description": "",
		"userClass": "icon-village",
		"text": "Building"
	},
	{
		"value": 1,
		"selected": false,
		"description": "",
		"userClass": "icon-wheat",
		"text": "Resources"
	},
	{
		"value": 2,
		"selected": false,
		"description": "",
		"userClass": "icon-sign",
		"text": "Misc"
	}
]

// Dropdown element
var ddElement = [
	{
		"value": 0,
		"selected": false,
		"description": "",
		"userClass": "icon-bridge",
		"text": "Bridge"
	},
	{
		"value": 1,
		"selected": false,
		"description": "",
		"userClass": "icon-cabane",
		"text": "Cabane"
	},
	{
		"value": 2,
		"selected": false,
		"description": "",
		"userClass": "icon-cairn",
		"text": "Cairn"
	},
	{
		"value": 3,
		"selected": false,
		"description": "",
		"userClass": "icon-camp",
		"text": "Camp"
	},
	{
		"value": 4,
		"selected": false,
		"description": "",
		"userClass": "icon-cave",
		"text": "Cave"
	},
	{
		"value": 5,
		"selected": false,
		"description": "",
		"userClass": "icon-cottage",
		"text": "Cottage"
	},
	{
		"value": 6,
		"selected": false,
		"description": "",
		"userClass": "icon-clay",
		"text": "Clay"
	},
	{
		"value": 7,
		"selected": false,
		"description": "",
		"userClass": "icon-deadtree",
		"text": "Deadtree"
	},
	{
		"value": 8,
		"selected": false,
		"description": "",
		"userClass": "icon-dolmen",
		"text": "Dolmen"
	},
	{
		"value": 9,
		"selected": false,
		"description": "",
		"userClass": "icon-dragon",
		"text": "Dragon"
	},
	{
		"value": 10,
		"selected": false,
		"description": "",
		"userClass": "icon-elk",
		"text": "Elk"
	},
	{
		"value": 11,
		"selected": false,
		"description": "",
		"userClass": "icon-ferry",
		"text": "Ferry"
	},
	{
		"value": 12,
		"selected": false,
		"description": "",
		"userClass": "icon-hill",
		"text": "Hill"
	},
	{
		"value": 13,
		"selected": false,
		"description": "",
		"userClass": "icon-hive",
		"text": "Hive"
	},
	{
		"value": 14,
		"selected": false,
		"description": "",
		"userClass": "icon-house",
		"text": "House"
	},
	{
		"value": 15,
		"selected": false,
		"description": "",
		"userClass": "icon-lac",
		"text": "Lac"
	},
	{
		"value": 16,
		"selected": false,
		"description": "",
		"userClass": "icon-lys",
		"text": "Lily"
	},
	{
		"value": 17,
		"selected": false,
		"description": "",
		"userClass": "icon-mine",
		"text": "Mine"
	},
	{
		"value": 18,
		"selected": false,
		"description": "",
		"userClass": "icon-raspberry",
		"text": "Raspberry"
	},
	{
		"value": 19,
		"selected": false,
		"description": "",
		"userClass": "icon-road",
		"text": "Road"
	},
	{
		"value": 20,
		"selected": false,
		"description": "",
		"userClass": "icon-rock",
		"text": "Rock"
	},
	{
		"value": 21,
		"selected": false,
		"description": "",
		"userClass": "icon-ruin",
		"text": "Ruin"
	},
	{
		"value": 22,
		"selected": false,
		"description": "",
		"userClass": "icon-ruin2",
		"text": "Ruin"
	},
	{
		"value": 23,
		"selected": false,
		"description": "",
		"userClass": "icon-sign",
		"text": "Sign"
	},
	{
		"value": 24,
		"selected": false,
		"description": "",
		"userClass": "icon-source",
		"text": "Source"
	},
	{
		"value": 25,
		"selected": false,
		"description": "",
		"userClass": "icon-spiderweb",
		"text": "Spider-web"
	},
	{
		"value": 26,
		"selected": false,
		"description": "",
		"userClass": "icon-stag",
		"text": "Stag"
	},
	{
		"value": 27,
		"selected": false,
		"description": "",
		"userClass": "icon-statue",
		"text": "Statue"
	},
	{
		"value": 28,
		"selected": false,
		"description": "",
		"userClass": "icon-souche",
		"text": "Stump"
	},
	{
		"value": 29,
		"selected": false,
		"description": "",
		"userClass": "icon-swamp",
		"text": "Swamp"
	},
	{
		"value": 30,
		"selected": false,
		"description": "",
		"userClass": "icon-toad",
		"text": "Toad"
	},
	{
		"value": 31,
		"selected": false,
		"description": "",
		"userClass": "icon-tomb",
		"text": "Tomb"
	},
	{
		"value": 32,
		"selected": false,
		"description": "",
		"userClass": "icon-village",
		"text": "Village"
	},
	{
		"value": 33,
		"selected": false,
		"description": "",
		"userClass": "icon-wheat",
		"text": "Wheat"
	}
];
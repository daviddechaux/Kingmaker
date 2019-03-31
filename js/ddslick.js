function displayNiceDropdownList(){
    //$("#decorationDdlType").ddslick('destroy');
    $("#decorationDdlType").ddslick({
        data: ddElementType,
        selectText: "Select element type"
    });

    //$("#decorationDdl").ddslick('destroy');
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

function displayDropDownFaction(select){
    select.ddslick('destroy');

    var factionsDiv = $(".factions");

    var factionsList = [];
    for(var i = 0; i < factionsDiv.children().length; i++){
        var currentFaction = factionsDiv.children()[i];
        
        var id = currentFaction.children[0].attributes["data-factionid"].value;
        var name = currentFaction.children[0].attributes["value"].value;

        factionsList.push({"value": id, "text": name, "selected": false, "description": "", "userClass": "icon-faction"});
	}

    console.log(factionsList);
    select.ddslick({
        height: 100,
        data: factionsList,
        selectText: "Claim to faction"
    });
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
		"userClass": "icon-clay",
		"text": "Clay"
	},
	{
		"value": 1,
		"selected": false,
		"description": "",
		"userClass": "icon-ferry",
		"text": "Ferry"
	},
	{
		"value": 2,
		"selected": false,
		"description": "",
		"userClass": "icon-wheat",
		"text": "Wheat"
	},
	{
		"value": 3,
		"selected": false,
		"description": "",
		"userClass": "icon-cabane",
		"text": "Cabane"
	},
	{
		"value": 4,
		"selected": false,
		"description": "",
		"userClass": "icon-camp",
		"text": "Camp"
	},
	{
		"value": 5,
		"selected": false,
		"description": "",
		"userClass": "icon-hill",
		"text": "Hill"
	},
	{
		"value": 6,
		"selected": false,
		"description": "",
		"userClass": "icon-cottage",
		"text": "Cottage"
	},
	{
		"value": 7,
		"selected": false,
		"description": "",
		"userClass": "icon-dolmen",
		"text": "Dolmen"
	},
	{
		"value": 8,
		"selected": false,
		"description": "",
		"userClass": "icon-dragon",
		"text": "Dragon"
	},
	{
		"value": 9,
		"selected": false,
		"description": "",
		"userClass": "icon-elk",
		"text": "Elk"
	},
	{
		"value": 10,
		"selected": false,
		"description": "",
		"userClass": "icon-cave",
		"text": "Cave"
	},
	{
		"value": 11,
		"selected": false,
		"description": "",
		"userClass": "icon-house",
		"text": "House"
	},
	{
		"value": 12,
		"selected": false,
		"description": "",
		"userClass": "icon-mine",
		"text": "Mine"
	},
	{
		"value": 13,
		"selected": false,
		"description": "",
		"userClass": "icon-path",
		"text": "Path"
	},
	{
		"value": 14,
		"selected": false,
		"description": "",
		"userClass": "icon-bridge",
		"text": "Bridge"
	},
	{
		"value": 15,
		"selected": false,
		"description": "",
		"userClass": "icon-raspberry",
		"text": "Raspberry"
	},
	{
		"value": 16,
		"selected": false,
		"description": "",
		"userClass": "icon-rock",
		"text": "Rock"
	},
	{
		"value": 17,
		"selected": false,
		"description": "",
		"userClass": "icon-hive",
		"text": "Hive"
	},
	{
		"value": 18,
		"selected": false,
		"description": "",
		"userClass": "icon-ruin",
		"text": "Ruin"
	},
	{
		"value": 19,
		"selected": false,
		"description": "",
		"userClass": "icon-ruin2",
		"text": "Ruin"
	},
	{
		"value": 20,
		"selected": false,
		"description": "",
		"userClass": "icon-sign",
		"text": "Sign"
	},
	{
		"value": 21,
		"selected": false,
		"description": "",
		"userClass": "icon-source",
		"text": "Source"
	},
	{
		"value": 22,
		"selected": false,
		"description": "",
		"userClass": "icon-spiderweb",
		"text": "Spider-web"
	},
	{
		"value": 23,
		"selected": false,
		"description": "",
		"userClass": "icon-stag",
		"text": "Stag"
	},
	{
		"value": 24,
		"selected": false,
		"description": "",
		"userClass": "icon-swamp",
		"text": "Swamp"
	},
	{
		"value": 25,
		"selected": false,
		"description": "",
		"userClass": "icon-tomb",
		"text": "Tomb"
	},
	{
		"value": 26,
		"selected": false,
		"description": "",
		"userClass": "icon-deadtree",
		"text": "Deadtree"
	},
	{
		"value": 27,
		"selected": false,
		"description": "",
		"userClass": "icon-village",
		"text": "village"
	}
];
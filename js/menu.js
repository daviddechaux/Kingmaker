function displayMapOpenner(){
    var menu = $(".openOrCreateMap");
    menu.removeClass("hide");

    var offsetHeight = $(".openOrCreateMap").height() / 2;
    var offsetWidth = $(".openOrCreateMap").width() / 2;

    var width = window.innerWidth / 2;
    var height = window.innerHeight / 2;

    var offsetX = window.scrollX;
    var offsetY = window.scrollY;

    menu.css('left', width + offsetX - offsetWidth + 'px');
    menu.css('top', height + offsetY - offsetHeight + 'px');
};


// Dropdown element type
var ddElementType = [
	{
		"value": 0,
		"selected": false,
		"description": "",
		"imageSrc": "pics/village.png",
		"text": "Building"
    },
    {
		"value": 1,
		"selected": false,
		"description": "",
		"imageSrc": "pics/ble.png",
		"text": "Resources"
    },
    {
		"value": 2,
		"selected": false,
		"description": "",
		"imageSrc": "pics/sign.png",
		"text": "Misc"
	}   
]

// Dropdown element
var ddElement = [
	{
		"value": 0,
		"selected": false,
		"description": "",
		"imageSrc": "pics/argile.png",
		"text": "Argile"
	},
	{
		"value": 1,
		"selected": false,
		"description": "",
		"imageSrc": "pics/bac.png",
		"text": "Ferry"
	},
	{
		"value": 2,
		"selected": false,
		"description": "",
		"imageSrc": "pics/ble.png",
		"text": "Ble"
	},
	{
		"value": 3,
		"selected": false,
		"description": "",
		"imageSrc": "pics/cabane.png",
		"text": "Cabane"
	},
	{
		"value": 4,
		"selected": false,
		"description": "",
		"imageSrc": "pics/camp.png",
		"text": "Camp"
	},
	{
		"value": 5,
		"selected": false,
		"description": "",
		"imageSrc": "pics/colline.png",
		"text": "Hill"
	},
	{
		"value": 6,
		"selected": false,
		"description": "",
		"imageSrc": "pics/cottage.png",
		"text": "Cottage"
	},
	{
		"value": 7,
		"selected": false,
		"description": "",
		"imageSrc": "pics/dolmen.png",
		"text": "Dolmen"
	},
	{
		"value": 8,
		"selected": false,
		"description": "",
		"imageSrc": "pics/dragon.png",
		"text": "Dragon"
	},
	{
		"value": 9,
		"selected": false,
		"description": "",
		"imageSrc": "pics/elk.png",
		"text": "Elk"
	},
	{
		"value": 10,
		"selected": false,
		"description": "",
		"imageSrc": "pics/grotte.png",
		"text": "Cave"
	},
	{
		"value": 11,
		"selected": false,
		"description": "",
		"imageSrc": "pics/house.png",
		"text": "House"
	},
	{
		"value": 12,
		"selected": false,
		"description": "",
		"imageSrc": "pics/mine.png",
		"text": "Mine"
	},
	{
		"value": 13,
		"selected": false,
		"description": "",
		"imageSrc": "pics/path.png",
		"text": "Path"
	},
	{
		"value": 14,
		"selected": false,
		"description": "",
		"imageSrc": "pics/pont.png",
		"text": "Bridge"
	},
	{
		"value": 15,
		"selected": false,
		"description": "",
		"imageSrc": "pics/raspberry.png",
		"text": "Raspberry"
	},
	{
		"value": 16,
		"selected": false,
		"description": "",
		"imageSrc": "pics/rock.png",
		"text": "Rock"
	},
	{
		"value": 17,
		"selected": false,
		"description": "",
		"imageSrc": "pics/ruche.png",
		"text": "Ruche"
	},
	{
		"value": 18,
		"selected": false,
		"description": "",
		"imageSrc": "pics/ruine.png",
		"text": "Ruin"
	},
	{
		"value": 19,
		"selected": false,
		"description": "",
		"imageSrc": "pics/ruinecyclop.png",
		"text": "Ruin cyclop"
	},
	{
		"value": 20,
		"selected": false,
		"description": "",
		"imageSrc": "pics/sign.png",
		"text": "Sign"
	},
	{
		"value": 21,
		"selected": false,
		"description": "",
		"imageSrc": "pics/source.png",
		"text": "Source"
	},
	{
		"value": 22,
		"selected": false,
		"description": "",
		"imageSrc": "pics/spider.png",
		"text": "Spider-web"
	},
	{
		"value": 23,
		"selected": false,
		"description": "",
		"imageSrc": "pics/stag.png",
		"text": "Stag"
	},
	{
		"value": 24,
		"selected": false,
		"description": "",
		"imageSrc": "pics/swamp.png",
		"text": "Swamp"
	},
	{
		"value": 25,
		"selected": false,
		"description": "",
		"imageSrc": "pics/tombe.png",
		"text": "Tumb"
	},
	{
		"value": 26,
		"selected": false,
		"description": "",
		"imageSrc": "pics/tree.png",
		"text": "Tree"
	},
	{
		"value": 27,
		"selected": false,
		"description": "",
		"imageSrc": "pics/village.png",
		"text": "village"
	}
];
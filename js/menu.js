function displayMapOpenner() {
	if (!isMapLoaded) {
		var menu = $(".openOrCreateMap");
		menu.css("display", "flex");

		centerThis(menu);
	}
};

function displayQuestion() {
	$(".editorBackground").show();
	$(".question").show();

	centerThis($(".question"));
};

function centerThis(obj) {
	var offsetHeight = obj.height() / 2;
	var offsetWidth = obj.width() / 2;

	var width = window.innerWidth / 2;
	var height = window.innerHeight / 2;

	var offsetX = window.scrollX;
	var offsetY = window.scrollY;

	obj.css('left', width + offsetX - offsetWidth + 'px');
	obj.css('top', height + offsetY - offsetHeight + 'px');
}

function closeMenuDecoration() {
	$(".hideableMenu").hide();
	$(".editorBackground").hide();
};

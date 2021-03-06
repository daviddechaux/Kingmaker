# Kingmaker interactive map
The app is an interactive map for the Kingmaker campaign.    
It is **not** made for the [video game](https://owlcatgames.com/) but for the [paper version](https://paizo.com/kingmaker) (french version [here](https://www.black-book-editions.fr/catalogue.php?id=29)).  

The map has been done by [Jon Pintar](https://jonpintar.com/).  
You can either use the [site](http://kerchiefed-turnarou.000webhostapp.com/) or copy everything in local.  

> *Last website update : 09/04/2020 22h00*

### Copyright
Blablabla copyright [Paizo](https://paizo.com/pathfinder) and [Black-book Edition](https://www.black-book-editions.fr/catalogue.php?id=5) for the french version.  
I didn't check for everything.  
However some pics comes from [Vectors Market](https://www.flaticon.com/authors/vectors-market).  
If you think an icon is your (it could be) and you don't want me to use it or you want to have your name on the app, please ask.

### Tools
[PngToSvg](https://picsvg.com/)  
[SvgToFont](http://fontello.com/)  
[Favicon](https://www.favicon-generator.org/)  
[Font infomations](https://creativemarket.com/blog/the-missing-guide-to-font-formats)

### Want something ?
New feature, icons, ... Please ask.  
Just remember that the app is still in development and free.

### Plugin
JS Framework : [jQuery](https://jquery.com/)  
Dropdownlist with pics : [ddSlick](http://designwithpc.com/Plugins/ddSlick) (fix bugs, seems obsolete)   
Nice title display : [Tooltipster](http://iamceege.github.io/tooltipster/)  
Interaction : [Interactjs](http://interactjs.io/)  
Color Picker : [Farbtastic](http://acko.net/blog/farbtastic-jquery-color-picker-plug-in/) (custom for multibox) 

> https://d3js.org/

### To Read 
https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects

## Todo 
- Save before quit
- Toggle menu
- Adjust CSS to have all icon on the same size (more or less)
- Create capital
- "Garnison mode" for troups
- Create Road <= carcasonne style ?
- Unzoom everything
- Move to ES6
- Menu styling
- Add Worldboss'

## In progress
![nnothing](images/todo.gif)

## Maybe 
- Load default file from web (currently data are store in js) : Cross domain origin issue
- Confirm delete element
- Put the dropdown to the default value
- Add a calendar (or something that display date)
- Find an awesome tokens for the party (choosable by the user ?)
- Localization (FR, ?)
- Possibility to choose map (use the kingmaker video-game map ?) : No fog of war, No default map 
https://drive.google.com/file/d/0B3tF_dcxI0LWMjNqNFY5clFsRjg/edit
https://drive.google.com/file/d/0B2d5Rs815f8bOU80T1ZsUkUtZm8/view http://kingmaker.frozenstar.net/maps/Baseline_Kingmaker_Map.png
- Add a [crown](https://upload.wikimedia.org/wikipedia/commons/8/86/Meuble_h%C3%A9raldique_Couronnes_fran%C3%A7aises.svg) on the player token, and make this crown evolve with the size of the kingdom
- Display save only when add / change stuff

## Known Bugs : 
- New map don't center on player icon (new map)
- Dropdown are too big
- Army mode may not works on existing map
- SaveMap with Misc, on reload Misc is check but don't appear
- Align radio button with label

## Missing icons


## Done :
- Load default map (Must be outdated)
- Load file
- Save file
- Edit elements 
- Hide menu on load file (Create and Load)
- Make elements movable on edit 
- Put js pluggins in local (usefull in plane)
- Make fog manageable (add and remove)
- Add link to the github
- Add link to Jon Pintar's deviant-art page
- Remove element
- Center the menu to open / create map
- Add a class to hide every menu at the same time when clicking on the background (use ".menu" ?)
- Auto-enable checkbox on add item of this type
- Create a font to put icons in it (SVG, free icons / self made)
- After load (or create) center on player token
- Create factions (color element)
- Fog in CSS
- Create hexagones for faction
- RightClick tool 
- Create an element en right click, remove the button
- Custom checkbox CSS
- Add a setting to change the opacity of menu / fog
- Add a favicon
- Switch hex numerotation with radiobutton
- Add army tokens (that must be factionnable)
- Add / delete Subfaction
- Use data instead of crappy css class method like I did

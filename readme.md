# Kingmaker interactive map
The app is an interactive map for the Kingmaker campaign.    
It is **not** made for the [video game](https://owlcatgames.com/) but for the [paper version](https://paizo.com/kingmaker) (french version [here](https://www.black-book-editions.fr/catalogue.php?id=29)). 

You can either use the [site](http://kerchiefed-turnarou.000webhostapp.com/) or copy everything in local.  
> *Last update : 25/04/2019 14h00*

The map has been done by [Jon Pintar](https://jonpintar.com/).

### Copyright
I didn't look after them when I get the pics.  
If you think the icons is your (it could be) and you don't want me to use it or you want to have your name on the app, please ask.

### Tools
[PngToSvg](https://picsvg.com/)  
[SvgToFont](http://fontello.com/)  

### Want something ?
New feature, icons, ... Please ask.  
Just remember that the app is still in development.

### Need help ?
Well ... you can create icons... Please...

### Plugin
[jQuery](https://jquery.com/)  
Dropdownlist with pics : [ddSlick](http://designwithpc.com/Plugins/ddSlick)  
Nice title display : [Tooltipster](http://iamceege.github.io/tooltipster/)  
Interaction : [Interactjs](http://interactjs.io/)  
Color Picker : [Farbtastic](http://acko.net/blog/farbtastic-jquery-color-picker-plug-in/)  
Checkbox Styling : [Pretty-Checkbox](https://lokesh-coder.github.io/pretty-checkbox/) with [UIkit](https://getuikit.com/docs/introduction)

> http://raphaeljs.com/    
> Animating Clip Paths  
> https://d3js.org/

## Todo : 
- Save before quit
- Adjust CSS to have all icon on the same size (more or less)
- Use data instead of crappy css class method like I did
- Add a hint on fields (title) : disable some characteres on names
- Create capital
- Use Lucian POC for Javascript Object
- Add a [crown](https://upload.wikimedia.org/wikipedia/commons/8/86/Meuble_h%C3%A9raldique_Couronnes_fran%C3%A7aises.svg) on the player token, and make this crown evolve with the size of the kingdom
- Add army tokens (that must be factionnable)
- Switch hex numerotation with radiobutton
- Custom CSS on checkbox
- Create Road
- Remove faction
- Add a checkbox to remove transparency on menu

## In progress :


## Maybe : 
- Load default file from web (currently data are store in js) : Cross domain origin issue
- Move the edit box while moving the element
- Confirm delete element
- Add a recently use element : Avoid / destroy and create box ?
- Put the dropdown to the default value
- Use a proper framework to do the stuff done by jQuery (vueJs, React, whateverJs)
- Add a calendar (or something that display date)
- Fill the dropdown automatically instead of using the crappy object
- Find an awesome tokens for the party (choosable by the user ?)
- Localization (FR, ?)
- Possibility to choose map (use the kingmaker video-game map ?) : No fog of war, No default map 
https://drive.google.com/file/d/0B3tF_dcxI0LWMjNqNFY5clFsRjg/edit
https://drive.google.com/file/d/0B2d5Rs815f8bOU80T1ZsUkUtZm8/view http://kingmaker.frozenstar.net/maps/Baseline_Kingmaker_Map.png

## Known Bugs : 
- Change color when faction color change <= is that a bug ?

## Missing icons
- Add element button (top right menu)
- Create element (after clicking on add element)
- Save changes button (on edit element)
- Add faction button (top right menu)


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

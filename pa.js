$( document ).ready(function(){
	
	var filterMenuMoved = false;
	var sortByFileLocation = "any";
	var sortByCategory2 = 100; //0-99 subcategory, 100 everything, 101 filelocation
	var backgroundColour = 0;
	var showValue = 1;
	var pageNumber = 0;
	var itemsPerPage = 10;
	var numberOfPages = 0;
	var pageSize = 10;
	var pageStart = 0;
	var startAndEnd = [0,0,0,0] //[prev START, prev END, cur START, cur END]
	var pageForward = true;
	
	var amountOfImages = 0;
	var testvars = 1;
	var tempTestVars = 1;
	var pageNumberTemp = 0;
	var colours = ["#181917", "#131412", "#FFF", "#000"]; //light colour, dark colour, text colour
			
	var peeps = [
		{"fileLocation":"PH", "fileName":"PH", "name":"PH", "fileDescription": "PH", "showValue":0, "date": "PH", "subcategory": ["isometric", "fanart", "animal", ""]}, //date YYYYMMDD, showValue: 0, hide all but 0; 1, show; 2, WIPs...
		
		{"fileLocation":"AmDad", "fileName":"AD-Roger.png", "name":"Roger", "fileDescription": "13th December 2015<br />American Dad isometric character", "showValue":1, "date": "20151213", "subcategory": ["isometric", "fanart", "animal", ""]},
		
		{"fileLocation":"AssortedAnimals", "fileName":"Dolphin.png", "name":"Dolphin", "fileDescription": "27th July 2015<br />Isometric dolphin", "showValue":1, "date": "20150727", "subcategory": ["isometric", "", "animal", ""]},
		{"fileLocation":"AssortedAnimals", "fileName":"DolphinIcon.png", "name":"Dolphin Icon", "fileDescription": "3rd August 2015<br />Dolphin icon", "showValue":1, "date": "20150803", "subcategory": ["", "", "animal", ""]},
		{"fileLocation":"AssortedAnimals", "fileName":"Fox.png", "name":"Fox", "fileDescription": "27th July 2015<br />Isometric fox", "showValue":1, "date": "20150727", "subcategory": ["isometric", "fanart", "animal", ""]},
		{"fileLocation":"AssortedAnimals", "fileName":"FoxIcon.png", "name":"Fox Icon", "fileDescription": "3rd August 2015<br />Fox icon", "showValue":1, "date": "20150803", "subcategory": ["", "", "animal", ""]},
		{"fileLocation":"AssortedAnimals", "fileName":"FoxIcon2.png", "name":"Firefox Icon", "fileDescription": "3rd August 2015<br />FireFox pixel art icon", "showValue":1, "date": "20150803", "subcategory": ["", "fanart", "animal", ""]},
		{"fileLocation":"AssortedAnimals", "fileName":"Kangaroo1.png", "name":"Kangaroo", "fileDescription": "13th March 2016<br />Isometric kangaroo", "showValue":1, "date": "20160313", "subcategory": ["isometric", "", "animal", ""]},
		{"fileLocation":"AssortedAnimals", "fileName":"Kangaroo2.png", "name":"Boxing Kangaroo", "fileDescription": "13th March 2016<br />Isometric boxing kangaroo", "showValue":1, "date": "20160313", "subcategory": ["isometric", "", "animal", ""]},
		{"fileLocation":"AssortedAnimals", "fileName":"Panda.png", "name":"Panda", "fileDescription": "27th July 2015<br />Isometric panda", "showValue":1, "date": "20150727", "subcategory": ["isometric", "", "animal", ""]},
		{"fileLocation":"AssortedAnimals", "fileName":"PandaIcon.png", "name":"Panda Icon", "fileDescription": "3rd August 2015<br />Panda icon", "showValue":1, "date": "20150803", "subcategory": ["", "", "animal", ""]},
		{"fileLocation":"AssortedAnimals", "fileName":"Tortoise.png", "name":"Tortoise", "fileDescription": "27th July 2015<br />Isometric tortoise", "showValue":1, "date": "20150727", "subcategory": ["isometric", "", "animal", ""]},
		{"fileLocation":"AssortedAnimals", "fileName":"TortoiseIcon.png", "name":"Tortoise Icon", "fileDescription": "3rd August 2015<br />Tortoise icon", "showValue":1, "date": "20150803", "subcategory": ["", "", "animal", ""]},
		{"fileLocation":"AssortedAnimals", "fileName":"Vulture.png", "name":"Vulture", "fileDescription": "10th April 2016<br />Isometric vulture", "showValue":1, "date": "20160410", "subcategory": ["isometric", "", "animal", ""]},
		
		//DO ATLANTIX
		
		{"fileLocation":"Chvrches", "fileName":"Chvrches.png", "name":"Chvrches", "fileDescription": "6th December 2015<br />CHVRCHES EOE fan cover", "showValue":1, "date": "20151206", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"Chvrches", "fileName":"ChvrchesWIP.gif", "name":"Chvrches WIP", "fileDescription": "6th December 2015<br />CHVRCHES EOE fan cover (WIP)", "showValue":2, "date": "20151206", "subcategory": ["", "fanart", "", ""]},
		
		{"fileLocation":"COD", "fileName":"COD4-1.png", "name":"COD4 First Attempt", "fileDescription": "1st August 2010<br />Call of Duty 4 fan art", "showValue":1, "date": "20100801", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"COD", "fileName":"COD4-2.png", "name":"COD4 Second Attempt", "fileDescription": "30th March 2013<br />Call of Duty 4 fan art (2)", "showValue":1, "date": "20130330", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"COD", "fileName":"COD4-Soldier.png", "name":"COD4 Unused assets", "fileDescription": "30th March 2013<br />Call of 4 fan art (2) unused pieces", "showValue":1, "date": "20130330", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"COD", "fileName":"COD4-SoldierEvolution.gif", "name":"COD4 Soldier WIP", "fileDescription": "30th March 2013<br />Call of Duty 4 fan art (2) soldier WIP", "showValue":2, "date": "20130330", "subcategory": ["", "fanart", "", ""]},
		
		{"fileLocation":"Dice", "fileName":"spin_blackgold-2.gif", "name":"Black/gold dice", "fileDescription": "27th August 2015<br />Isometric Dice (black and gold)", "showValue":1, "date": "20150827", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"Dice", "fileName":"spin_blacksilver-2.gif", "name":"Black/silver dice", "fileDescription": "27th August 2015<br />Isometric Dice (black and silver)", "showValue":1, "date": "20150827", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"Dice", "fileName":"spin_whitegold-2.gif", "name":"White/gold dice", "fileDescription": "27th August 2015<br />Isometric Dice (white and gold)", "showValue":1, "date": "20150827", "subcategory": ["isometric", "", "", ""]},
		
		{"fileLocation":"DW", "fileName":"DW-Cyberman.png", "name":"Isometric Cyberman", "fileDescription": "30th August 2014<br />Isometric Cyberman fan art", "showValue":1, "date": "20140830", "subcategory": ["isometric", "fanart", "", ""]},
		{"fileLocation":"DW", "fileName":"DW-Dalek4.gif", "name":"Isometric Dalek", "fileDescription": "30th January 2014<br />Isometric Dalek fan art", "showValue":1, "date": "20140130", "subcategory": ["isometric", "fanart", "", ""]},
		{"fileLocation":"DW", "fileName":"DW-DalekBirthday.png", "name":"Isometric Dalek Birthday", "fileDescription": "10th July 2014<br />Isometric birthday Dalek", "showValue":1, "date": "20140710", "subcategory": ["isometric", "fanart", "", ""]},
		{"fileLocation":"DW", "fileName":"DW-DalekOverTime.gif", "name":"Dalek Evolution WIP", "fileDescription": "20th January 2014<br />Isometric Dalek fan art WIP", "showValue":2, "date": "20140130", "subcategory": ["isometric", "fanart", "", ""]},
		{"fileLocation":"DW", "fileName":"DW-Karen.png", "name":"Karen", "fileDescription": "20th April 2012<br />Karen Gillan pixel art", "showValue":1, "date": "20120420", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"DW", "fileName":"DW-Tardis2.png", "name":"TARDIS", "fileDescription": "5th February 2014<br />Isometric TARDIS fan art", "showValue":1, "date": "20140205", "subcategory": ["isometric", "fanart", "", ""]},
		{"fileLocation":"DW", "fileName":"DW-TARDISOverTime.gif", "name":"TARDIS Evoluton WIP", "fileDescription": "5th February 2014<br />Isometric TARDIS WIP", "showValue":2, "date": "20140205", "subcategory": ["isometric", "fanart", "", ""]},
		{"fileLocation":"DW", "fileName":"DW-Cyb2.png", "name":"Cyberman Portrait", "fileDescription": "15th March 2017<br />", "showValue":1, "date": "20170315", "subcategory": ["", "fanart", "", ""]},
		
		{"fileLocation":"Gintama", "fileName":"GT-Katsura.png", "name":"Katsura", "fileDescription": "22nd January 2014<br />Katsura - fan art", "showValue":1, "date": "20140122", "subcategory": ["", "fanart", "", ""]},
		
		{"fileLocation":"GOW", "fileName":"Kratos.png", "name":"Kratos", "fileDescription": "19th April 2011<br />Kratos from God of War fan art", "showValue":1, "date": "20110419", "subcategory": ["isometric", "fanart", "", ""]},
		
		{"fileLocation":"HeavyRain", "fileName":"HeavyRain.png", "name":"Heavy Rain", "fileDescription": "10th August 2010<br />Heavy Rain fan art", "showValue":1, "date": "20100810", "subcategory": ["", "fanart", "", ""]},
		
		{"fileLocation":"Hopper", "fileName":"LEVEL1.png", "name":"Hopper Level 1", "fileDescription": "2nd June 2012<br />", "showValue":1, "date": "20120602", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"Hopper", "fileName":"LEVEL2.png", "name":"Hopper Level 2", "fileDescription": "2nd June 2012<br />", "showValue":1, "date": "20120602", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"Hopper", "fileName":"LEVEL3.png", "name":"Hopper Level 3", "fileDescription": "2nd June 2012<br />", "showValue":1, "date": "20120602", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"Hopper", "fileName":"LEVEL4.png", "name":"Hopper Level 4", "fileDescription": "2nd June 2012<br />", "showValue":1, "date": "20120602", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"Hopper", "fileName":"LEVEL5.png", "name":"Hopper Level 5", "fileDescription": "2nd June 2012<br />", "showValue":1, "date": "20120602", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"Hopper", "fileName":"LEVEL6.png", "name":"Hopper Level 6", "fileDescription": "2nd June 2012<br />", "showValue":1, "date": "20120602", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"Hopper", "fileName":"LEVEL7.png", "name":"Hopper Level 7", "fileDescription": "2nd June 2012<br />", "showValue":1, "date": "20120602", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"Hopper", "fileName":"LEVEL8.png", "name":"Hopper Level 8", "fileDescription": "2nd June 2012<br />", "showValue":1, "date": "20120602", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"Hopper", "fileName":"bouncyball.gif", "name":"Bouncy Ball", "fileDescription": "2nd June 2010<br />Player bouncing basic", "showValue":1, "date": "20100602", "subcategory": ["isometric", "", "", ""]},
		
		{"fileLocation":"Icons", "fileName":"AfricaIcon.png", "name":"Africa Icon", "fileDescription": "19th July 2015<br />Africa sunset icon", "showValue":1, "date": "20150719", "subcategory": ["", "", "animal", ""]},
		{"fileLocation":"Icons", "fileName":"BlueDot.gif", "name":"'Blue Dot' icon", "fileDescription": "20th April 2012<br />", "showValue":1, "date": "20120420", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"butterflybadge1-2.png", "name":"Butterfly Icon 1", "fileDescription": "31st March 2016<br />", "showValue":1, "date": "20160331", "subcategory": ["", "", "animal", ""]},
		{"fileLocation":"Icons", "fileName":"butterflybadge3-5.gif", "name":"Butterfly Icon 2", "fileDescription": "31st March 2016<br />", "showValue":1, "date": "20160331", "subcategory": ["", "", "animal", ""]},
		{"fileLocation":"Icons", "fileName":"EEGG3.png", "name":"Easter Egg Icon", "fileDescription": "1st April 2016<br />", "showValue":1, "date": "20160401", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"EEGG4.png", "name":"Easter Egg Icon", "fileDescription": "1st April 2016<br />", "showValue":1, "date": "20160401", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"EEGG5.png", "name":"Easter Egg Icon", "fileDescription": "1st April 2016<br />", "showValue":1, "date": "20160401", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"EEGG6.png", "name":"Easter Egg Icon", "fileDescription": "1st April 2016<br />", "showValue":1, "date": "20160401", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"FlagIcons.png", "name":"Flag Icons", "fileDescription": "13th December 2015<br />Various flag icons", "showValue":1, "date": "20151213", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"GuitarIconBronze.gif", "name":"Guitar Icon Bronze", "fileDescription": "1st July 2015<br />", "showValue":1, "date": "20150701", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"GuitarIconSilver.gif", "name":"Guitar Icon Silver", "fileDescription": "1st July 2015<br />", "showValue":1, "date": "20150701", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"GuitarIconGold.gif", "name":"Guitar Icon Gold", "fileDescription": "1st July 2015<br />", "showValue":1, "date": "20150701", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"stpatbadge3.gif", "name":"Heart Pendant Icon", "fileDescription": "10th March 2016<br />", "showValue":1, "date": "20160310", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"vbadge8.gif", "name":"Valentines Icon (2)", "fileDescription": "29th January 2016<br />", "showValue":1, "date": "20160129", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"cake3-4.gif", "name":"Cake Icon", "fileDescription": "22nd June 2016<br />", "showValue":1, "date": "20160622", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"cake3-5.gif", "name":"Cake Icon", "fileDescription": "22nd June 2016<br />", "showValue":1, "date": "20160622", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"bonfire.png", "name":"Bonfire Icon", "fileDescription": "18th April 2016<br />", "showValue":1, "date": "20160418", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Icons", "fileName":"vbadge4.png", "name":"Valentines Icon", "fileDescription": "28th January 2016<br />", "showValue":1, "date": "20160128", "subcategory": ["", "", "", ""]},
		
		{"fileLocation":"IsometricFurni", "fileName":"chairs.png", "name":"Isometric Seats", "fileDescription": "14th March 2016<br />", "showValue":1, "date": "20160314", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"IsometricFurni", "fileName":"floor1-edit.png", "name":"Isometric Polished Wood Floor", "fileDescription": "13th March 2016<br />", "showValue":1, "date": "20160313", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"IsometricFurni", "fileName":"IceCreamVan.png", "name":"Isometric Ice Cream Van", "fileDescription": "20th August 2015<br />", "showValue":1, "date": "20150820", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"IsometricFurni", "fileName":"PoolTable.png", "name":"Isometric Pool Table", "fileDescription": "1st July 2013<br />", "showValue":1, "date": "20130701", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"IsometricFurni", "fileName":"postbox.png", "name":"Isometric Post Box", "fileDescription": "12th March 2016<br />", "showValue":1, "date": "20160312", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"IsometricFurni", "fileName":"desk2.png", "name":"Isometric Desk", "fileDescription": "13th March 2016<br />", "showValue":1, "date": "20160313", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"IsometricFurni", "fileName":"shiprektseat.png", "name":"Isometric Makeshift Seat", "fileDescription": "23rd July 2014<br />", "showValue":1, "date": "20140723", "subcategory": ["isometric", "", "", ""]},		
		
		{"fileLocation":"MGS", "fileName":"IsometricMech.gif", "name":"Isometric Mech", "fileDescription": "28th July 2015<br />Animated, isometric bipedal mech pixel art", "showValue":1, "date": "20150728", "subcategory": ["isometric", "", "", ""]},
		{"fileLocation":"MGS", "fileName":"MGS-BigBossFace.gif", "name":"MGS Big Boss", "fileDescription": "11th May 2013<br />MGS5 fan art", "showValue":1, "date": "20130511", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"MGS", "fileName":"MGS-BigBossFaceWIP.gif", "name":"MGS Big Boss WIP", "fileDescription": "11th May 2013<br />MGS5 fan art (WIP)", "showValue":2, "date": "20130511", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"MGS", "fileName":"MGS-Fox.png", "name":"MGS 'FOX' Icon", "fileDescription": "12th September 2013<br />MGS fan art", "showValue":1, "date": "20130912", "subcategory": ["", "fanart", "animal", ""]},
		{"fileLocation":"MGS", "fileName":"MGS-ShadowMoses.gif", "name":"MGS Shadow Moses", "fileDescription": "7th August 2010<br />MGS4 fan art", "showValue":1, "date": "20100807", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"MGS", "fileName":"MGS-VenomSnakeGlasses.png", "name":"MGS Venom Snake", "fileDescription": "9th July 2014<br />MGS5 fan art", "showValue":1, "date": "20140709", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"MGS", "fileName":"MGS-VenomSnakeGlassesWIP.gif", "name":"MGS Venom Snake WIP", "fileDescription": "9th July 2014<br />MGS5 fan art (WIP)", "showValue":2, "date": "20140709", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"MGS", "fileName":"skullfacegif3.gif", "name":"MGS Skull Face", "fileDescription": "28th January 2015<br />MGS5 fan art", "showValue":1, "date": "20160128", "subcategory": ["", "fanart", "", ""]},

		//revisit later to do isometric furni
		{"fileLocation":"Misc", "fileName":"Acorn-20px.png", "name":"Acorn (small)", "fileDescription": "18th July 2015<br />", "showValue":1, "date": "20150718", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Misc", "fileName":"Acorn-70px.png", "name":"Acorn (large)", "fileDescription": "18th July 2015<br />", "showValue":1, "date": "20150718", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Misc", "fileName":"Champagne.png", "name":"Champagne", "fileDescription": "28th June 2014<br />", "showValue":1, "date": "20140628", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Misc", "fileName":"Hurricane.gif", "name":"Hurricane Experimental/WIP", "fileDescription": "3rd March 2016<br />", "showValue":2, "date": "20160303", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Misc", "fileName":"PJ-Village.png", "name":"Village", "fileDescription": "7th December 2012<br />Mountain village scene", "showValue":1, "date": "20121207", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Misc", "fileName":"PJ-VillageWIP.gif", "name":"Village WIP", "fileDescription": "7th December 2012<br />Mountain village scene WIP", "showValue":2, "date": "20121207", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Misc", "fileName":"QueenFanCoverArt.png", "name":"Queen Fan Album Cover", "fileDescription": "8th May 2014<br />", "showValue":1, "date": "20140508", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"Misc", "fileName":"medals.png", "name":"Medals", "fileDescription": "20th December 2011<br />", "showValue":1, "date": "20111220", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Misc", "fileName":"deathstranding.png", "name":"Death Stranding", "fileDescription": "29th July 2016<br />Death Stranding fan art", "showValue":1, "date": "20160729", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"Misc", "fileName":"deathstrandingwip.gif", "name":"Death Stranding WIP", "fileDescription": "29th July 2016<br />Death Stranding fan art WIP", "showValue":2, "date": "20160729", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"Misc", "fileName":"DB-Vegito1.gif", "name":"Vegito", "fileDescription": "27th November 2016<br />From Dragon Ball Super (fan art)", "showValue":1, "date": "20161116", "subcategory": ["", "fanart", "", ""]},
		{"fileLocation":"Misc", "fileName":"DB-GvF.png", "name":"Goku & Frieza", "fileDescription": "26th August 2017<br />From Dragon Ball Super (fan art)", "showValue":1, "date": "20170827", "subcategory": ["", "fanart", "", ""]},
		
		{"fileLocation":"Pandemonium", "fileName":"PAND-Ninja.gif", "name":"Ninja-esque Characters", "fileDescription": "21st January 2014<br />", "showValue":1, "date": "20140121", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Pandemonium", "fileName":"PAND-NinjaRun.gif", "name":"Ninja-esque Character WIP run cycle", "fileDescription": "30th January 2014<br />", "showValue":2, "date": "20140130", "subcategory": ["", "", "", ""]},
		
		//revisit to sort the rest out
		{"fileLocation":"SquidFighter/RoastChicken", "fileName":"V1Show.png", "name":"Roast Chicken Ship", "fileDescription": "18th January 2016<br />", "showValue":1, "date": "20160118", "subcategory": ["", "", "", ""]},
		{"fileLocation":"SquidFighter/Squid", "fileName":"squidV8Show.png", "name":"Squid Ship (8)", "fileDescription": "12th February 2016<br />", "showValue":1, "date": "20160212", "subcategory": ["", "", "", ""]},
		
		{"fileLocation":"TDS", "fileName":"TDS-gatling_reload.gif", "name":"TDS Gatling Gun Reload", "fileDescription": "1st January 2010<br />", "showValue":1, "date": "20100101", "subcategory": ["", "", "", ""]},
		{"fileLocation":"TDS", "fileName":"TDS-gatling_spin.gif", "name":"TDS Gatling Gun Spin", "fileDescription": "1st January 2010<br />", "showValue":1, "date": "20100101", "subcategory": ["", "", "", ""]},
		{"fileLocation":"TDS", "fileName":"TDS-pistol_reload.gif", "name":"TDS Pistol Reload", "fileDescription": "1st January 2010<br />", "showValue":1, "date": "20100101", "subcategory": ["", "", "", ""]},
		{"fileLocation":"TDS", "fileName":"TDS-rifle_reload.gif", "name":"TDS Rifle Reload", "fileDescription": "1st January 2010<br />", "showValue":1, "date": "20100101", "subcategory": ["", "", "", ""]},
		{"fileLocation":"TDS", "fileName":"TDS-spr_knife.gif", "name":"TDS Knife", "fileDescription": "1st January 2010<br />", "showValue":1, "date": "20100101", "subcategory": ["", "", "", ""]},
		{"fileLocation":"TDS", "fileName":"TDS-spr_playerwalk.gif", "name":"TDS Walk Cycle", "fileDescription": "1st January 2010<br />", "showValue":1, "date": "20100101", "subcategory": ["", "", "", ""]},
		
		//sort armoury
		{"fileLocation":"Weapons", "fileName":"AK-47.png", "name":"AK 47", "fileDescription": "24th April 2015<br />", "showValue":1, "date": "20150424", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Weapons", "fileName":"m16pjiaza.gif", "name":"M16", "fileDescription": "25th October 2010<br />", "showValue":1, "date": "20101025", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Weapons", "fileName":"Revolver.gif", "name":"Revolver Animation", "fileDescription": "7th November 2015<br />", "showValue":1, "date": "20151107", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Weapons", "fileName":"Armoury-2.png", "name":"Assortment of Weapons", "fileDescription": "22th April 2012<br />", "showValue":1, "date": "20120422", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Weapons", "fileName":"weaponsredo1.png", "name":"Assortment of Weapons (2)", "fileDescription": "30th July 2016<br />", "showValue":1, "date": "20160730", "subcategory": ["", "", "", ""]},
		{"fileLocation":"Weapons", "fileName":"weaponsredo2.png", "name":"Assortment of Weapons (3)", "fileDescription": "2nd December 2016<br />", "showValue":1, "date": "20161202", "subcategory": ["", "", "", ""]},
		
		//{"fileLocation":"", "fileName":"", "name":"", "fileDescription": "", "showValue":1, "date": "", "isometric": false},
		
		];

		
	//var peeps2 = [];
		
	var testObj = [
		{"name":"holder", "dob": "20160621"}, //YYYYMMDD
		{"name":"John", "dob": "20160801"},
		{"name":"Jill", "dob": "20120921"},
		{"name":"Alice", "dob": "20161202"},		
		];
		
	function testCreate()
	{
		for(var i = 0; i <= testObj.length - 1; i++)
		{
			$( "#table2" ).append( '<tr><td>' + testObj[i].name + '</td><td>' + testObj[i].dob + '</td></tr>');
		}
	}
		
	function testSort()
	{
		for(var i = 1; i <= testObj.length - 2; i++)
		{
			if(testObj[i].dob >= testObj[i + 1].dob)
			{
				testObj[0].name = testObj[i].name;
				testObj[0].dob = testObj[i].dob;
				
				testObj[i].name = testObj[i + 1].name;
				testObj[i].dob = testObj[i + 1].dob;
				
				testObj[i + 1].name = testObj[0].name;
				testObj[i + 1].dob = testObj[0].dob;
				
			}
			//testObj[i].name = testObj[0].name;
		}
		testCreate();
	}
	
	function rowColours()
	{
		$( ".row0").css("background-color", colours[0]);
		$( ".row1").css("background-color", colours[1]);
		$( ".row0").css("color", colours[2]);
		$( ".row1").css("color", colours[2]);
		$( "a").css("color", colours[2]);
	}
	
	function changeColours()
	{
		for(var i = 1; i <= 6; i++)
		{
			$( "#sort" + i ).css("background-color", colours[1]);
		}
		
		for(var i = 0; i <= 2; i++)
		{
			$( "#option" + i ).css("background-color", colours[1]);
		}
		
		for(var i = 1; i <= 15; i++)
		{
			$("#page" + i + "number").css("background-color", "transparent");
			/*
			$("#page" + i + "number").css("border-top", "1px solid " + colours[2]);
			$("#page" + i + "number").css("border-left", "1px solid " + colours[2]);
			$("#page" + i + "number").css("border-right", "1px solid " + colours[2]);
			*/
			
			if(pageNumber+1 == i)
			{
				$("#page" + i + "number").css("background-color", colours[3]);
			}
		}
		
		rowColours();		
	}
	
	function clearTable()
	{
		$( "#table2" ).html("");
		return 0;
	}
	
	function createTable()
	{	
		$("#pages2").html("");
		backgroundColour = 0;
		amountOfImages = 0;
		numberOfPages = 0;
		
		for(var i = 0; i < peeps.length; i++)
		{
			if(peeps[i].showValue <= showValue && sortByCategory2 == 100) //&& sortByFileLocation == "any"
			{
				amountOfImages++;
			}
			else if(peeps[i].showValue <= showValue && peeps[i].subcategory[sortByCategory2] == "isometric")
			{
				amountOfImages++;
			}
			else if(peeps[i].showValue <= showValue && peeps[i].subcategory[sortByCategory2] == "animal")
			{
				amountOfImages++;
			}	
		}
		//alert(amountOfImages);
		
				
		var additionalPage = 0;
		if(amountOfImages%10 > 1)
		{
			 additionalPage = 1;
		}
		
		for(var i = 0; i <= 15; i++)
		{
			$("#page" + i + "number").css("left", "-1000px");
			$("#page" + i + "number").css("top", "161px");
		}
		
		
		for(var i = 1; i <= amountOfImages/itemsPerPage+additionalPage; i++)
		{
			//$("#pages").append("<a href='#page" + i + "'>" + i + "</a> ");
			if(pageNumber+1 == i)
			{
			//$("#pages2").append("<a href='#' style='background-color:green;' id='changePage" + i + "'>" + i + "</a> ");
				$("#page" + i + "number").css("left", "0" + 12*i + "px");
				$("#page" + i + "number").css("background-color", colours[3]);
				//$("#pageNumbers").css("left", "100px");
				$("#page" + i + "number").css("top", "161px");
			}
			else
			{
			//$("#pages2").append("<a href='?#id=new' id='changePage" + i + "' >" + i + "</a> ");
				$("#page" + i + "number").css("background-color", "");
				$("#page" + i + "number").css("left", "0" + 12*i + "px");
				$("#page" + i + "number").css("top", "161px");
			}
			
			var pageRightVal = i;
			
			numberOfPages++;
		}
	
		var pageRightVal2;
		if(pageRightVal > 9)
			pageRightVal2 = 12*pageRightVal + 30;
		else
			pageRightVal2 = 12*pageRightVal + 24;
		
		$("#pages").css("top", "161px");
		$("#pageNumbers").css("left", "10px");
		$("#pageright").css("left", pageRightVal2 + "px");
		
		for(var i = 1; i <= 10; )//i <= 10*pageNumber; 
		{
			/*if (testvars == 0)
			{
				testvars = i;
			}
			else
			{
				tempvar = testvars;
			}
			/*var newTd = document.createElement("td");
			var newTr = document.createElement("tr");
			var node = document.createTextNode("this is new");*/
			
			
			if(peeps[testvars].showValue <= showValue && sortByCategory2 == 100) //&& sortByFileLocation == "any"
			{
				$( "#table2" ).append( '<tr class="row' + backgroundColour % 2 + '"><td id="left"><div class="portfolioImagesDiv"><img src="Images/Portfolio/' + peeps[testvars].fileLocation + "/" + peeps[testvars].fileName + '" class="portfolioImages" /></div></td><td id="right">' + peeps[testvars].name + ' <br /> ' + peeps[testvars].fileDescription + ' <br /> <a href="Images/Portfolio/' + peeps[testvars].fileLocation + "/" + peeps[testvars].fileName  + '" target="_new">Open in new tab</a> </td></tr>');
				backgroundColour++;	
				testvars++;
				i++;
				rowColours(); //NEED TO MOVE - EXTREMELY INEFFICIENT
			}
			/*else
			{
				if( peeps[testvars].fileLocation == sortByFileLocation)
				{
					$( "#table2" ).append( '<tr><td><img src="Images/Portfolio/' + peeps[testvars].fileLocation + "/" + peeps[testvars].fileName + '" /></td><td>' + peeps[testvars].fileDescription + '</td><td>' + peeps[testvars].showValue + '</td><td>' + peeps[testvars].date + '</td></tr>');
				}
				else
				{
				
				}
			}*/
			else if(peeps[testvars].showValue <= showValue && peeps[testvars].subcategory[sortByCategory2] == "isometric")
			{
				$( "#table2" ).append( '<tr class="row' + backgroundColour % 2 + '"><td id="left"><div class="portfolioImagesDiv"><img src="Images/Portfolio/' + peeps[testvars].fileLocation + "/" + peeps[testvars].fileName + '" class="portfolioImages" /></div></td><td id="right">' + peeps[testvars].name + ' <br /> ' + peeps[testvars].fileDescription + ' <br /> <a href="Images/Portfolio/' + peeps[testvars].fileLocation + "/" + peeps[testvars].fileName  + '" target="_new">Open in new tab</a> </td></tr>');
				backgroundColour++;
				if(pageForward)
				testvars++;
				i++;
				rowColours(); //NEED TO MOVE - EXTREMELY INEFFICIENT
			}
			else if(peeps[testvars].showValue <= showValue && peeps[testvars].subcategory[sortByCategory2] == "animal")
			{
				$( "#table2" ).append( '<tr class="row' + backgroundColour % 2 + '"><td id="left"><div class="portfolioImagesDiv"><img src="Images/Portfolio/' + peeps[testvars].fileLocation + "/" + peeps[testvars].fileName + '" class="portfolioImages" /></div></td><td id="right">' + peeps[testvars].name + ' <br /> ' + peeps[testvars].fileDescription + ' <br /> <a href="Images/Portfolio/' + peeps[testvars].fileLocation + "/" + peeps[testvars].fileName  + '" target="_new">Open in new tab</a> </td></tr>');
				backgroundColour++;
				testvars++;
				i++;
				rowColours(); //NEED TO MOVE - EXTREMELY INEFFICIENT
			}
			else
			{
				testvars++;
			}
			//alert("testtvars " + testvars + " i " + i);
		}
		
		$( "#table2" ).append('<tr id="emptyrow"><td><br /><br /><br /><br /><br /><br /></td></tr>');
		
		if(pageNumberTemp > 1)
		{
			pageNumberTemp--;
			tempTestVars = testvars;; //do i need this?
			//alert(testvars);
			createTable();
		}
		else if(pageNumberTemp == 1)
		{
			pageNumberTemp--;
			clearTable();
			createTable();
		}
	}
	
	
	function sort(sortMethod) //0 = unordered, 1 = low to high, 2 = high to low [dates], 3 = sort by type (1), 4 = sort by type (2)
	{
		var resort = false;
		var sortMethod = sortMethod;
		
		if(sortMethod == 0) //need to create unorganised list
		{
			for(var i = 1; i <= peeps.length - 2; i++)
			{
				peeps[i] = peeps2[i];
			}
		}
		else if(sortMethod == 1)
		{
			for(var i = 1; i <= peeps.length - 2; i++)
			{
				if(peeps[i].date < peeps[i + 1].date)
				{
					peeps[0].fileLocation = peeps[i].fileLocation;
					peeps[0].fileName = peeps[i].fileName;
					peeps[0].name = peeps[i].name;
					peeps[0].fileDescription = peeps[i].fileDescription;
					peeps[0].showValue = peeps[i].showValue;
					peeps[0].date = peeps[i].date;
					peeps[0].subcategory[0] = peeps[i].subcategory[0];
					peeps[0].subcategory[1] = peeps[i].subcategory[1];
					peeps[0].subcategory[2] = peeps[i].subcategory[2];
					
					peeps[i].fileLocation = peeps[i + 1].fileLocation;
					peeps[i].fileName = peeps[i + 1].fileName;
					peeps[i].name = peeps[i + 1].name;
					peeps[i].fileDescription = peeps[i + 1].fileDescription;
					peeps[i].showValue = peeps[i + 1].showValue;
					peeps[i].date = peeps[i + 1].date;
					peeps[i].subcategory[0] = peeps[i + 1].subcategory[0];
					peeps[i].subcategory[1] = peeps[i + 1].subcategory[1];
					peeps[i].subcategory[2] = peeps[i + 1].subcategory[2];
					
					peeps[i + 1].fileLocation = peeps[0].fileLocation;
					peeps[i + 1].fileName = peeps[0].fileName;
					peeps[i + 1].name = peeps[0].name;
					peeps[i + 1].fileDescription = peeps[0].fileDescription;
					peeps[i + 1].showValue = peeps[0].showValue;
					peeps[i + 1].date = peeps[0].date;
					peeps[i + 1].subcategory[0] = peeps[0].subcategory[0];
					peeps[i + 1].subcategory[1] = peeps[0].subcategory[1];
					peeps[i + 1].subcategory[2] = peeps[0].subcategory[2];
					
					if(i > 1)
					{
						resort = true;
					}
					else
					{
						resort = false;
					}
				}
				//testObj[i].name = testObj[0].name;
			}
			if(resort == false)
			{
				createTable();
			}
			else
			{
				sort(1);
			}
		}
		else if(sortMethod == 2)
		{
			for(var i = 1; i <= peeps.length - 2; i++)
			{
				if(peeps[i].date > peeps[i + 1].date)
				{
					peeps[0].fileLocation = peeps[i].fileLocation;
					peeps[0].fileName = peeps[i].fileName;
					peeps[0].name = peeps[i].name;
					peeps[0].fileDescription = peeps[i].fileDescription;
					peeps[0].showValue = peeps[i].showValue;
					peeps[0].date = peeps[i].date;
					peeps[0].subcategory[0] = peeps[i].subcategory[0];
					peeps[0].subcategory[1] = peeps[i].subcategory[1];
					peeps[0].subcategory[2] = peeps[i].subcategory[2];
					
					peeps[i].fileLocation = peeps[i + 1].fileLocation;
					peeps[i].fileName = peeps[i + 1].fileName;
					peeps[i].name = peeps[i + 1].name;
					peeps[i].fileDescription = peeps[i + 1].fileDescription;
					peeps[i].showValue = peeps[i + 1].showValue;
					peeps[i].date = peeps[i + 1].date;
					peeps[i].subcategory[0] = peeps[i + 1].subcategory[0];
					peeps[i].subcategory[1] = peeps[i + 1].subcategory[1];
					peeps[i].subcategory[2] = peeps[i + 1].subcategory[2];
					
					peeps[i + 1].fileLocation = peeps[0].fileLocation;
					peeps[i + 1].fileName = peeps[0].fileName;
					peeps[i + 1].name = peeps[0].name;
					peeps[i + 1].fileDescription = peeps[0].fileDescription;
					peeps[i + 1].showValue = peeps[0].showValue;
					peeps[i + 1].date = peeps[0].date;
					peeps[i + 1].subcategory[0] = peeps[0].subcategory[0];
					peeps[i + 1].subcategory[1] = peeps[0].subcategory[1];
					peeps[i + 1].subcategory[2] = peeps[0].subcategory[2];
					
					if(i > 1)
					{
						resort = true;
					}
					else
					{
						resort = false;
					}
				}
				//testObj[i].name = testObj[0].name;
			}
			if(resort == false)
			{
				createTable();
			}
			else
			{
				sort(2);
			}
		}
		else if(sortMethod == 3)
		{
			for(var i = 1; i <= peeps.length - 2; i++)
			{
				if(peeps[i].fileLocation > peeps[i + 1].fileLocation)
				{
					peeps[0].fileLocation = peeps[i].fileLocation;
					peeps[0].fileName = peeps[i].fileName;
					peeps[0].name = peeps[i].name;
					peeps[0].fileDescription = peeps[i].fileDescription;
					peeps[0].showValue = peeps[i].showValue;
					peeps[0].date = peeps[i].date;
					peeps[0].subcategory[0] = peeps[i].subcategory[0];
					peeps[0].subcategory[1] = peeps[i].subcategory[1];
					peeps[0].subcategory[2] = peeps[i].subcategory[2];
					
					peeps[i].fileLocation = peeps[i + 1].fileLocation;
					peeps[i].fileName = peeps[i + 1].fileName;
					peeps[i].name = peeps[i + 1].name;
					peeps[i].fileDescription = peeps[i + 1].fileDescription;
					peeps[i].showValue = peeps[i + 1].showValue;
					peeps[i].date = peeps[i + 1].date;
					peeps[i].subcategory[0] = peeps[i + 1].subcategory[0];
					peeps[i].subcategory[1] = peeps[i + 1].subcategory[1];
					peeps[i].subcategory[2] = peeps[i + 1].subcategory[2];
					
					peeps[i + 1].fileLocation = peeps[0].fileLocation;
					peeps[i + 1].fileName = peeps[0].fileName;
					peeps[i + 1].name = peeps[0].name;
					peeps[i + 1].fileDescription = peeps[0].fileDescription;
					peeps[i + 1].showValue = peeps[0].showValue;
					peeps[i + 1].date = peeps[0].date;
					peeps[i + 1].subcategory[0] = peeps[0].subcategory[0];
					peeps[i + 1].subcategory[1] = peeps[0].subcategory[1];
					peeps[i + 1].subcategory[2] = peeps[0].subcategory[2];
					
					if(i > 1)
					{
						resort = true;
					}
					else
					{
						resort = false;
					}
				}
				//testObj[i].name = testObj[0].name;
			}
			if(resort == false)
			{
				createTable();
			}
			else
			{
				sort(3);
			}
		}
		else if(sortMethod == 4)
		{
			for(var i = 1; i <= peeps.length - 2; i++)
			{
				if(peeps[i].fileLocation < peeps[i + 1].fileLocation)
				{
					peeps[0].fileLocation = peeps[i].fileLocation;
					peeps[0].fileName = peeps[i].fileName;
					peeps[0].name = peeps[i].name;
					peeps[0].fileDescription = peeps[i].fileDescription;
					peeps[0].showValue = peeps[i].showValue;
					peeps[0].date = peeps[i].date;
					peeps[0].subcategory[0] = peeps[i].subcategory[0];
					peeps[0].subcategory[1] = peeps[i].subcategory[1];
					peeps[0].subcategory[2] = peeps[i].subcategory[2];
					
					peeps[i].fileLocation = peeps[i + 1].fileLocation;
					peeps[i].fileName = peeps[i + 1].fileName;
					peeps[i].name = peeps[i + 1].name;
					peeps[i].fileDescription = peeps[i + 1].fileDescription;
					peeps[i].showValue = peeps[i + 1].showValue;
					peeps[i].date = peeps[i + 1].date;
					peeps[i].subcategory[0] = peeps[i + 1].subcategory[0];
					peeps[i].subcategory[1] = peeps[i + 1].subcategory[1];
					peeps[i].subcategory[2] = peeps[i + 1].subcategory[2];
					
					peeps[i + 1].fileLocation = peeps[0].fileLocation;
					peeps[i + 1].fileName = peeps[0].fileName;
					peeps[i + 1].name = peeps[0].name;
					peeps[i + 1].fileDescription = peeps[0].fileDescription;
					peeps[i + 1].showValue = peeps[0].showValue;
					peeps[i + 1].date = peeps[0].date;
					peeps[i + 1].subcategory[0] = peeps[0].subcategory[0];
					peeps[i + 1].subcategory[1] = peeps[0].subcategory[1];
					peeps[i + 1].subcategory[2] = peeps[0].subcategory[2];
					
					if(i > 1)
					{
						resort = true;
					}
					else
					{
						resort = false;
					}
				}
				//testObj[i].name = testObj[0].name;
			}
			if(resort == false)
			{
				createTable();
			}
			else
			{
				sort(4);
			}
		}
		else if(sortMethod == 5)
		{
			for(var i = 1; i <= peeps.length - 2; i++)
			{
				if(peeps[i].name > peeps[i + 1].name)
				{
					peeps[0].fileLocation = peeps[i].fileLocation;
					peeps[0].fileName = peeps[i].fileName;
					peeps[0].name = peeps[i].name;
					peeps[0].fileDescription = peeps[i].fileDescription;
					peeps[0].showValue = peeps[i].showValue;
					peeps[0].date = peeps[i].date;
					peeps[0].subcategory[0] = peeps[i].subcategory[0];
					peeps[0].subcategory[1] = peeps[i].subcategory[1];
					peeps[0].subcategory[2] = peeps[i].subcategory[2];
					
					peeps[i].fileLocation = peeps[i + 1].fileLocation;
					peeps[i].fileName = peeps[i + 1].fileName;
					peeps[i].name = peeps[i + 1].name;
					peeps[i].fileDescription = peeps[i + 1].fileDescription;
					peeps[i].showValue = peeps[i + 1].showValue;
					peeps[i].date = peeps[i + 1].date;
					peeps[i].subcategory[0] = peeps[i + 1].subcategory[0];
					peeps[i].subcategory[1] = peeps[i + 1].subcategory[1];
					peeps[i].subcategory[2] = peeps[i + 1].subcategory[2];
					
					peeps[i + 1].fileLocation = peeps[0].fileLocation;
					peeps[i + 1].fileName = peeps[0].fileName;
					peeps[i + 1].name = peeps[0].name;
					peeps[i + 1].fileDescription = peeps[0].fileDescription;
					peeps[i + 1].showValue = peeps[0].showValue;
					peeps[i + 1].date = peeps[0].date;
					peeps[i + 1].subcategory[0] = peeps[0].subcategory[0];
					peeps[i + 1].subcategory[1] = peeps[0].subcategory[1];
					peeps[i + 1].subcategory[2] = peeps[0].subcategory[2];
					
					if(i > 1)
					{
						resort = true;
					}
					else
					{
						resort = false;
					}
				}
				//testObj[i].name = testObj[0].name;
			}
			if(resort == false)
			{
				createTable();
			}
			else
			{
				sort(5);
			}
		}
		else if(sortMethod == 6)
		{
			for(var i = 1; i <= peeps.length - 2; i++)
			{
				if(peeps[i].name < peeps[i + 1].name)
				{
					peeps[0].fileLocation = peeps[i].fileLocation;
					peeps[0].fileName = peeps[i].fileName;
					peeps[0].name = peeps[i].name;
					peeps[0].fileDescription = peeps[i].fileDescription;
					peeps[0].showValue = peeps[i].showValue;
					peeps[0].date = peeps[i].date;
					peeps[0].subcategory[0] = peeps[i].subcategory[0];
					peeps[0].subcategory[1] = peeps[i].subcategory[1];
					peeps[0].subcategory[2] = peeps[i].subcategory[2];
					
					peeps[i].fileLocation = peeps[i + 1].fileLocation;
					peeps[i].fileName = peeps[i + 1].fileName;
					peeps[i].name = peeps[i + 1].name;
					peeps[i].fileDescription = peeps[i + 1].fileDescription;
					peeps[i].showValue = peeps[i + 1].showValue;
					peeps[i].date = peeps[i + 1].date;
					peeps[i].subcategory[0] = peeps[i + 1].subcategory[0];
					peeps[i].subcategory[1] = peeps[i + 1].subcategory[1];
					peeps[i].subcategory[2] = peeps[i + 1].subcategory[2];
					
					peeps[i + 1].fileLocation = peeps[0].fileLocation;
					peeps[i + 1].fileName = peeps[0].fileName;
					peeps[i + 1].name = peeps[0].name;
					peeps[i + 1].fileDescription = peeps[0].fileDescription;
					peeps[i + 1].showValue = peeps[0].showValue;
					peeps[i + 1].date = peeps[0].date;
					peeps[i + 1].subcategory[0] = peeps[0].subcategory[0];
					peeps[i + 1].subcategory[1] = peeps[0].subcategory[1];
					peeps[i + 1].subcategory[2] = peeps[0].subcategory[2];
					
					if(i > 1)
					{
						resort = true;
					}
					else
					{
						resort = false;
					}
				}
				//testObj[i].name = testObj[0].name;
			}
			if(resort == false)
			{
				createTable();
			}
			else
			{
				sort(6);
			}
		}
		return 0;
	}
/*
	$( "#filtermenubutton" ).click(function()
	{
		if(!filterMenuMoved)
		{
			$( "#filtermenuoptions" ).css("left", "10px");
			filterMenuMoved = true;
		}
		else
		{
			$( "#filtermenuoptions" ).css("left", "-10000px");
			filterMenuMoved = false;
		}
	});
	*/

	
	$( "#sort1" ).click(function()
	{
		clearTable();
		$( "#sortby" ).html("most recent first");
		pageNumber = 0;
		pageNumberTemp = pageNumber; //DONT NEED PAGENUMBER TEMP
		testvars = 1;
		sort(1);
	});
	
	$( "#sort2" ).click(function()
	{
		clearTable();
		$( "#sortby" ).html("most recent last");
		pageNumber = 0;
		pageNumberTemp = pageNumber;
		testvars = 1;
		sort(2);
	});
	
	$( "#sort3" ).click(function()
	{
		clearTable();
		$( "#sortby" ).html("group (A -> Z)");
		pageNumber = 0;
		pageNumberTemp = pageNumber;
		testvars = 1;
		sort(3);
	});
	
	$( "#sort4" ).click(function()
	{
		clearTable();
		$( "#sortby" ).html("group (Z -> A)");
		pageNumber = 0;
		pageNumberTemp = pageNumber;
		testvars = 1;
		sort(4);
	});
	
	$( "#sort5" ).click(function()
	{
		clearTable();
		$( "#sortby" ).html("name (A -> Z)");
		pageNumber = 0;
		pageNumberTemp = pageNumber;
		testvars = 1;
		sort(5);
	});
	
	$( "#sort6" ).click(function()
	{
		clearTable();
		$( "#sortby" ).html("name (Z -> A)");
		pageNumber = 0;
		pageNumberTemp = pageNumber;
		testvars = 1;
		sort(6);
	});
	
	$( "#option0" ).click(function()
	{
		clearTable();
		$( "#filterby" ).html("all");
		sortByCategory2 = 100;
		pageNumber = 0;
		pageNumberTemp = pageNumber;
		testvars = 1;
		createTable();
	});
	
	$( "#option1" ).click(function()
	{
		clearTable();
		$( "#filterby" ).html("animals");
		sortByCategory2 = 2;
		pageNumber = 0;
		pageNumberTemp = pageNumber;
		testvars = 1;
		createTable();
	});
	
	$( "#option2" ).click(function()
	{
		clearTable();
		$( "#filterby" ).html("isometric");
		if(sortByCategory2 != 0)
		{
			sortByCategory2 = 0;
		}
		else
		{
			sortByCategory2 = 100;
		}
		pageNumber = 0;
		pageNumberTemp = pageNumber;
		testvars = 1;
		createTable();
	});
	
	$( "#option3" ).click(function()
	{
		clearTable();
		sortByFileLocation = "Weapons";
		pageNumber = 0;
		pageNumberTemp = pageNumber;
		testvars = 1;
		createTable();
	});

	$( "#changePage2" ).click(function()
	{
		//alert(2);
		clearTable();
		pageNumber = 2;
		createTable();
	});
	
	$( "#pageleft" ).click(function()
	{
		if(pageNumber >= 1)
		{
			clearTable();
			pageNumber -= 1;
			pageNumberTemp = pageNumber;
			testvars = 1;
			//changeSomeCSSRename();
			createTable();
		}
	});
	
	$( "#pageright" ).click(function()
	{
		if(pageNumber <= numberOfPages -2)
		{
			clearTable();
			pageNumber += 1;
			pageNumberTemp = pageNumber;
			testvars = 1;
			//changeSomeCSSRename();
			createTable();
		}
	});
	

	$( "#page1number" ).click(function()
	{
		clearTable();
		pageNumber = 0;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page2number" ).click(function()
	{
		clearTable();
		pageNumber = 1;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page3number" ).click(function()
	{
		clearTable();
		pageNumber = 2;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page4number" ).click(function()
	{
		clearTable();
		pageNumber = 3;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page5number" ).click(function()
	{
		clearTable();
		pageNumber = 4;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page6number" ).click(function()
	{
		clearTable();
		pageNumber = 5;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page7number" ).click(function()
	{
		clearTable();
		pageNumber = 6;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page8number" ).click(function()
	{
		clearTable();
		pageNumber = 7;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page9number" ).click(function()
	{
		clearTable();
		pageNumber = 8;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page10number" ).click(function()
	{
		clearTable();
		pageNumber = 9;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page11number" ).click(function()
	{
		clearTable();
		pageNumber = 10;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page12number" ).click(function()
	{
		clearTable();
		pageNumber = 11;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page13number" ).click(function()
	{
		clearTable();
		pageNumber = 12;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page14number" ).click(function()
	{
		clearTable();
		pageNumber = 13;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	$( "#page15number" ).click(function()
	{
		clearTable();
		pageNumber = 14;
		pageNumberTemp = pageNumber;
		testvars = 1;
		//changeSomeCSSRename();
		createTable();
	});
	
	//testSort();
	
	//pure javascript
	/*var pathname = window.location.pathname;
	var arrayT = pathname.split("page");
	$("#mobile").html(arrayT[0] + " " + arrayT[1]);*/
	
	var hasKeyDown = false;
	
	$('body').keypress(function(e)
	{
		if(e.keyCode == 37)
		{
			// user has pressed left
			if(pageNumber >= 1 && !hasKeyDown)
			{
				clearTable();
				pageNumber -= 1;
				pageNumberTemp = pageNumber;
				testvars = 1;
				//changeSomeCSSRename();
				createTable();
				hasKeyDown = true;
			}
		}
		if(e.keyCode == 39)
		{
			// user has pressed right
			if(pageNumber <= numberOfPages -2)
			{
				clearTable();
				pageNumber += 1;				
				pageNumberTemp = pageNumber;
				testvars = 1;
				//changeSomeCSSRename();
				createTable();
			}
		}		
	});	
	
	$('body').keyup(function(e)
	{
		hasKeyDown = false;
	});
	
	$( "#sort1" ).mouseover(function()
	{
		$( "#sort1" ).css("background-color", colours[0]);
	});
	$( "#sort1" ).mouseout(function()
	{
		$( "#sort1" ).css("background-color", colours[1]);
	});
	
	$( "#sort2" ).mouseover(function()
	{
		$( "#sort2" ).css("background-color", colours[0]);
	});
	$( "#sort2" ).mouseout(function()
	{
		$( "#sort2" ).css("background-color", colours[1]);
	});
	
	$( "#sort3" ).mouseover(function()
	{
		$( "#sort3" ).css("background-color", colours[0]);
	});
	$( "#sort3" ).mouseout(function()
	{
		$( "#sort3" ).css("background-color", colours[1]);
	});
	
	$( "#sort4" ).mouseover(function()
	{
		$( "#sort4" ).css("background-color", colours[0]);
	});
	$( "#sort4" ).mouseout(function()
	{
		$( "#sort4" ).css("background-color", colours[1]);
	});
	
	$( "#sort5" ).mouseover(function()
	{
		$( "#sort5" ).css("background-color", colours[0]);
	});
	$( "#sort5" ).mouseout(function()
	{
		$( "#sort5" ).css("background-color", colours[1]);
	});
	
	$( "#sort6" ).mouseover(function()
	{
		$( "#sort6" ).css("background-color", colours[0]);
	});
	$( "#sort6" ).mouseout(function()
	{
		$( "#sort6" ).css("background-color", colours[1]);
	});
	
	$( "#option0" ).mouseover(function()
	{
		$( "#option0" ).css("background-color", colours[0]);
	});
	$( "#option0" ).mouseout(function()
	{
		$( "#option0" ).css("background-color", colours[1]);
	});
	
	$( "#option1" ).mouseover(function()
	{
		$( "#option1" ).css("background-color", colours[0]);
	});
	$( "#option1" ).mouseout(function()
	{
		$( "#option1" ).css("background-color", colours[1]);
	});
	
	$( "#option2" ).mouseover(function()
	{
		$( "#option2" ).css("background-color", colours[0]);
	});
	$( "#option2" ).mouseout(function()
	{
		$( "#option2" ).css("background-color", colours[1]);
	});
	
	$( "#dark").click(function()
	{
		colours = ["#181917", "#131412", "#FFF", "#000"];
		changeColours();
	});
	
	$( "#light").click(function()
	{
		colours = ["#cecfc2", "#aaaba1", "#000", "#FFF"];
		changeColours();
	});
	
	$( "#classic").click(function()
	{
		colours = ["#D6D6D6", "#C8C8C8", "#FFF", "#000"];
		changeColours();
	});
	
	function getDbgtzPos()
	{
		var dbgtz = $("#dbgtz");
		var position = dbgtz.position();
		
		if(position.left == "10")
		{
			colours = ["#cecfc2", "#aaaba1", "#000", "#FFF"];
			//alert(colours[0] + " " + position.left);
		}
		else if (position.left == "11")
		{
			colours = ["#181917", "#131412", "#FFF", "#000"];
			//alert(colours[0] + " " + position.left);
		}
		else if (position.left == "12")
		{
			colours = ["#D6D6D6", "#C8C8C8", "#FFF", "#000"];
		}	
		
		changeColours();
	}

	sort(1);
	getDbgtzPos();
});
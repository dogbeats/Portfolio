$( document ).ready(function(){
	var examples = [
		{"fileLocation":"PH", "fileName":"PH", "name":"PH", "fileDescription": "PH", "showValue":0, "date": "PH", "subcategory": ["isometric", "fanart", "animal", ""]}, //date YYYYMMDD, showValue: 0, hide all but 0; 1, show; 2, WIPs...; 3, Smaller Projects
		{"fileLocation":"PH", "fileName":"mr-redman", "name":"Mr. Redman", "fileDescription": "Small game in development since Sept. 2017 - currently working on hit detection (Github link). <br /><a href = 'https://github.com/dogbeats/mrredman' target='_new'>Open in new tab</a>", "showValue":1, "date": "20170901", "link": ""}, 
		{"fileLocation":"PH", "fileName":"box-manipulatiob", "name":"Resizing and Editing a Text Box", "fileDescription": "", "showValue":3, "date": "20000101", "link": "ModifiableTextBox/text_box.html"}, 
		{"fileLocation":"PH", "fileName":"target-practice", "name":"Target Shooting", "fileDescription": "Mini browser game", "showValue":3, "date": "20000101", "link": "target-practice/index.html"}, 
		{"fileLocation":"PH", "fileName":"day-nightcycle", "name":"'Day/Night' Cycle", "fileDescription": "", "showValue":3, "date": "20000101", "link": "sitedaynightcycle-jquery/index.html"}, 
		{"fileLocation":"PH", "fileName":"small-expandbuttons", "name":"Expanding Buttons", "fileDescription": "", "showValue":3, "date": "20000101", "link": "button_expand/index.html"},
		{"fileLocation":"PH", "fileName":"code-editor", "name":"Basic Webpage Editor", "fileDescription": "A basic editor of web pages. Development incomplete.", "showValue":1, "date": "20170131", "link": "photobooth/index.php"},
		{"fileLocation":"PH", "fileName":"photobooth-main", "name":"Incomplete Site", "fileDescription": "An incomplete site which would be used with the above editor.", "showValue":1, "date": "20170131", "link": "photobooth_main/index.php"}, 
		{"fileLocation":"PH", "fileName":"diss-cpp", "name":"Dissertation C++", "fileDescription": "A C++ file which extracts data from a text file.", "showValue":1, "date": "20161201", "link": ""},
		{"fileLocation":"PH", "fileName":"portfoliosite-1", "name":"Portfolio Site (2016)", "fileDescription": "Made with HTML, CSS, JS/JQuery/JSON", "showValue":1, "date": "20000101", "link": ""}, 
		{"fileLocation":"PH", "fileName":"planeshoot2D", "name":"Small 2D Plane Shooter (2016)", "fileDescription": "Made with C++, OpenGL, Irrklang audio library. Small 2D game where the aim is to destroy the turrets. Not currently completed. (Github link) <br /><a href = 'https://github.com/dogbeats/plane2Dshoot' target='_new'>Open in new tab</a>", "showValue":1, "date": "20000101", "link": ""}, 
		{"fileLocation":"PH", "fileName":"hpt", "name":"Hazard Perception Test (2014,2015)", "fileDescription": "Made with HTML, CSS, JS/JQuery. NOTE: Video files not available.", "showValue":1, "date": "20000101", "link": "HPT/developmenthtml.html"}, 
		{"fileLocation":"PH", "fileName":"portfoliosite-2014", "name":"Portfolio Site (2014)", "fileDescription": "2014", "showValue":1, "date": "20000101", "link": "portfolio-layout-2014/index.html"}, 
		{"fileLocation":"PH", "fileName":"portfoliosite-2012", "name":"Portfolio Site (2012)", "fileDescription": "2012", "showValue":1, "date": "20000101", "link": "portfolio-layout-2012/index.html"}, 
	];
	
	var backgroundColour = 0;
	
	var colours = ["#181917", "#131412", "#FFF"];
	
	function rowColours()
	{
		$( ".row0" ).css("background-color", colours[0]);
		$( ".row1" ).css("background-color", colours[1]);
		$( ".row0" ).css("color", colours[2]);
		$( ".row1" ).css("color", colours[2]);
		$( "a" ).css("color", colours[2]);
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
		
		rowColours();		
	}
	
	function drawCodTable()
	{
		for(var i = 1; i < examples.length; i++)
		{
			if(examples[i].showValue == 1)
			{
				if(examples[i].link != "")
					$( "#table2" ).append( '<tr class="row' + backgroundColour % 2 + '"><td id="left"><div class="portfolioImagesDiv"><img src="Images/Portfolio/Coding/' + examples[i].fileName + '.png" class="portfolioImages" /></div></td><td id="right">' + examples[i].name + ' <br />' + examples[i].fileDescription + '<br /> <a href="Codes/' + examples[i].link + '" target="_new">Open in new tab</a> </td></tr>');
				else
					$( "#table2" ).append( '<tr class="row' + backgroundColour % 2 + '"><td id="left"><div class="portfolioImagesDiv"><img src="Images/Portfolio/Coding/' + examples[i].fileName + '.png" class="portfolioImages" /></div></td><td id="right">' + examples[i].name + ' <br />' + examples[i].fileDescription + '<br /> </td></tr>');
			}
			backgroundColour++;
			rowColours();
		}
		
		$( "#table2" ).append('<tr class="row' + backgroundColour % 2 + '"><td id="left"> Smaller Coding Examples <br />Rougher experimentations which could be used directly or indirectly in future projects.</td><td id="right"></td></tr>');
		backgroundColour++;
		
		for(var i = 1; i < examples.length; i++)
		{
			if(examples[i].showValue == 3)
			{
				if(examples[i].link != "")
					$( "#table2" ).append( '<tr class="row' + backgroundColour % 2 + '"><td id="left"><div class="portfolioImagesDiv"><img src="Images/Portfolio/Coding/' + examples[i].fileName + '.png" class="portfolioImages" /></div></td><td id="right">' + examples[i].name + ' <br />' + examples[i].fileDescription + '<br /> <a href="Codes/' + examples[i].link + '" target="_new">Open in new tab</a> </td></tr>');
				else
					$( "#table2" ).append( '<tr class="row' + backgroundColour % 2 + '"><td id="left"><div class="portfolioImagesDiv"><img src="Images/Portfolio/Coding/' + examples[i].fileName + '.png" class="portfolioImages" /></div></td><td id="right">' + examples[i].name + ' <br />' + examples[i].fileDescription + '<br /> </td></tr>');
			}
			backgroundColour++;
			rowColours();
		}
		
		$( "#table2" ).append('<tr id="emptyrow"><td><br /><br /><br /><br /><br /><br /></td></tr>');
	}
	
	$( "#dark").click(function()
	{
		colours = ["#181917", "#131412", "#FFF"];
		changeColours();
	});
	
	$( "#light").click(function()
	{
		colours = ["#cecfc2", "#aaaba1", "#000"];
		changeColours();
	});
	
	$( "#classic").click(function()
	{
		colours = ["#D6D6D6", "#C8C8C8", "#FFF"];
		changeColours();
	});
	
	function getDbgtzPos()
	{
		var dbgtz = $("#dbgtz");
		var position = dbgtz.position();
		
		if(position.left == "10")
		{
			colours = ["#cecfc2", "#aaaba1", "#000"];
			//alert(colours[0] + " " + position.left);
		}
		else if (position.left == "11")
		{
			colours = ["#181917", "#131412", "#FFF"];
			//alert(colours[0] + " " + position.left);
		}
		else if (position.left == "12")
		{
			colours = ["#D6D6D6", "#C8C8C8", "#FFF"];
		}
		
		changeColours();
	}
	
	drawCodTable();
	getDbgtzPos();
});
$( document ).ready(function(){

	var timeout;
	var modifierVal = 0;
	var buttons = 4;
	var buttonNumber;
	var buttonID = 1;
	var buttonHighlighted = [false, false, false, false];
	var haveButtonsRotated = false;
	var pageToLoad = "";
	var opacity = 0;
	var lightMode; //change to pass through to func if global not needed
	var colours = ["#181917", "#131412", "#000"]; //light, dark
	var isCookiesVisible = true;
	
	function changeLightMode()
	{
		if(lightMode == "dark")
		{
			colours = ["#181917", "#131412", "#FFF"];
			$( "#favicon" ).attr("href","Images/Site/favicon-3-1.png");
			$( "body" ).css("background-image", "url(Images/Site/background-1.png)");
			$( "#sun" ).css("display", "none");
		}
		else if(lightMode == "light")
		{
			colours = ["#cecfc2", "#aaaba1", "#000"];
			$( "#favicon" ).attr("href","Images/Site/favicon-3-2.png");
			$( "body" ).css("background-image", "url(Images/Site/background-2.png)");
			$( "#sun" ).css("display", "none");
		}
		else if(lightMode == "classic")
		{
			colours = ["#D6D6D6", "#C8C8C8", "#FFF"];
			$( "#favicon" ).attr("href","Images/Site/favicon-3-3.png");
			$( "body" ).css("background-image", "url(Images/Site/background-classic.png)");
			$( "#sun" ).css("display", "initial");
		}
		
		$( ".buttons" ).css("background-color", colours[1]);
		$( ".buttons" ).css("color", colours[2]);
		$( "#mobile" ).css("color", colours[2]);
		$( "#dark" ).css("color", colours[2]);
		$( "#light" ).css("color", colours[2]);
		$( "#lightmodes" ).css("color", colours[2]);
		$( "#classic" ).css("color", colours[2]);
		$( "#cookies" ).css("color", colours[2]);
	}
	
	function loadPageInitial(pageName)
	{		
		if(opacity < 1)
		{
			opacity = opacity + 0.08;
			$( "#content" ).css('opacity', opacity);
			timeout = setTimeout(function(){ loadPageInitial(pageName); }, 50);
		}
		else
		{
			$("#content").css("height", $("#table2").height() + 400 + "px");
			clearTimeout(timeout);
		}
	

	}
	
	function changePage(pageName)
	{
		if(opacity >= 0)
		{
			opacity = opacity - 0.08;
			$( "#content" ).css('opacity', opacity);
			timeout = setTimeout(function(){ changePage(pageName); }, 50);
		}
		else
		{
			clearTimeout(timeout);
			$( "#content" ).load(pageToLoad);
			var stateObj = { foo: "bar" };
			history.pushState(stateObj, "page 2", pageName);
			timeout = setTimeout(function(){ loadPageInitial(); }, 50);
		}	
	}
	
	function setButtonPosition()
	{
		var scrollTop = window.pageYOffset || window.scrollY;
	
		if(haveButtonsRotated == false)
		{
			var leftPosition = $( window ).innerWidth() - $( "#buttoncontainer" ).width();
			$( "#buttoncontainer" ).css("left", leftPosition/2);
		}
		
		var topPosition = $( window ).innerHeight() - $( "#buttoncontainer" ).height() + scrollTop*2;
		$( "#buttoncontainer" ).css("top", topPosition/2);
		
		$( "#disclaimer" ).css("top", $( "#disclaimer" ).css("top") + 55);
		
		//COOKIES NOTICE POSITION
		$( "#cookies" ).css("left", leftPosition/2);
	}
	
	function resizeButton(buttonNumber, increaseOrDecrease) //1 = increase, 0 = decrease
	{
		var buttonNumber = buttonNumber;
		var increaseOrDecrease = increaseOrDecrease;
		
		if(increaseOrDecrease == 0)
		{
			$( buttonNumber ).css('height', '90px' );
			$( buttonNumber ).css('width', '290px' );
		}
		else if(increaseOrDecrease == 1)
		{
			$( buttonNumber ).css('height', '100px' );
			$( buttonNumber ).css('width', '300px' );
		}
	}
	
	function highlighting(buttonID)
	{
		buttonID = buttonID;
		buttonNumber = "#button" + String(buttonID);
		var highlightId = "#highlightB" + String(buttonID);
		
		$( buttonNumber ).on( "mouseover", function( event ) 
		{
			buttonHighlighted[buttonID - 1] = true;
		});
		
		$( buttonNumber ).on( "mouseout", function( event ) 
		{
			buttonHighlighted[buttonID - 1] = false;
		});
		
		for(var i = 1; i <= buttons; i++)
		{
			buttonNumber = "#button" + String(i);
			if(buttonHighlighted[i - 1] == true)
			{
				$( buttonNumber ).css("background-color", colours[0]);
			}
			else if(buttonHighlighted[i - 1] == false)
			{
				$( buttonNumber ).css("background-color", colours[1]);
			}
		}
	}
	
	//ROTATION/MOVEMENT INIT
	function transformObject(id, perspective, modifyingAspect, modifierTargetValue) //id, 
	{

		modifierVal++;
		$( id ).css('transform', ' perspective( ' + perspective + 'px ) ' + modifyingAspect + '(' + modifierVal + 'deg)');
		$( id ).css('left', ( $( window ).width() - $( id ).width() )/(modifierVal+1) + "px");
		
		if(modifierVal >= modifierTargetValue)
		{
			clearTimeout(timeout);
			$( "#content" ).load(pageToLoad);
			timeout = setTimeout(function(){ loadPageInitial(); }, 50);
		}		
		else
		{
			if(modifierVal >= 2*modifierTargetValue/3)
			{
				timeout = setTimeout(function(){transformObject( id , perspective, modifyingAspect, modifierTargetValue);}, modifierVal+(modifierVal*8/10));
			}
			else if(modifierVal <= 2*modifierTargetValue/3)
			{
				timeout = setTimeout(function(){transformObject( id , perspective, modifyingAspect, modifierTargetValue);}, 100/modifierVal);
			}
		}
	}
	
	//ALTERNATE ROTATION
	function transformObjectss(id, modifying, modifier1, modifier2, modifierTargetValue, otherVal)
	{
		alert('There should be no alert');
	}

	//currently useless
	$( document ).on( "mousemove", function( event ) 
	{	  
		var mouseX = event.clientX;     // Get the horizontal coordinate
		var mouseY = event.clientY;
		
		for(var i = 1; i <= buttons; i++)
		{
			highlighting(i); 
		}
	
	});
	
	//button to initiate rotation
	$(".buttons").click(function()
	{
		//alert('alert');
		if(haveButtonsRotated == false)
		{
			modifierVal = 0;
			haveButtonsRotated = true;
			timeout = setTimeout(function(){transformObject('#buttoncontainer', 700, 'rotateY', 30);}, 30); //REMEMBER TO MAKE THIS ACTUALLY WORK
		}		
	});

	
	$(window).resize(function() 
	{
		setButtonPosition();
	});
	
	$(window).scroll(function()
	{
		setButtonPosition();
	});
	
	$( "#button1").click(function()
	{
		if(pageToLoad == "")
		{
			pageToLoad = "cod.html";
			timeout = setTimeout(function(){ changePage("index.html#cod"); }, 50);
		}		
		else if(pageToLoad != "cod.html" && opacity >= 1)
		{
			pageToLoad = "cod.html";
			timeout = setTimeout(function(){ changePage("index.html#cod"); }, 50);
			//history.pushState(stateObj, "page 2", "index.html#cod");
		}
	});
	
	$( "#button2").click(function()
	{
		if(pageToLoad == "")
		{
			pageToLoad = "pa.html";
			timeout = setTimeout(function(){ changePage("index.html#pa"); }, 50);
		}		
		else if(pageToLoad != "pa.html" && opacity >= 1)
		{
			pageToLoad = "pa.html";
			timeout = setTimeout(function(){ changePage("index.html#pa"); }, 50);
			//history.pushState(stateObj, "page 2", "index.html#pa");
		}
	});
	
	$( "#button3").click(function()
	{
		if(pageToLoad == "")
		{
			pageToLoad = "about.html";
			timeout = setTimeout(function(){ changePage("index.html#about"); }, 50);
		}		
		else if(pageToLoad != "about.html" && opacity >= 1)
		{
			pageToLoad = "about.html";
			timeout = setTimeout(function(){ changePage("index.html#about"); }, 50);
			//history.pushState(stateObj, "page 2", "index.html#about");
		}
	});
	
	$( "#button4").click(function()
	{
		if(pageToLoad == "")
		{
			pageToLoad = "contact.html";
			timeout = setTimeout(function(){ changePage("index.html#contact"); }, 50);
		}		
		else if(pageToLoad != "contact.html" && opacity >= 1)
		{
			pageToLoad = "contact.html";
			timeout = setTimeout(function(){ changePage("index.html#contact"); }, 50);
			//history.pushState(stateObj, "page 2", "index.html#contact");
		}
	});
		
	$( "#dark").click(function()
	{
		lightMode = "dark";
		document.cookie = lightMode;
		$( "#dbgtz" ).css("left", "11px");
		changeLightMode();
	});
	
	$( "#light").click(function()
	{
		lightMode = "light";
		document.cookie = lightMode;
		$( "#dbgtz" ).css("left", "10px");
		changeLightMode();
	});
	
	$( "#classic").click(function()
	{
		lightMode = "classic";
		document.cookie = lightMode;
		$( "#dbgtz" ).css("left", "12px");
		changeLightMode();
	});
	
	$( "#cookies-confirm" ).click(function()
	{
		$( "#cookies" ).html("");
	});
	
	function initialButtonHighlight()
	{
		for(var i = 1; i <= buttons; i++)
		{
			highlighting(i); 
		}
	}
	
	function setLightMode()
	{
		lightMode = document.cookie;
		
		if(lightMode == '')
		{
			lightMode = "dark";
			$( "#favicon" ).attr("href","Images/Site/favicon-3-1.png");
		}
		
		if(lightMode == "light")
		{
			$( "#dbgtz" ).css("left", "10px");
			$( "#favicon" ).attr("href","Images/Site/favicon-3-2.png");
		}
		else if(lightMode == "classic")
		{
			$( "#dbgtz" ).css("left", "12px");
			$( "#favicon" ).attr("href","Images/Site/favicon-classic.png");
		}
		else
		{
			$( "#dbgtz" ).css("left", "11px")
			$( "#favicon" ).attr("href","Images/Site/favicon-3-1.png");
		}
		
		changeLightMode();
	}
	
	function readUrl()
	{
		var readHash = false;
		var page = '';
		var url = window.location.href; 
		for(var i = 0; i < url.length; i++)
		{	
			if(readHash == true)
			{
				page += url.charAt(i);
			}
			
			if(url.charAt(i) == '#')
			{
				readHash = true;
			}
		}
		
		if(page != '')
		{
			if(haveButtonsRotated == false)
			{
				modifierVal = 0;
				haveButtonsRotated = true;
				timeout = setTimeout(function(){transformObject('#buttoncontainer', 700, 'rotateY', 30);}, 30); //REMEMBER TO MAKE THIS ACTUALLY WORK
			}		
		
			pageToLoad = page + ".html";
			timeout = setTimeout(function(){ changePage(); }, 50);
		}
	}
	

	
	setLightMode();
	setButtonPosition();
	initialButtonHighlight();
	readUrl();
	
});


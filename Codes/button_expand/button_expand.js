$( document ).ready(function(){
	$( "#button_div1" ).css("line-height", $( "#button_div1" ).height() + "px");
	var box = document.getElementById("#button_div1");
	var activate = false;
	var buttonId = ["#button_div1", "#button_div2", "#button_div3"];
	
	$( document ).on( "mousemove", function( event ) 
	{	  
		var mouseX = event.clientX;     // Get the horizontal coordinate
		var mouseY = event.clientY;

		var boxX = $( "#button_div1" ).offset().left;
		var boxY = $( "#button_div1" ).offset().top;
		var boxW = $( "#button_div1" ).width();
		var boxH = $( "#button_div1" ).height();
		
		
		$("#mouseX").html(mouseX);
		$("#mouseY").html(mouseY);
		$("#boxX").html(boxX);
		$("#boxY").html(boxY);
		$("#boxW").html(boxW);
		$("#boxH").html(boxH);
	});
	
	function transitionHeight()
	{		
		if(($( buttonId[0] ).height() <= 100) && activate == true)
		{
			$( buttonId[0] ).height( $( buttonId[0] ).height() + 1);
			$( buttonId[0] ).css("line-height", $( buttonId[0] ).height() + "px");
			clearTimeout();
			setTimeout(transitionHeight, 15);
		}		
		for(i = 1; i < 3; i++)
		{
			if(($( buttonId[i] ).height() > 50))
			{
				$( buttonId[i] ).height( $( buttonId[i] ).height() - 1);
				$( buttonId[i] ).css("line-height", $( buttonId[i] ).height() + "px");
			}
		}
		if(($( buttonId[0] ).height() > 50) && activate == false)
		{
			$( buttonId[0] ).height( $( buttonId[0] ).height() - 1);
			$( buttonId[0] ).css("line-height", $( buttonId[0] ).height() + "px");
			clearTimeout();
			setTimeout(transitionHeight, 5);
		}
	}
	
	$("#button_div1").mouseover( function(){	
		activate = true;
		for (i = 0; i < 3; i++)
		{
			if(buttonId[i] == "#button_div1")
			{
				var temp = buttonId[i];
				buttonId[i] = buttonId[0];
				buttonId[0] = temp;
			}
		}
		transitionHeight();
	}); 
	
	$("#button_div1").mouseout( function(){	
		activate = false;
		transitionHeight();
	}); 
	
		$("#button_div2").mouseover( function(){	
		activate = true;
		for (i = 0; i < 3; i++)
		{
			if(buttonId[i] == "#button_div2")
			{
				var temp = buttonId[i];
				buttonId[i] = buttonId[0];
				buttonId[0] = temp;
			}
		}
		transitionHeight();
	}); 
	
	$("#button_div2").mouseout( function(){	
		activate = false;
		transitionHeight();
	}); 
	
		$("#button_div3").mouseover( function(){	
		activate = true;
		for (i = 0; i < 3; i++)
		{
			if(buttonId[i] == "#button_div3")
			{
				var temp = buttonId[i];
				buttonId[i] = buttonId[0];
				buttonId[0] = temp;
			}
		}
		transitionHeight();
	}); 
	
	$("#button_div3").mouseout( function(){	
		activate = false;
		transitionHeight();
	}); 
	
	$( document ).on( "mousemove", function( event ) 
	{	 
		//$("#button").css({top: event.pageY+50, left: event.pageX+50, position:"absolute"});
	});
});
//Six sets of four hours (240 minutes)
//12-4, 4-8, 8-12, 12-4, 4-8, 8-12
//0, 1, 2, 3, 4, 5
$( document ).ready(function(){

	var dt = new Date();
	var hour = dt.getHours();
	var timeSection = 0;
	var time = 0;
	var fastForwardOrNot;
	var fastForwarding = 1;
	var timeCycle;
	var filterRGBA = [	[0, 0, 50, 1], 		//12AM           [3][2] = 240 (down then across!!)
						[70, 20, 50, 1],		//4 AM
						[30, 140, 200, 1],		//8 AM
						[10, 170, 240, 1],		//12PM
						[10, 150, 200, 1],		//4	PM
						[10, 100, 150, 1] ];		//8	PM
	
	var r, g, b, a, rP, gP, bP, aP, rD, gD, bD, aD, rC, gC, bC, aC;
	var colourSet = 0;
	var origin = [300,500];
	var radius = 500;
	
	function sunMoonPosition()
	{
		var currentTimeSectionTotal = timeSection * 240;
		
		if(currentTimeSectionTotal + time > 0)
		{
			var totalTimeDivision = ((currentTimeSectionTotal + time) / 4) * 3.14 / 180;
			var totalTimeDivCos = Math.cos(totalTimeDivision);
			var totalTimeDivSin = Math.sin(totalTimeDivision);
			
		}
		else
		{
			return 0;
		}
		
		var sun = [(origin[0] + -radius * totalTimeDivCos), (origin[1] + -radius * totalTimeDivSin)];
		var moon = [(origin[0] + radius * totalTimeDivCos), (origin[1] + radius * totalTimeDivSin)];
		
		$("#sunX").html(Math.cos(totalTimeDivision));
		$("#sunY").html(totalTimeDivision);
		$("#additionalInfo1").html(Math.cos(totalTimeDivision));
		$("#additionalInfo2").html(radius * Math.cos(totalTimeDivision));
		
		$("#sun").css("left", sun[1]);	
		$("#sun").css("top", sun[0]);	
		$("#moon").css("left", moon[1]);	
		$("#moon").css("top", moon[0]);
		
		return 0;
	}
	
	function setColour()
	{
		r = filterRGBA[timeSection][0];
		g = filterRGBA[timeSection][1];
		b = filterRGBA[timeSection][2];
		a = filterRGBA[timeSection][3];
		
		if(timeSection == 5)
		{
			rP = filterRGBA[0][0];
			gP = filterRGBA[0][1];
			bP = filterRGBA[0][2];
			aP = filterRGBA[0][3];
		}
		else
		{
			rP = filterRGBA[timeSection + 1][0];
			gP = filterRGBA[timeSection + 1][1];
			bP = filterRGBA[timeSection + 1][2];
			aP = filterRGBA[timeSection + 1][3];
		}
		
		rD = (rP - r) / 240;	//red Difference (i.e. the value to add each interval/minute) = ( red of next timeSection - red of current timeSection ) / 240
		gD = (gP - g) / 240;
		bD = (bP - b) / 240;
		aD = (aD - a) / 240;
		
		if(colourSet == 0)
		{
			rC = r + time*rD;	//sets current colour (red Current)
			gC = g + time*gD;
			bC = b + time*bD;
			aC = a + time*aD;
			$("#rgbaValues").html(rC + " : " + gC + " : " + bC + " : " + aC);
			colourSet = 1;
		}
		else
		{
			rC = rC + rD;	//sets current colour (red Current)
			gC = gC + gD;
			bC = bC + bD;
			aC = aC + aD;
		}
		
		$("body").css("background-color", "rgba(" + Math.round(rC) + "," + Math.round(gC) + "," + Math.round(bC) + ",1)");
		$("#scene1").css("background-color", "rgba(" + Math.round(rC) + "," + Math.round(gC) + "," + Math.round(bC) + ",1)");
		$("#rgbaDifference").html(rD + " : " + gD + " : " + bD + " : " + aD);
		$("#rgbaValuesUpdated").html(rC + " : " + gC + " : " + bC + " : " + aC);
		
		return 0;
	}
	
	function changeColour()
	{
		rC = rC + rD;	//sets current colour (red Current)
		gC = gC + gD;
		bC = bC + bD;
		aC = aC + aD;
		
		$("body").css("background-color", "rgba(" + rC + "," + gC + "," + bC + ", 1)");
		$("#rgbaValuesUpdated").html(rC + " : " + gC + " : " + bC + " : " + aC);
		
		return 0;
	}
	
	function changeTimeSection()
	{
		var currTimeSection = timeSection;
		if(time == 240 && timeSection <= 4)
		{
			timeSection++;
			time = 0;
		}
		else if(time == 240 && timeSection == 5)
		{
			timeSection = 0;
			time = 0;
		}
		$("#timeSection").html(timeSection);
	}
	
	function cycleTime(calledFromLoop)
	{		
		if(calledFromLoop == 1)
		{
			time = time + 1;
		}
		setColour();
		sunMoonPosition()
		changeTimeSection();
		$("#testDiv").html(time);
		timeCycle = setTimeout(function(){ cycleTime(1) }, 100)
	}
	
	function setTime()
	{
		if(hour >= 0 && hour < 4)
		{
			time = (hour)*60 + dt.getMinutes();
			timeSection = 0;
		}
	
		if(hour >= 4 && hour < 8)
		{
			time = (hour-4)*60 + dt.getMinutes();
			timeSection = 1;
		}
	
		if(hour >= 8 && hour < 12)
		{
			time = (hour-8)*60 + dt.getMinutes();
			timeSection = 2;
		}
	
		if(hour >= 12 && hour < 16)
		{
			time = (hour-12)*60 + dt.getMinutes();
			timeSection = 3;
		}
	
		if(hour >= 16 && hour < 20)
		{
			time = (hour-16)*60 + dt.getMinutes();
			timeSection = 4;
		}
		
		if(hour >= 20 && hour < 24)
		{
			time = (hour-20)*60 + dt.getMinutes();
			timeSection = 5;
		}
		$("#testDiv").html(time);
		setColour();
		cycleTime();
	}
	
	$("#off").click(function()
	{
		clearTimeout(fastForwardOrNot);
		clearTimeout(timeCycle);
	});
	
	$("#fastForward").click(function()
	{
		fastForwarding = 1;
		clearTimeout(timeCycle);
		function fastForward()
		{
			time = time + 1;
			$("#testDiv").html(time);
			if(fastForwarding)
			{
				changeTimeSection();
				setColour();
				sunMoonPosition();
				fastForwardOrNot = setTimeout(fastForward, 100);
			}
		}
		fastForward();
	});
	
	$("#stop").click(function()
	{
		clearTimeout(fastForwardOrNot);
		clearTimeout(timeCycle);
		fastForwarding = 0;
		cycleTime(0);
	});
	
	window.addEventListener("keydown", function(e) {
    // space, page up, page down and arrow keys:
    if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
	}, false)
	
	setTime();

});
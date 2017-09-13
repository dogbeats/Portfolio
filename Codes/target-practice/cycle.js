//NEED TO LAYER 2 INDIVIDUAL DIVS SO IT DOESNT FLASH IN CHROME


$( document ).ready(function(){
	var i = 1
	var reloadOrder = 0;
	var bullets = 6;
	var curr_score = 0;
	var high_score = 0;
	var hit_target = false;
	
	$( document ).on( "mousemove", function( event ) 
	{	  
		$("#revolverIMG").css({top: event.pageY+50, left: event.pageX+50, position:"absolute"});
	});
	
	$("#reload").click(function()
	{
		if(i == 1)
		{
			function EmptyChamber()
			{
				$("#revolverIMG").attr("src", "images/revolver-emptychamber/" + i + ".png");
				i++;
				if(i <= 9)
				{
					setTimeout(EmptyChamber, 50);
				}
				if(i > 9 && i <= 54)
				{
					$("#revolverIMG").attr("src", "images/revolver-reload/" + (i - 8) + ".png");
					setTimeout(EmptyChamber, 50);
				}
				if(i > 54)
				{
					i = 1;
					$("#revolverIMG").attr("src", "images/revolver-idle.png");
				}
			}
			EmptyChamber();
		
		}
		
	});
	
	function DidShootTarget()
	{
		if(hit_target == false)
		{
			if(curr_score > high_score)
				high_score = curr_score;
			curr_score = 0;
		}
		else
		{
			hit_target = false;
		}
		$( "#score-information" ).html("Bullets: " + bullets + "<br />Current Score: " + curr_score + "<br />High Score: " + high_score);
	}
	
	$("html").click(function()
	{
		if (i == 1 && bullets > 0)
		{
	
			function Shoot()
			{
				$("#revolverIMG").attr("src", "images/revolver-fire/" + i + ".png");
				i++;
				if(i <= 4)
				{
					setTimeout(Shoot, 85);
				}
				if(i > 4)
				{
					i = 1;
					$("#revolverIMG").attr("src", "images/revolver-idle.png");
					
					bullets--;
					DidShootTarget()
				}

			}
			Shoot();
		
		}
	});
	
	$('body').keydown(function(e)
	{
		if(e.keyCode == 82)
		{
			if(i == 1)
			{

				function emptyChamber()
				{
					$("#revolverIMG").attr("src", "images/revolver-emptychamber/" + i + ".png");
					i++;
					if(i <= 9)
					{
						if(i == 2)
						{
							bullets = 0;
							$( "#score-information" ).html("Bullets: " + bullets + "<br />Current Score: " + curr_score + "<br />High Score: " + high_score);
						}
						setTimeout(emptyChamber, 50);
					}
					if(i > 9 && i <= 54)
					{
						if(i == 31)
							i++;
						if(i == 10 || i == 17 || i == 24 || i == 32 || i == 39 || i == 46)
							bullets++;
						
						$( "#score-information" ).html("Bullets: " + bullets + "<br />Current Score: " + curr_score + "<br />High Score: " + high_score);
						$("#revolverIMG").attr("src", "images/revolver-reload/" + (i - 8) + ".png");
						setTimeout(emptyChamber, 50);
					}
					if(i > 54)
					{
						i = 1;
						$("#revolverIMG").attr("src", "images/revolver-idle.png");
					}
				}
				emptyChamber();
			
			}
		}
	});
	
	function MoveTarget()
	{
		var random_x = Math.floor((Math.random() * screen.width-50) + 1);
		var random_y = Math.floor((Math.random() * screen.height-50) + 1);
		
		$( "#target1" ).css("left", random_x);
		$( "#target1" ).css("top", random_y);
	}
	
	$( "#target1" ).click(function()
	{
		if(bullets > 0)
		{
			hit_target = true;
			curr_score++;
			MoveTarget();
		}
	});
	
	
	MoveTarget();
	
});
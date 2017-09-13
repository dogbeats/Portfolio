$( document ).ready(function(){

	var colours = ["#181917", "#131412", "#FFF"];
	
	function changeColours()
	{
		$( "#table-row-about" ).css("background-color", colours[1]);
		$( "#table-row-about" ).css("color", colours[2]);
	}
	
	function getDbgtzPos()
	{
		var dbgtz = $( "#dbgtz" );
		var position = dbgtz.position();
		
		if(position.left == "10")
		{
			colours = ["#cecfc2", "#aaaba1", "#000"];
		}
		else if (position.left == "11")
		{
			colours = ["#181917", "#131412", "#FFF"];
		}
		else if (position.left == "12")
		{
			colours = ["#D6D6D6", "#C8C8C8", "#FFF"];
		}
		
		changeColours();
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

	getDbgtzPos();	
});
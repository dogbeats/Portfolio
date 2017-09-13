$( document ).ready(function()
{
	$( "#home_button" ).click(function()
	{
		$( "#content_box" ).load('Pages/home.PHP');
	});
	
	$( window ).resize(function()
	{
		$( "#top_gradient" ).css("width", $( window ).width());
	
		$( "#main_file_container" ).css("left", $( window ).width()/2 - $( "#content_box" ).width()/2);
		
		if($( window ).width() <= "800px")
		{
			$( body ).css("overflow-y", "scroll");
		}
		else
		{
			$( body ).css("overflow-y", "hidden");
		}
		
	});
	
	
	$( "#main_file_container" ).css("left", $( window ).width()/2 - $( "#content_box" ).width()/2);
	$( "#links" ).css("left", $( "#content_box" ).width()/2 - $( "#links" ).width()/2 + 8);
	$( "#social_media" ).css("left", $( "#content_box" ).width()/2 - $( "#social_media" ).width()/2 - 8);
	$( "#banner" ).css("left", $( "#content_box" ).width()/2 - $( "#banner" ).width()/2);
	$( "#disclaimer_text" ).css("left", $( "#content_box" ).width()/2 - $( "#disclaimer" ).width()/2);
	
	$( "#disclaimer_top_border" ).css("top", $( "#social_media" ).position().top + 22);
	$( "#disclaimer_top_border" ).css("width", $( window ).width());
	
	var bg_height = $( "#disclaimer" ).position().top + 8 + "px"
	$( "body" ).css("background-position", "200px " + bg_height);
	//$( "body" ).css("background-position", "2px " + );
	
	//top gradient sorting
	$( "#top_gradient" ).css("left", "0px");
	$( "#top_gradient" ).css("top", "0px");
	$( "#top_gradient" ).css("width", $( window ).width());
	$( "#top_gradient" ).css("height", bg_height);
	
	//bottom box sorting
	$( "#disclaimer_bg" ).css("left", "0px");
	$( "#disclaimer_bg" ).css("width", $( window ).width());
	$( "#disclaimer_bg" ).css("top", $( "#social_media" ).position().top + 30);
	$( "#disclaimer_bg" ).css("height", $( window ).height() - $( "#social_media" ).position().top);
	
});
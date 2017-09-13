var is_box_resizing = false;
var box_transformations = 0; //0 = NULL, 1 = RESIZE, 2 = MOVE
var box_to_resize = '#text_box_1';
var border_to_resize = '#text_border_1';
var saved_initial_var = false;
var init_mouse_X, init_mouse_Y;

$( document ).on( "mousemove", function( event ) 
{	  
	var mouseX = event.clientX;     // Get the horizontal coordinate
	var mouseY = event.clientY;
		
	//$( '#mouse_details' ).html('X: ' + mouseX + '<br /> Y: ' + mouseY);
	
	if(box_transformations == 1)
	{
		if(saved_initial_var == false) //consider moving to a function
		{
			var original_box_height = $( box_to_resize ).height();
			var original_box_width = $( box_to_resize ).width();
			saved_initial_var = true;
		}
		
		$( '#resize_button' ).css('left', mouseX - 5);
		$( '#resize_button' ).css('top', mouseY - 5);
		$( box_to_resize ).css('height', mouseY - parseInt($( box_to_resize ).css('top'))+ 'px');
		$( box_to_resize ).css('width', mouseX - parseInt($( box_to_resize ).css('left'))+ 'px');
		$( border_to_resize ).css('height', mouseY - parseInt($( border_to_resize ).css('top')) - 3+ 'px');
		$( border_to_resize ).css('width', mouseX - parseInt($( border_to_resize ).css('left')) - 3+ 'px');
		
	}
	else if (box_transformations == 2)
	{
		if(saved_initial_var == false)
		{
			init_mouse_X = mouseX - parseInt($( '#text_border_1' ).css('left'));
			init_mouse_Y = mouseY - parseInt($( '#text_border_1' ).css('top'));
			//var init_mouse_X = mouseX ;
			//var init_mouse_Y = mouseY ;
			saved_initial_var = true;
		}
		
		//$( '#text_box_1' ).css('left', parseInt($( '#text_box_1' ).css('left')) + mouseX - init_mouse_X + 'px');
		$( '#text_border_1' ).css('left', mouseX - init_mouse_X + 'px');
		$( '#text_border_1' ).css('top', mouseY - init_mouse_Y + 'px');
		$( '#text_box_1' ).css('left', mouseX - init_mouse_X + 3 + 'px');
		$( '#text_box_1' ).css('top', mouseY - init_mouse_Y + 3 + 'px');
		$( '#resize_button' ).css('left', $( '#text_box_1' ).width() + mouseX - init_mouse_X + 5 + 'px');
		$( '#resize_button' ).css('top', $( '#text_box_1' ).height() + mouseY - init_mouse_Y + 5 +'px');
		
		
		$( '#mouse_details' ).html('initX: ' + init_mouse_X + '<br /> initY: ' + init_mouse_Y + '<br /> X: ' + mouseX + '<br /> Y: ' + mouseY);
	}
	else
	{
		saved_initial_var = false;
	}

});

$( document ).ready(function(){	
	
	//RESIZING A BOX
	
	$( '#resize_button' ).mousedown( function( event )
	{
		box_transformations = 1;
	})
	
	$( '#resize_button' ).mouseup( function( event )
	{
		box_transformations = 0;
	})
	
	//MOVING A BOX
	//Colour of border when clicked
	$( '#text_box_1' ).mousedown( function( event )
	{
		if(box_transformations == 0 || box_transformations == 2)
		{
			box_transformations = 2;
			$( '#text_border_1' ).css('border-color', 'blue');
		}
	})
	//Colour of border when released
	$( '#text_box_1' ).mouseup( function( event )
	{
		if(box_transformations == 0 || box_transformations == 2)
		{
			box_transformations = 0;
			$( '#text_border_1' ).css('border-color', 'black');
		}
	})
	//Colour of border when released (moused moved out of bounds)
	$( '#text_box_1' ).mouseleave( function( event )
	{
		if(box_transformations == 0 || box_transformations == 2)
		{
			box_transformations = 0;
			$( '#text_border_1' ).css('border-color', 'black');
		}
	})

	function Init_Text_Box(textBox, textBorder, centre)
	{
		$( textBox ).css('background-color', 'red');
		$( textBox ).css('height', '200px');
		$( textBox ).css('width', '200px');
		$( textBox ).css('left', centre[0] + 'px');
		$( textBox ).css('top', centre[1] + 'px');
		
		
		$( textBorder ).css('height', '200px');
		$( textBorder ).css('width', '200px');
		$( textBorder ).css('border-width', '3px');
		$( textBorder ).css('border-style', 'dashed');
		$( textBorder ).css('left', centre[0] - 3 + 'px');
		$( textBorder ).css('top', centre[1] - 3 + 'px');
		
		$( '#resize_button' ).css('left', centre[0] + $( textBox ).width() + 'px');
		$( '#resize_button' ).css('top', centre[1] + $( textBox ).height() + 'px');
		$( '#resize_button' ).css( 'cursor', 'pointer' );
	}
	
	$( "#text_form" ).keyup(function() {
	  $( "#text_box_1" ).html( $( '#text_form' ).val() );
	});
	
	$( '#text_form' ).val('Input text here');
	Init_Text_Box('#text_box_1', '#text_border_1', [200,200]);
	
});
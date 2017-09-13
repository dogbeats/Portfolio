$( document ).ready(function(){

	var buttonClicked = false;
	var readTag = false;
	var readTagLength = [-1, -1];
	var tag = "";
	
	var cursorPos, cursorPos2, v, textBefore, textAfter, textBetween;
	
	function GetReplacementTag(tag)
	{
		var new_tag = "";
		
		if(tag == "B")
		{
			new_tag = "<b>";
		}
		
		if(tag == "/B")
		{
			new_tag = "</b>";
		}
		
		return new_tag;
	}
	
	$( "#exporttohtml" ).click(function()
	{
		//$('#columnstart').html( "" );
		var str = $('#maintextarea').val();
		//str = str.replace('[/B]', '</b>');
		str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');


		
		
		for(var i = 0; i < str.length; i++)
		{
			if(str.charAt(i) == "[")
			{
				//readTag = true
				tag = "";
				readTagLength[0] = i;
				//alert("[");
			}
			else if(str.charAt(i) == "]")
			{
				//readTag = false;
				readTagLength[1] = i;
				
				for(var j = readTagLength[0] + 1; j < readTagLength[1]; j++)
				{
					tag += (str.charAt(j));
					//alert(tag);
					//str.charAt(j) = "";
				}
				
				var str_before = str.substring(0, readTagLength[0]);
				var str_after = str.substring(readTagLength[1] + 1, str.length);
				
				var newTag = GetReplacementTag(tag);
				
				str = str_before + newTag + str_after;
				
				/*
				if(tag == "[B]")
				{
					str.charAt(readTagLength[1]) = "<b>";
				}*/
				//alert("]");
			}
		}
		
		//str = str.val().replace("[B]", "<b>");
		
		
		$('#exportedtextarea').val( "<!DOCTYPE html><head></head><body>" + str + "</body></html>" );
		//$('#columnstart').html(str);
		
		 <?php
			$pageEditVersion = fopen("pages/home.txt", "w") or die("Unable to open file!"); //need to make this suitable for any page (eg payment.txt etc)
			$txt = str;
			fwrite($pageEditVersion, $txt);
			fclose($pageEditVersion);
		?> 
		
	});
	
	$( ".modify_text_buttons:button" ).click(function()
	{
		//$( "#maintextarea" ).val("test");
		cursorPos = $('#maintextarea').prop('selectionStart');
		cursorPos2 = $('#maintextarea').prop('selectionEnd');
        v = $('#maintextarea').val();
        textBefore = v.substring(0,  cursorPos );
		textBetween = v.substring(cursorPos,  cursorPos2 );
        textAfter  = v.substring( cursorPos2, v.length );
		
		var startTag = "[" + $(this).val() + "]";
		var endTag = "[/" + $(this).val() + "]";
		
        $('#maintextarea').val( textBefore + startTag + textBetween + endTag + textAfter );
		//document.getElementById("maintextarea").value = "Fifth Avenue, New York City";
		
		buttonClicked = true;
		
	});
	
	$( document ).mousemove(function()
	{
		if(buttonClicked == true)
			$('#columnstart').html(  );
	});
	

});
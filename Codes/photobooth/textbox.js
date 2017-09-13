$( document ).ready(function(){

	var buttonClicked = false;
	var readTag = false;
	var readTagLength = [-1, -1];
	var tagElements = ["", "", ""];
	var tag = "";
	var isPreview = false;
	var newPage = false;
	
	var cursorPos, cursorPos2, v, textBefore, textAfter, textBetween;
	
	function InputValueBox(fileType, inputType)
	{
		if(inputType == "file")
			var toPass = prompt(fileType + " File Name", "file.PNG");
			
		if(inputType == "value")
			var toPass = prompt(fileType + " Size", "12");
			
		return toPass;
	}
	
	function GetFileList()
	{
		var files2;
		var filessplit = "";
		
		$( "#list_of_files_container" ).html( "" );
		
		$.get( "Pages/_files.txt", function( data ) {
			files2 = data;
		});
		
		//alert("");
		
		for(var i = 0; i < files2.length; i++)
		{
			if(files2.charAt(i) == ",")
			{
				$( "#list_of_files_container" ).append( '<option value="' + filessplit + '" class="list_of_files">' + filessplit + '</option>' );
				//$( "#list_of_files_container" ).append( '<option value="test" class="list_of_files">test</option>' );
				filessplit = "";
			}
			else
			{
				filessplit += files2.charAt(i);
			}			
		}
	}
	
	function GetReplacementTag(tag)
	{
		var new_tag = "";
		var tagElementNumber = 0;
		tagElements[0] = "";
		tagElements[1] = "";
		tagElements[2] = "";		
		
		for(var i = 0; i < tag.length; i++)
		{
			if(tag.charAt(i) != "=")
			{
				tagElements[tagElementNumber] += tag.charAt(i);
			}
			else
			{
				tagElementNumber++;
			}
		}
		
		//BOLD TEXT
		if(tagElements[0] == "B")
		{
			new_tag = "<span class='bold'>";
		}
		
		if(tagElements[0] == "/B")
		{
			new_tag = "</span>";
		}
		
		//ITALIC TEXT
		if(tagElements[0] == "I")
		{
			new_tag = "<span class='italic'>";
		}
		
		if(tagElements[0] == "/I")
		{
			new_tag = "</span>";
		}
		
		//UNDERLINE
		if(tagElements[0] == "U")
		{
			new_tag = "<span class='underline'>";
		}
		
		if(tagElements[0] == "/U")
		{
			new_tag = "</span>";
		}
		
		//ALIGNMENT
		if(tagElements[0] == "L")
		{
			new_tag = "<span class='left'>";
		}
		
		if(tagElements[0] == "/L")
		{
			new_tag = "</span>";
		}
		
		if(tagElements[0] == "C")
		{
			new_tag = "<span class='centre'>";
		}
		
		if(tagElements[0] == "/C")
		{
			new_tag = "</span>";
		}
		
		if(tagElements[0] == "R")
		{
			new_tag = "<span class='right'>";
		}
		
		if(tagElements[0] == "/R")
		{
			new_tag = "</span>";
		}
		
		//IMAGE
		if(tagElements[0] == "IMAGE")
		{
			if(isPreview)
				new_tag = "<img src = 'Pages/Images/" + tagElements[1] + "' />";
			else
				new_tag = "<img src = 'Images/" + tagElements[1] + "' />";
		}
		
		//FONT SIZE
		if(tagElements[0] == "FONTSIZE")
		{
			new_tag = "<span style='font-size:" + tagElements[1] + "pt;'>";
		}
		
		if(tagElements[0] == "/FONTSIZE")
		{
			new_tag = "</span>";
		}
		
		//LINKS
		if(tagElements[0] == "LINKTO")
		{
			new_tag = "<a onclick='$(\'#content\').load(" + tagElements[1] + ");' >";
		}
		
		if(tagElements[0] == "/LINKTO")
		{
			new_tag = "</a>";
		}
		
		//CUSTOM CLASS 1
		if(tagElements[0] == "STYLE1")
		{
			new_tag = "<span class='style1'>";
		}
		
		if(tagElements[0] == "/STYLE1")
		{
			new_tag = "</span>";
		}
		
		return new_tag;
	}
	
	$( "#exporttohtml" ).click(function()
	{
		//$('#columnstart').html( "" );
		isPreview = false;
		var str = $('#maintextarea').val();
		var staticStr = str;
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
				
				//alert(tag);
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
		
		var newStr = "<!DOCTYPE html><head><link rel='stylesheet' type='text/css' href='style.css' /></head><body>" + str + "</body></html>";
		$('#exportedtextarea').val( newStr );
		//$('#columnstart').html(str);
		
		
         $.ajax({
             type: "POST",
             url: "savefile.php",
             data: { htmlfile: "Pages/" + $( "#file_name_box" ).val() + ".php", textfile: "Pages/" + $( "#file_name_box" ).val() + ".txt", htmldata: newStr, textdata: staticStr },
             success: function(data)
             {
                 alert("success");
             },
			 error: function(data)
			 {
				alert("error");
			 }
         });
		 
		 if(newPage == true)
		 {		 
			$.ajax({
             type: "POST",
             url: "modifyfile.php",
             data: { name: ($( "#file_name_box" ).val() + ",")},
             success: function(data)
             {
                 alert("success!");
             }
			});
			
			newPage = false;
			GetFileList();
		 }
		
	});
	
	$( "#importtotext" ).click(function()
	{
		var fileName = $( "#file_name_box" ).val();
		var failure;
	
		$.ajax({
			url: "Pages/" + fileName + ".txt",
			type: 'GET',
			success: function(data){ 
				$( "#maintextarea" ).val( data );
				//alert( data  );
				failure = false;
				newPage = false;
			},
			error: function(data) {
				alert('Invalid file');
				failure = true;
			}
		});
	
		//$.get( "Pages/" + fileName + ".txt", function( data ) {
		//  $( "#maintextarea" ).val( data );
		//});
		


		$.get( "Pages/" + fileName + ".php", function( data ) {
		$( "#exportedtextarea" ).val( data );
		});
		
		$.get( "Pages/" + fileName + ".php", function( data ) {
		$( "#previewbox" ).html( data );
		});
		
		$( "#file_name_box" ).val( fileName );
	
		/*$.ajax({
             type: "POST",
             url: "loadfile.php",
             data: { file: fileName},
             success: function(data)
             {
                 alert(data);
             }
         });*/
	});
	
	$( ".list_of_files" ).click(function()
	{
		$( "#file_name_box" ).val( $( this ).val() );
		//alert("hello");
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
		
		if($(this).val() == "IMAGE")
		{
			var fileName = InputValueBox("Image", "file");
			var startTag_Filename = "[" + $(this).val() + "=" + fileName + "]";
			$('#maintextarea').val( textBefore + startTag_Filename + textBetween + textAfter );
		}
		else if($(this).val() == "FONTSIZE")
		{
			var fontSize = InputValueBox("Font", "value");
			var startTag_Fontsize = "[" + $(this).val() + "=" + fontSize + "]";
			var	endTag_Fontsize = "[/" + $(this).val() + "]";
			$('#maintextarea').val( textBefore + startTag_Fontsize + textBetween + endTag_Fontsize + textAfter );
		}
		else if($(this).val() == "LINKTO")
		{
			var fileName = InputValueBox("Page", "file");
			var invalidFile = false;
			
			if(fileName.charAt(fileName.length - 1) != "P" && fileName.charAt(fileName.length - 1) != "p")
			{
				//alert(fileName.charAt(fileName.length - 1));
				alert("invalid file");
			}
			else
			{			
				var startTag_Filename = "[" + $(this).val() + "=" + fileName + "]";
				var	endTag_Filename = "[/" + $(this).val() + "]";
				$('#maintextarea').val( textBefore + startTag_Filename + textBetween + endTag_Filename + textAfter );
			}
		}
		else
		{
			var startTag = "[" + $(this).val() + "]";
			var endTag = "[/" + $(this).val() + "]";
			$('#maintextarea').val( textBefore + startTag + textBetween + endTag + textAfter );
		}
		//document.getElementById("maintextarea").value = "Fifth Avenue, New York City";
		
		buttonClicked = true;
		
	});
	
	$( "#preview" ).click(function()
	{
		//$('#columnstart').html( "" );
		isPreview = true;
		var str = $('#maintextarea').val();
		var staticStr = str;
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
				
				//alert(tag);
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
		
		var newStr = "<!DOCTYPE html><head><link rel='stylesheet' type='text/css' href='style.css' /></head><body>" + str + "</body></html>";
		$('#exportedtextarea').val( newStr );
		//$('#columnstart').html(str);
		
	
		$( "#previewbox" ).html(newStr);
	});
	
	$( ".dropdown_button" ).click(function()
	{
		if($( ".dropdown_menu" ).position().left == $( ".dropdown_button" ).position().left - 40)
		{
			$( ".dropdown_menu" ).css("left", -1000);
			$( ".dropdown_menu" ).css("top", -1000);
		}
		else
		{
			$( ".dropdown_menu" ).css("left", $( ".dropdown_button" ).position().left - 40);
			$( ".dropdown_menu" ).css("top", $( ".dropdown_button" ).position().top + 10);
		} 
	});

	$( "#stylebuttons" ).click(function()
	{
		$( ".dropdown_menu" ).css("left", -1000);
		$( ".dropdown_menu" ).css("top", -1000);
	});
	
	$( "#newpage" ).click(function()
	{
		var new_page_name = prompt("Enter new page name", "page");
		
		if(new_page_name != null)
		{
			var isNameRepeated = false;
			var currFileName;
			var _file;
			currFileName = "";
			
			$.get( "Pages/_files.txt", function( data ) {
				_file = data;
			});
			
			alert("remove");
			
			for(var i = 0; i < _file.length; i++)
			{
				if(_file.charAt(i) == ",")
				{
					if(currFileName == new_page_name)
						isNameRepeated = true;
					currFileName = "";
				}
				else
				{
					currFileName += _file.charAt(i);
				}			
			}
			
			if(isNameRepeated == true)
			{
				alert("Page already exists");
			}
			else
			{
				$( "#file_name_box" ).val( new_page_name );
				newPage = true;
			}
		}
	});
	
	$( document ).mousemove(function()
	{
		if(buttonClicked == true)
			$('#columnstart').html(  );
	});
	
	$( window ).resize(function()
	{
		$( "#previewbox" ).css("left", $( window ).width()/2-250);
	});
	
	$( "#previewbox" ).css("left", $( window ).width()/2 - $( "#previewbox" ).width()/2);
	
	GetFileList();
});
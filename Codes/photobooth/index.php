<!DOCTYPE html>
	<head>
		<link rel="stylesheet" type="text/css" href="style.css" />
		<link rel="stylesheet" type="text/css" href="Pages/style.css" />
		<script src="jquery-3.0.0.min.js"></script>
		<script src="textbox.js"></script>
	</head>
	
	<body>
		<div id="main_container">
			<div id="button_container">
				<input type="button" value="L" class="modify_text_buttons"/>
				<input type="button" value="C" class="modify_text_buttons"/>
				<input type="button" value="R" class="modify_text_buttons"/>
				
				<input type="button" value="B" class="modify_text_buttons"/>
				<input type="button" value="I" class="modify_text_buttons"/>
				<input type="button" value="U" class="modify_text_buttons"/>
				
				<s><input type="button" value="FONT" class="#"/></s>
				<input type="button" value="FONTSIZE" class="modify_text_buttons"/>
				
				<input type="button" value="LINKTO" class="modify_text_buttons"/>
				
				<br />
			
				<input type="button" value="IMAGE" class="modify_text_buttons"/>
				
				<span class="dropdown_class">
					<input type="button" value="STYLES" class="dropdown_button"/>		
					<ul class="dropdown_menu">
						<li><input type="button" value="STYLE1" id="stylebuttons" class="modify_text_buttons" /></li>
						<li><input type="button" value="STYLE2" id="stylebuttons" class="modify_text_buttons" /></li>
					</ul>
				</span>
				
				<input type="button" value="Preview" id="preview"/>
				<input type="button" value="NewPage" id="newpage"/>
				<input type="button" value="Import" id="importtotext"/>
				<input type="button" value="Export" id="exporttohtml"/>
				
				<br />
				
				Page Name:
				<input type="text" value="home" name="exportname" id="file_name_box" disabled>
				
				<select id="list_of_files_container">
				
				</select>
				
			</div>
				<br />
			<textarea name="message" rows="10" cols="30" id="maintextarea">Input Things here</textarea>
			
			<textarea name="exported" rows="10" cols="30" id="exportedtextarea"></textarea>
		</div>
		
		<div id="previewbox"> preview box </div>
			
		<div id="columnstart">this is some text <div>more text</div></div>
		<div id="columnend">this is some text <span>more text</span></div>
		
	</body>
</html>

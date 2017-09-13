 <?php
	$htmlFile = $_POST['htmlfile'];
	$textFile = $_POST['textfile'];
	$htmlData = $_POST['htmldata'];
	$textData = $_POST['textdata'];
	
	$pageEditVersion = fopen($textFile, "w") or die("Unable to open file!"); //need to make this suitable for any page (eg payment.txt etc)
	fwrite($pageEditVersion, $textData);
	fclose($pageEditVersion);
	
	$pageEditVersion = fopen($htmlFile, "w") or die("Unable to open file!"); //need to make this suitable for any page (eg payment.txt etc)
	fwrite($pageEditVersion, $htmlData);
	fclose($pageEditVersion);
?> 
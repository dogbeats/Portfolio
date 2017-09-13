 <?php
	$data = $_POST['name'];
	
	$filelist = fopen("pages/_files.txt", "a+") or die("Unable to open file!"); //need to make this suitable for any page (eg payment.txt etc)
	fwrite($filelist, $data);
	fclose($filelist);
?> 
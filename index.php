<?php
	$_SERVER="localhost";
	$username="root";
	$password="";

	$conn = mysql_connect($_SERVER, $username, $password);
	if (!$conn) {
		die('Could not connect: ' . mysql_error());
	}
	echo 'Connected successfully';
?>


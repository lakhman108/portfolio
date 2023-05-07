<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "trip";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Escape user inputs for security
$name = mysqli_real_escape_string($conn, $_POST['name']);
$age = mysqli_real_escape_string($conn, $_POST['age']);

// Attempt insert query execution
$sql = "INSERT INTO trip (name, age) VALUES ('$name', '$age')";
if(mysqli_query($conn, $sql)){
    echo "Data inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>

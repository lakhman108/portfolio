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
$gender = mysqli_real_escape_string($conn, $_POST['gender']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$phone = mysqli_real_escape_string($conn, $_POST['phone']);
$other = mysqli_real_escape_string($conn, $_POST['other']);

// Attempt insert query execution
$sql = "INSERT INTO information (name, age, gender, email, phone, other) VALUES ('$name', '$age', '$gender', '$email', '$phone', '$other')";
if(mysqli_query($conn, $sql)){
    echo "Data inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>

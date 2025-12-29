<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "hobby_personal";

$conn = mysqli_connect($host, $user, $password, $database);

try{
    echo "Successfully connected with hobby_personal data base";
}
catch(Exception $e){
    die("connection failed".$e->getMessage())

}
?>


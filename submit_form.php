<?php
require "connectdb.php";

/* 1. Check if form was submitted */
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    /* 2. Receive data from form */
    $first_name = $_POST['first_name'];
    $last_name  = $_POST['last_name'];
    $email      = $_POST['email'];
    $phone      = $_POST['phone'];
    $dob        = $_POST['dob'];
    $hobby      = $_POST['hobby'];
    $level      = $_POST['level'];
    $schedule   = $_POST['schedule'];

    /* 3. Insert into database */
    $sql = "INSERT INTO user_info 
    (first_name, last_name, email, phone, dob, hobby, level, schedule)
    VALUES 
    ('$first_name', '$last_name', '$email', '$phone', '$dob', '$hobby', '$level', '$schedule')";

    if (mysqli_query($conn, $sql)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>

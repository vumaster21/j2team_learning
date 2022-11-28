<?php 

$name = $_GET['fullname'];
$email = $_GET['email'];
$password = $_GET['password'];
$date_of_birth = $_GET['date'];
$address = $_GET['address'];
$hobbies = $_GET['hobbies'];
$gender = $_GET['gender'];

echo nl2br("Hi ${name}, This is your informations:\n\n Email: ${email} \nSex: ${gender} \nPassword: ${password} \nDate of birth: ${date_of_birth} \nAddress: ${address} \nHobbies: ${hobbies}");

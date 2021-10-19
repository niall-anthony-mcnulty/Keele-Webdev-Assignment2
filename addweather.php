<?php 


include 'includes/dblogin.php';
//print_r($_POST);

$main = $_REQUEST['main'];
$cityName = $_REQUEST['cityName'];
$weatherIcon = $_REQUEST['weatherIcon'];
$date = $_REQUEST['date'];
$temp = $_REQUEST['temp'];


// prepare and bind
$stmt = $conn->prepare("INSERT INTO weatherHistory (weatherMain, weatherDate, weatherTemp, weatherIconUrl, cityName) VALUES (?, ?, ?, ?, ?)");

$stmt->bind_param("sssss", $main, $date, $temp, $weatherIcon, $cityName);
if ($stmt) {
    $stmt->execute();
    echo json_encode('New records created successfully');

    }else{
        echo json_encode('statement issue');} 



$stmt->close();
$conn->close();


?>
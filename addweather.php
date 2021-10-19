<?php 


include 'includes/dblogin.php';
//print_r($_POST);

$main = $_POST['main'];
$cityName = $_POST['cityName'];
$weatherIcon = $_POST['weatherIcon'];
$date = $_POST['date'];
$temp = $_POST['temp'];

$sql = "INSERT INTO 'weatherHistory' ('weatherMain', 'weatherDate', 'weatherTemp', 'weatherIconUrl','cityName') VALUES ('$main', '$date', '$temp', '$weatherIcon', '$cityName')";
if ($conn->query($sql) ===TRUE) {
    echo json_encode(array('statusCode'=>200));
}
else{
    echo json_encode(array('statusCode' => 201));
}

?>


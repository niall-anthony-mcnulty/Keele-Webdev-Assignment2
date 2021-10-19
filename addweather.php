<?php 


include 'includes/dblogin.php';
//print_r($_POST);


$main = $_POST['main'];
$cityName = $_POST['cityName'];
$weatherIcon = $_POST['weatherIcon'];
$date = $_POST['date'];
$temp = $_POST['temp'];

$sql = "INSERT INTO 'weatherHistory' ('id', 'weatherMain', 'weatherDate', 'weatherTemp', 'weatherIconUrl','cityName') VALUES (DEFAULT, '$main', '$date', '$temp', '$weatherIcon', '$cityName')";
if (mysqli_query($conn, $sql)) {
    echo json_encode(array('statusCode'=>200, 'main'=>$main));
    
}
else{
    echo json_encode(array('statusCode' => 201, 'main' => $main));
   
}
mysqli_close($conn);
?>


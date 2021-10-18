<?php 


include 'includes/dblogin.php';
//print_r($_POST);

$main = $_POST['main'];
$cityname = $_POST['cityname'];
$weatherIcon = $_POST['weatherIcon'];
$temp = $_POST['temp'];
$date = $_POST['date'];

$msg = gettype($main);


/*
//insert into database
$sql = "INSERT INTO weatherHistory VALUES (DEFAULT,'$main', '$date', '$tempt', '$weatherIcon', '$cityname')";   
mysqli_query($conn, $sql);
// close connection
mysqli_close($conn);

*/
/// END


// RETURN SOME JSON BACK TO AJAX CALL
$arr = array('msg' => $msg, 'temp' => $temp, 'cityname' => $cityname, 'weatherIcon' => $weatherIcon, 'main' => $main, 'date' => $date);

// ****ANYTHING*** you echo will go back to AJAX. So 100% make sure its JSON
echo json_encode($arr);


?>
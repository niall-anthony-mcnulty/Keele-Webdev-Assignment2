<?php 


include 'includes/dblogin.php';
//print_r($_POST);

$main = $_REQUEST['main'];
$cityName = $_REQUEST['cityName'];
$weatherIcon = $_REQUEST['weatherIcon'];
$date = $_REQUEST['date'];
$temp = $_REQUEST['temp'];

$sql = "INSERT INTO weatherHistory (id, weatherMain, weatherDate, weatherTemp, weatherIconUrl,cityName) VALUES (DEFAULT, '$main', '$date', '$temp', '$weatherIcon', '$cityName')";
    
if (mysqli_query($conn, $sql))
{
    echo json_encode(array("sql" => $sql));
}
    
else {
        echo json_encode(array('sql_error' => mysqli_error($conn) ));
};

mysqli_close($conn);
?>


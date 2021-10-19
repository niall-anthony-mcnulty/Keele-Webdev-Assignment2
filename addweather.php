<?php 


include 'includes/dblogin.php';
//get data;

$main = $_REQUEST['main'];
$cityName = $_REQUEST['cityName'];
$weatherIcon = $_REQUEST['weatherIcon'];
$date = $_REQUEST['date'];
$temp = $_REQUEST['temp'];

// query
$sql = "INSERT INTO weatherhistory (id, weatherMain, weatherDate, weatherTemp, weatherIconUrl,city) VALUES (DEFAULT, '$main', '$date', '$temp', '$weatherIcon', '$cityName')";
    
if (mysqli_query($conn, $sql))
{
    echo json_encode(array("sql" => $sql));
}
    
else {
        echo json_encode(array('sql_error' => mysqli_error($conn) ));
};

mysqli_close($conn);
?>



<?php 

require 'includes/dblogin.php';

$cityName = $_REQUEST['cityName'];

// retreive data
$sql = "SELECT  weatherMain, weatherDate, weatherIconUrl, city FROM weatherhistory WHERE city = '$cityName' ORDER BY id ASC";


$result = mysqli_query($conn, $sql);
$output = array();

// fetch rows
while($row=mysqli_fetch_array($result)){
    $output[] = $row;
}


echo json_encode($output);

?>
<?php 


include 'includes/dblogin.php';
//print_r($_POST);

$main = $_POST['main'];
$cityname = $_POST['cityname'];
$weatherIcon = $_POST['weatherIcon'];
$temp = $_POST['temp'];
$date = $_POST['date'];

$arr = array('temp' => $temp, 'cityname' => $cityname, 'weatherIcon' => $weatherIcon, 'main' => $main, 'date' => $date);

if(isset($_POST['main']) && !empty($_POST['temp']) && gettype($_POST['main']=='string')) 
    {
        $query = mysqli_query($mysqli_connection, "INSERT into `bugs` (`ticket_author`, `ticket_link`, `ticket_status`, `ticket_message`) VALUES('$name', '$link','$status', '$desc')");;
    }

?>
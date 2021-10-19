
<?php // login.php

//Get Heroku ClearDB connection information

$cleardb_server   = 'eu-cdbr-west-01.cleardb.com';
$cleardb_username = 'b9f98d93d18d75';
$cleardb_password = '1d492db2';
$cleardb_db       = 'heroku_c4d90d6906e1eab';


$active_group = 'default';
$query_builder = TRUE;



$conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db );

?>

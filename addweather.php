<?php 

//print_r($_POST);


/// DO SOME STUFF HERE WITH SQL

// .....

/// END


// RETURN SOME JSON BACK TO AJAX CALL
$arr = array('name' => 'peter', 'cityname' => $cityname, 'weatherIcon' => $weatherIcon, 'main' => $main, 'e' => 5);

// ****ANYTHING*** you echo will go back to AJAX. So 100% make sure its JSON
echo json_encode($arr);

?>

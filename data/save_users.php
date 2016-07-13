<?php
	 $data = $_POST;

$inp = file_get_contents('users.json');
$tempArray = json_decode($inp);
array_push($tempArray, $data);
$jsonData = json_encode($tempArray);
file_put_contents('users.json', $jsonData);

 ?>
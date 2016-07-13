<?php

	$logged =false;

	 $json = file_get_contents("users.json");
	 $array = json_decode($json);
	$user=json_decode(file_get_contents('php://input')); //get user from json headers

	for($i=0;$i<count($array);$i++)
	{
		if($user-> name == $array[$i]-> username && $user-> pass ==$array[$i]-> password)
		{
		session_start();
		$_SESSION['uid']=uniqid('ang_');
		print $_SESSION['uid'];
		$logged =true;
		}
	}
	if(!$logged) print "error1";













 ?>
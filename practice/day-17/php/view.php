<?php
	// require_once 'Example.php';
	// $x=new Example();


	// echo $x->name;
	// echo '<br/>';   //php's object= ->
	// echo $x->city;
	// echo '<br/>';
	// echo $x->country;
	// echo '<br/>';
	// $x->addition();
	// echo '<br/>';
	// $x->subtraction();
	// echo '<br/>';
	// $x->division();

	// echo $x->mobile;
	// echo '<br/>';
	// $x->Hello();


	// *types of access modifier:
	// 1.public(all can access)
	// 2.private(only me can access)
	// 3.protected(me and my family can access)
	// 4.static


	// require_once 'Example.php';
	// $x=new Example();

	//echo $x->name;
	//echo $x->city;   //error=can't access protetced property
	//echo $x->country;  //error=can't access private property

	//$x->addition();
	//$x->subtraction();  //error=can't access protetced method
	//$x->division();     //error=can't access private method


	// *by using access modifier,can secure property and methods,this process is called encapsulation

	// *$this--->is called own class object


	// require_once 'Example.php';
	// $x=new Example();

	//$x->addition();

   /*magic mathodes(start with double underscore)(no need to call,when class's object being created,magic methods executed automatically)(they are public always)(built-in methods)(works like constructor):
	like: __call(),__clon(),__construct(),__debugInfo(),__destruct(),__get(),__invoke(),__isset(),__set(),__sleep(),__toString()   */



	// require_once 'Example.php';
	// $name='Ariyan Khan';
	// $x=new Example($name);     //note: constructor=while making constructor,the name of constructor should be same name as class.And while creating the object of the class,can pass parameter through object to the constructor.

	// $x->addition();
	//$x->subtraction();




	require_once 'Demo.php';
	$x=new Demo();

	$x->newOne();
	$x->newTwo();


?>
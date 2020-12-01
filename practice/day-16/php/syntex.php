<?php
	//$data=[];
	//$data=new Array();
	//$data=Array();
	//$data[0]=05;
	//echo $data[0];

	// $data[1]=10;
	// $data[2]=20;
	// $data[3]=30;
	// $data[4]=40;
	// $data['name']='Ariyan Khan';
	// $data['city']='Sylhet';
	// $data['Country']='Bangladesh';

	
	// echo $data[3];
	// echo "</br>";
	// echo $data['name'];
	// echo "</br>";
	// echo $data['city'];
	// echo "</br>";
	// echo $data['Country'];


	// $data=[10,20,30,'Ariyan Khan','Sylhet','Bangladesh'] //wrong Appraoch,printing by index not supported php

	// echo $data[1];


	$data=[

		'name'=>'Ariyan Khan',
		'city'=>'Sylhet',
		'country'=>'Bangladesh',
		'phone'=>'01643804383',
		'gender'=>'Male'

	];

	// foreach($data as $x){
	// 	echo $x.'</br>';
	// }

	// echo '<pre>';
	// print_r($data);


	// var_dump($data);

	// echo '<pre>';
	// var_dump($data);



	$data=[];

	$data[0][0]=10;
	$data[0][1]=20;
	$data[0][2]=30;

	$data[1][0]=40;
	$data[1][1]=50;
	$data[1][2]=60;


	$data[2][0]=70;
	$data[2][1]=80;
	$data[2][2]=90;

	$data[3][0]=100;
	$data[3][1]=120;
	$data[3][2]=130;

	// foreach($data as $value){
	// 	echo $value;
	// }

	// foreach($data as $value){
	// 	//echo $value[0];
	// 	echo $value[0].' '.$value[1].' '.$value[2].'</br>';
	// }


	// foreach($data as $value){
	// 	foreach($value as $v_value){
	// 		echo $v_value.' ';
	// 	}
	// 	echo '<br/>';
	// }




	function demo($firstName=null,$lastName=null){
		//$firstName='Sakib Khan';
		//$lastName='Epa Datto';
		$fullName=$firstName.' '.$lastName;
		//echo $fullName;
		return $fullName;
	}

	// echo '<br/>.................<br/>';
	// demo('Sakib');
	// echo '<br/>.................<br/>';
	// $res=demo('Apu','Bissaws');
	// echo 'full name is: '.$res;
	// echo '<br/>.................<br/>';
	// demo('Ariyan','Khan');
	// echo '<br/>.................<br/>';
	// $res2=demo('Epa','Datto');
	// echo "full name is :".$res2;
	// echo '<h1>'.$res2.'</h1>';
	// echo "<h6>$res2</h6>";
	// echo "<span>$res2</span>";



	class DemoTwo{    //cammelType=className
		public $name='Ariyan Khan';
		public $city='Sylhet';


		function addStart(){  //methodeName=cammelType
			echo "Hello World";
		}

		function subStart(){
			echo "<h3>".'Bye World'."</h3";
		}
	}


	//echo $name;
	//addStart();
	//$x=new DemoTwo;
	 $x=new DemoTwo();

	// echo $x->name;

	 $x->subStart();
	//$x->addStart();

?>
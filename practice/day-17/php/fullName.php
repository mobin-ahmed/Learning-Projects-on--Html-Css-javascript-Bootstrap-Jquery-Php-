<?php
	class FullName{
		function makeFullName($firstName,$lastName){
			$fullName=$firstName.' '.$lastName;
			return $fullName;
		}

		function myCalculator($data){
			echo "<pre>";
			print_r($data);

			$z=$data['btn'];

			switch ($z){
				case '+':
					$y=$data['first_number']+$data['last_number'];
					break;
				case '-':
					$y=$data['first_number']-$data['last_number'];
					break;
				case '*':
					$y=$data['first_number']*$data['last_number'];
					break;
				case '/':
					$y=$data['first_number']/$data['last_number'];
					break;
				case '%':
					$y=$data['first_number']%$data['last_number'];
					break;
			}
			return $y;
		}
	}
?>
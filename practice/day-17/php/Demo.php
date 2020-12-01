<?php

	//inheritance=stand in one class,while can access the properties and methods of other class.For this should use keyword extends(like--->class Demo extends Example{}).class before extends is called child-class & class after extends is called parent-class

	
	require_once 'Example.php';

	class Demo extends Example{
		public $age=22;
		protected $location='Farmgate';
		private $mobile='01643804383';

		public function newOne(){
			//echo 'in new one';
			$this->subtraction();  //public,protected(access modifier)-->can access,inheritance process only 
		}

		public function newTwo(){
			//echo 'in new two';
			echo $this->addition();
		}

		public function newThree(){
			echo 'in new three';
		}
	}
?>
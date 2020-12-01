<?php
	// class Example{
	// 	public $name='Mobin';
	// 	public $city='Sylhet';
	// 	public $country='Bangladesh';
	// 	function addition(){
	// 		echo 'in addition';
	// 	}
	// 	function subtraction(){
	// 		echo 'in subtraction';
	// 	}
	// 	function division(){
	// 		echo 'in division';
	// 	}
	// }

	
	// class Example{
	// 	public $name='Mobin';
	// 	protected $city='Sylhet';
	// 	private $country='Bangladesh';
	// 	public function addition(){
	// 		echo 'in addition';
	// 	}
	// 	protected function subtraction(){
	// 		echo 'in subtraction';
	// 	}
	// 	private function division(){
	// 		echo 'in division';
	// 	}
	// }



	//note:in class first should write properties then methods(this is good practice)



	// class Example{
	// 	public $name='Mobin';
	// 	protected $city='Sylhet';
	// 	private $country='Bangladesh';
	// 	public function addition(){
	// 		echo 'in addition';
	// 		echo "<br/>";
	// 		$this->division();
	// 		echo "<br/>";
	// 		echo $this->country;
	// 	}
	// 	protected function subtraction(){
	// 		echo 'in subtraction';
	// 	}
	// 	private function division(){
	// 		echo 'in division';
	// 	}
	// }



	// class Example{
	// 	public $name='Mobin';
	// 	protected $city='Sylhet';
	// 	private $country='Bangladesh';
	// 	//public $value;
	// 	private $value;

	// 	public function __construct($data){
	// 		//echo 'in construct';
	// 		//echo $data;
	// 		$this->value=$data;
	// 	}

	// 	public function addition(){
	// 		//echo 'in addition';
	// 		echo $this->value;
	// 	}
	// 	protected function subtraction(){
	// 		//echo 'in subtraction';
	// 		//echo $this->value;
	// 	}
	// 	private function division(){
	// 		echo 'in division';
	// 	}
	// }



	class Example{
		public $name='Mobin';
		protected $city='Sylhet';
		private $country='Bangladesh';
		//public $value;
		private $value;

		public function __construct(){
			//echo 'in construct';
			//echo $data;
			//$this->value=$data;
		}

		public function addition(){
			//echo 'in addition';
			//echo $this->value;
			echo "in addition";
		}
		protected function subtraction(){
			//echo 'in subtraction';
			//echo $this->value;
			echo 'in subtraction';
		}
		private function division(){
			echo 'in division';
		}
	}
?>
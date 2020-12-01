<?php
	class Demo{
		public function demo(){
			if(isset($_POST['btn'])){
				$start=$_POST['first_number'];
				$end=$_POST['last_number'];
				$choice=$_POST['check'];

				$res='';

				if($start<$end){
					for($i=$start;$i<=$end;$i++){
					if($i%2!=0 && $choice=='Odd'){
						$res.=$i.' ';
					}
					else if($i%2==0 && $choice=='Even'){
						$res.=$i.' ';
					}
				}
				return $res;
				}
				else{
					for($i=$start;$i>=$end;$i--){
					if($i%2!=0 && $choice=='Odd'){
						$res.=$i.' ';
					}
					else if($i%2==0 && $choice=='Even'){
						$res.=$i.' ';
					}
				}
				return $res;
				}
			}
		}
	}
?>
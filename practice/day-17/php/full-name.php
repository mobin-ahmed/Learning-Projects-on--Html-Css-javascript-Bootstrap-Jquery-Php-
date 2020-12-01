<?php
	// echo "<pre>";
	// print_r($_POST);

    //echo $_POST['first_name'];

	// $firsName=$_POST['first_name'];
	// $lastName=$_POST['l_n'];
	// $fullName=$firsName.' '.$lastName;
	// echo $fullName;

	//echo isset($x);
	// $x=88;
	// echo isset($x);

	// if(isset($_POST['btn'])){
	// 	echo "Hello";
	// }
	// else{
	// 	echo "Hai";
	// }


	// if(isset($_POST['btn'])){
	// 	$firsName=$_POST['first_name'];
	// 	$lastName=$_POST['l_n'];
	// 	$fullName=$firsName.' '.$lastName;
	// 	echo $fullName;
	// }


	$y='';

	if(isset($_POST['btn'])){
		require_once 'FullName.php';
		$x=new FullName();

		$y=$x->makeFullName($_POST['first_name'],$_POST['l_n']);

	}
?>
<form action="" method="post">  <!-- php's super global-array=8($-COOKIE,$_ENV,$_FILES,$_GET,$_POST,$_REQUEST,$_SERVER,$_SESSION,$_GET)
								post=super global-array post(data send)
								get=super global-array get(data send) -->
	<table>
		<tr>
			<th>First Name</th>
			<td><input type="text" name="first_name"></td>
		</tr>
		<tr>
			<th>Last Name</th>
			<td><input type="text" name="l_n"></td>
		</tr>
		<tr>
			<th>Full Name</th>
			<td><input type="text" name="full_name" value="<?php echo $y; ?>"></td>
		</tr>
		<tr>
			<th></th>
			<td><input type="submit" name="btn" value="SubmiT"></td>
		</tr>
	</table>
</form>
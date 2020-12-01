<?php
	$res='';
	require_once 'Demo.php';
	$x=new Demo();
	$res=$x->demo();
?>

<form action="" method="post">
	<table border="1px solid" bgcolor="orange" style="border-color: green;">
		<tr>
			<th>First Number</th>
			<td><input type="text" name="first_number" value="<?php
				if(isset($_POST['btn'])){
					echo $_POST['first_number'];
				}
			?>"></td>
		</tr>

		<tr>
			<th>Last Number</th>
			<td><input type="text" name="last_number" value="<?php
				if(isset($_POST['btn'])){
					echo $_POST['last_number'];
				}
			?>"></td>
		</tr>

		<tr>
			<th></th>
			<td>
				<input type="radio" name="check" value="Odd">ODD
				<input type="radio" name="check" value="Even">EVEN
			</td>
		</tr>

		<tr>
			<th>Result</th>
			<td>
				<textarea rows="5" cols="25">
					<?php echo $res; ?>
				</textarea>
			</td>
		</tr>

		<tr>
			<th></th>
			<td><input type="submit" name="btn" value="SubmiT"></td>
		</tr>
	</table>
</form>
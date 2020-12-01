<?php
	$y='';

	if(isset($_POST['btn'])){
		require_once 'fullName.php';
		$x=new FullName();
		$y=$x->myCalculator($_POST);
	}
?>


<form action="" method="post">
	<table>
		<tr>
			<th>First Number</th>
			<td><input type="text" name="first_number" value="<?php if(isset($_POST['btn'])){
					echo $_POST['first_number'];
				} ?>"></td>
		</tr>
		<tr>
			<th>Last Number</th>
			<td><input type="text" name="last_number" value="<?php if(isset($_POST['btn'])){
					echo $_POST['last_number'];
				} ?>"></td>
		</tr>
		<tr>
			<th>Result</th>
			<td><input type="text" name="result" value="<?php echo $y; ?>"></td>
		</tr>
		<tr>
			<th></th>
			<td>
				<input type="submit" name="btn" value="+">
				<input type="submit" name="btn" value="-">
				<input type="submit" name="btn" value="*">
				<input type="submit" name="btn" value="/">
				<input type="submit" name="btn" value="%">
			</td>
		</tr>
	</table>
</form>
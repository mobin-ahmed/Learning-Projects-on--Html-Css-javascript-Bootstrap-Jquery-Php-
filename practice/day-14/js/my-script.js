// $('#registrationForm').submit(function(){
// 	//alert('ok');
// 	//return false;
// 	return true;
// });


function checkFirstName(){
	var firstNameLength=$('#firstName').val().length;
	if(firstNameLength>=6 && firstNameLength<=15){
		$('#firstNameError').text('');
		return true;
	}
	else{
		$('#firstNameError').text('charecter should be in range of 6 to 15');
		return false;
	}
}



$('#firstName').click(function(){
	//alert('ok');
	//$('#firstNameError').text('charecter should be in range of 6 to 15');
	// var firstNameLength=$(this).val().length;
	// if(firstNameLength>=6 && firstNameLength<=15){
	// 	$('#firstNameError').text('');
	// }
	// else{
	// 	$('#firstNameError').text('charecter should be in range of 6 to 15');
	// }
	checkFirstName();	
});

$('#firstName').blur(function(){
	//$('#firstNameError').text('');
	// var firstNameLength=$(this).val().length;
	// if(firstNameLength>=6 && firstNameLength<=15){
	// 	$('#firstNameError').text('');
	// }
	// else{
	// 	$('#firstNameError').text('charecter should be in range of 6 to 15');
	// }
	checkFirstName();
});

$('#firstName').keyup(function(){
	// var firstNameLength=$(this).val().length;
	// if(firstNameLength>=6 && firstNameLength<=15){
	// 	$('#firstNameError').text('');
	// }
	// else{
	// 	$('#firstNameError').text('charecter should be in range of 6 to 15');
	// }
	checkFirstName();
});





function checkLastName(){
	var lastNameLegnth=$('#lastName').val().length;
	if(lastNameLegnth>=6 && lastNameLegnth<=15){
		$('#lastNameError').text('');
		return true;
	}
	else{
		$('#lastNameError').text('charecter should be in range of 6 to 15');
		return false;
	}
}

$('#lastName').click(function(){
	checkLastName();
});

$('#lastName').blur(function(){
	checkLastName();
});

$('#lastName').keyup(function(){
	checkLastName();
});


function checkEmailAddress(){
	var pattern=new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	if(pattern.test($('#emailAddress').val())){
		$('#emailAddressError').text('');
		return true;
	}
	else{
		$('#emailAddressError').text('email address is invalid');
		return false;
	}
}


$('#emailAddress').blur(function(){
	checkEmailAddress();
});

$('#emailAddress').keyup(function(){
	checkEmailAddress();
});


function checkPassword(){
	var passwordLength=$('#ps').val().length;
	if(passwordLength>=8 && passwordLength<=20){
		$('#passwordError').text('');
		return true;
	}
	else{
		$('#passwordError').text('password length should be in range of 8 to 20 character');
		return false;
	}
}


$('#ps').blur(function(){
	checkPassword();
});

$('#ps').keyup(function(){
	checkPassword();
});


function ccp(){
	var x=$('#ps').val();
	var y=$('#confirmPassword').val();
	if(x==y){
		$('#confirmPasswordError').text('');
		return true;
	}
	else{
		$('#confirmPasswordError').text('password not matched');
		return false;
	}
}



$('#confirmPassword').keyup(function(){
	ccp();
});

$('#confirmPassword').blur(function(){
	ccp();
});



function checkDistrictName(){
	var x=$('#districtName').val();
	//alert(x);
	if(x==""){
		//alert('test');
		$('#selectDistrictError').text('select any of the districts');
		return false;
	}
	else{
		//alert('hello');
		$('#selectDistrictError').text('');
		return true;
	}
}

// $('#districtName').click(function(){
// 	checkDistrictName();
// });

$('#districtName').change(function(){
	checkDistrictName();
});


$('#registrationForm').submit(function(){
	if(checkFirstName()==true && checkLastName()==true && checkEmailAddress()==true && checkPassword()==true && ccp()==true && checkDistrictName()==true){
		return true;
	}
	else{
		return false;
	}
});

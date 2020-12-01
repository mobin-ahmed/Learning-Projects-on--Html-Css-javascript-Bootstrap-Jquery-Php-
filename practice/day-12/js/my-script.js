$('#addBtn').click(function(){
	var firstNumberValue=Number($('#firstNumber').val());
	var lastNumberValue=Number($('#lastNumber').val());
	var result=firstNumberValue+lastNumberValue;
	$('#result').val(result);
});


$('#subBtn').click(function(){
	var firstNumberValue=Number($('#firstNumber').val());
	var lastNumberValue=Number($('#lastNumber').val());
	var result=firstNumberValue-lastNumberValue;
	$('#result').val(result);
});


$('#mulBtn').click(function(){
	var firstNumberValue=Number($('#firstNumber').val());
	var lastNumberValue=Number($('#lastNumber').val());
	var result=firstNumberValue*lastNumberValue;
	$('#result').val(result);
});


$('#divBtn').click(function(){
	var firstNumberValue=Number($('#firstNumber').val());
	var lastNumberValue=Number($('#lastNumber').val());
	var result=firstNumberValue/lastNumberValue;
	$('#result').val(result);
});


$('#modBtn').click(function(){
	var firstNumberValue=Number($('#firstNumber').val());
	var lastNumberValue=Number($('#lastNumber').val());
	var result=firstNumberValue%lastNumberValue;
	$('#result').val(result);
});






// $('#btn').click(function(){  //by using  eventhandler methode(click()),but not eventhandler attribute
// 	var firstNameValue=$('#firstName').val();
// 	var lastNameValue=$('#lastName').val();
// 	var fullName=firstNameValue+' '+lastNameValue;
// 	//alert(fullName);
// 	$('#fullName').val(fullName);
// });

//$('#h1').html('Hello Ariyan'); //set the value

//alert($('#h1').text());//or alert($('#h1').html());//by using jquery

//alert(document.getElementById('h1').innerHTML); //this is a row javascript








// var redBtnElement=document.getElementById('redBtn');
// redBtnElement.onclick=function(){
// 	var divOneElement=document.getElementById('divOne');
// 	//divOneElement.style.backgroundColor='red';
// 	divOneElement.className='class-one';
// };

// var geenBtnElement=document.getElementById('greenBtn');
// geenBtnElement.onmouseover=function(){
// 	var divOneElement=document.getElementById('divOne');
// 	divOneElement.className='class-two';
// }

// var defaultBtnElement=document.getElementById('defaultBtn');
// defaultBtnElement.onclick=function(){
// 	var divOneElement=document.getElementById('divOne');
// 	divOneElement.className='my-style';
// }








// var btnElement=document.getElementById('btn');
// btnElement.onclick=function(){
// 	//alert('Hello Ariyan');
// 	var x=document.getElementById('startingNumber').value;
// 	var y=document.getElementById('endingNumber').value;
// 	var temp='';
// 	for(i=x;i<=y;i++){
// 		//.write(i+' ');
// 		temp+=i;//string datatype
// 		document.getElementById('result').value=temp;
// 		temp+=' ';
// 	}
// 	//document.getElementById('result').value=temp;
// };
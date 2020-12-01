$('#subImage1').click(function(){
	//alert(text);
	var subImage1Value=$(this).attr('src');
	$('#mainImage').attr('src',subImage1Value);
});


$('#subImage2').click(function(){
	//alert(text);
	var subImage2Value=$(this).attr('src');
	$('#mainImage').attr('src',subImage2Value);
});


$('#subImage3').click(function(){
	//alert(text);
	var subImage3Value=$(this).attr('src');
	$('#mainImage').attr('src',subImage3Value);
});


$('#subImage4').click(function(){
	//alert(text);
	var subImage4Value=$(this).attr('src');
	$('#mainImage').attr('src',subImage4Value);
});






// document.getElementById('btn').onclick=function(){
// 	var newHeadingElement=document.createElement('h1'); //creating html element by javascript
// 	var newParagraphElement=document.createElement('P');

// 	newHeadingElement.innerHTML='This is a heading';
// 	newParagraphElement.innerHTML='This is an paragraph';

// 	document.getElementById('div').appendChild(newHeadingElement);
// 	document.getElementById('div').appendChild(newParagraphElement);
// }





// function createHeadingparagraphElement(){
// 	var newHeadingElement=document.createElement('h1'); //creating html element by javascript
// 	var newParagraphElement=document.createElement('P');

// 	newHeadingElement.innerHTML='This is a heading';
// 	newParagraphElement.innerHTML='This is an paragraph';

// 	document.getElementById('div').appendChild(newHeadingElement);
// 	document.getElementById('div').appendChild(newParagraphElement);
// }

// document.getElementById('btn').onclick=function(){
// 	createHeadingparagraphElement();
// }





// var newHeadingElement=document.createElement('h1'); //creating html element by javascript
// var newParagraphElement=document.createElement('P');

// newHeadingElement.innerHTML='This is a heading';
// newParagraphElement.innerHTML='This is an paragraph';

// document.getElementById('div').appendChild(newHeadingElement);
// document.getElementById('div').appendChild(newParagraphElement);









// $('#firstName').keyup(function(){
// 	//alert("hello");
// 	var firstNameValue=$('#firstName').val();
// 	//$('#res1').html(firstNameValue);
// 	$('#res1').text(firstNameValue);
// });


// $('#lastName').keyup(function(){
// 	var lastNameValue=$('#lastName').val();
// 	$('#res2').text(lastNameValue);
// });


// $('#lastName').blur(function(){
// 	var firstNameValue=$('#firstName').val();
// 	var lastNameValue=$('#lastName').val();
// 	$('#res3').text(firstNameValue+' '+lastNameValue);
// });
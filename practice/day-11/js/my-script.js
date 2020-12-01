// var btnElement=document.getElementById('btn');
// 		//alert(btnElement);
// 		btnElement.onclick=function(){
// 			//alert('Hi,Ariyan');
// 			var x=document.getElementById('firstName').value;
// 			//alert(x);
// 			var y=document.getElementById('lastName').value;
// 			var z=x+' '+y;
// 			//alert(z);
// 			document.getElementById('fullName').value=z;
// 		};//this is an anonymous function



var additionBtnElement=document.getElementById('addition');

	additionBtnElement.onclick=function(){
		var x=Number(document.getElementById('firstNumber').value);
		var y=Number(document.getElementById('secondNumber').value);
		var z=x+y;
		document.getElementById('result').value=z;
	};


var subBtnElement=document.getElementById('subtraction');

	subBtnElement.onclick=function(){
		var x=Number(document.getElementById('firstNumber').value);
		var y=Number(document.getElementById('secondNumber').value);
		var z=x-y;
		document.getElementById('result').value=z;
	};


var mulBtnElement=document.getElementById('multiplication');

	mulBtnElement.onclick=function(){
		var x=Number(document.getElementById('firstNumber').value);
		var y=Number(document.getElementById('secondNumber').value);
		var z=x*y;
		document.getElementById('result').value=z;
	};	


var divBtnElement=document.getElementById('division');

	divBtnElement.onclick=function(){
		var x=Number(document.getElementById('firstNumber').value);
		var y=Number(document.getElementById('secondNumber').value);
		var z=x/y;
		document.getElementById('result').value=z;
	};


var remainderBtnElement=document.getElementById('remainder');

	remainderBtnElement.onclick=function(){
		var x=Number(document.getElementById('firstNumber').value);
		var y=Number(document.getElementById('secondNumber').value);
		var z=x%y;
		document.getElementById('result').value=z;
	};







		//var paragraphElement=document.getElementsByTagName('p');
		//var paragraphElement=document.getElementsByTagName('a');

		// for(var key in paragraphElement){
		// 	document.write(paragraphElement[key].innerHTML+'<br/>');
		// }

		//document.write('<br/>'+paragraphElement[2].innerHTML);

		// for(var x=0;x<paragraphElement.length;x++){
		// 	document.write(paragraphElement[x].innerHTML+'<br/>');
		// }
		
		// var x;
		// x=10;
		// document.write(x);

		// work with array in java scirpt
		// var arr=new Array();
		// var arr2=Array();
		// var arr3=[];


		// var data=[];

		// data[0]=10;
		// data[1]=20;
		// data[2]=30;


		// data["name"]="Mobin";
		// data["city"]="Sylhet";
		// data["country"]="Bangladesh";

		// document.write(data[2]);
		// document.write(data[20]);
		// document.write(data["name"]);

		// for(var x in data){
		// 	//document.write(x+"<br/>");
		// 	document.write(data[x]+"<br/>");
		// }

		// //or defining

		// var data2=[10,20,30,40,50]; //numeric array
		// var data3=["Mobin","Sylhet","Bangladesh"]; // associative array

		// document.write(data3[1]);


		// var data=["Mobin","Dhaka","Bangladesh"];
		// document.write(data.length-1);


		// function demo(){
		// 	document.write("Hello Banladesh");
		// }
		// document.write('<br/>==========<br/>');
		// demo();
		// document.write('<br/>==========<br/>');
		// demo();
		// document.write('<br/>==========<br/>');
		// demo();


		// function demo(){
		// 	var firstName='Ariyan';
		// 	var lastName='Khan';
		// 	var fullName=firstName+' '+lastName;
		// 	document.write(fullName);
		// }
		// document.write('<br/>==========<br/>');
		// demo();
		// document.write('<br/>==========<br/>');
		// demo();
		// document.write('<br/>==========<br/>');
		// demo();


		// function demo(firstName,lastName){
		// 	var fullName=firstName+' '+lastName;
		// 	document.write(fullName);
		// }
		// document.write('<br/>==========<br/>');
		// demo('Ariyan','Khan');
		// document.write('<br/>==========<br/>');
		// demo('Palash','Barmon');
		// document.write('<br/>==========<br/>');
		// demo('Tayef','Rahman');
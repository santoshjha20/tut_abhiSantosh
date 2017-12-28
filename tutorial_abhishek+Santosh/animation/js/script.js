//var clickEvent =  document.getElementById('clickMeId');
 //var clickEvent =  document.getElementsByClassName('clickMeClass')[0];
var clickEvent =  document.getElementsByTagName('button')[0];

clickEvent.addEventListener('click', function(){
	alert("Hello World");	
})

 // var userInput = prompt("Please enter your age", '>0');
// var parseData = parseInt(userInput);
/*var parseData = parseFloat(userInput);

alert(parseData);
*/
// Arithematic Operator
/*var count = 0;
alert(count)
count++;
count++;
count++;
count = count*count;
count = count/2;
alert(count);*/


function AddTwoNumber(x,y){
	return x+y;
}

function SubTwoNumber(x,y){
	return x-y;
}


/*
var numberAdding = new AddTwoNumber();
numberAdding.x = 5;
numberAdding.y = 2;*/
console.log(AddTwoNumber(6,2))
var fare = 2.50;
var input;
var button = document.getElementById('milesEnter');

button.onclick = function(){calcFaire();};

function calcFaire()
{
	var value = document.getElementById('miles-wanted').value;
	var cost = fare * value;
	
	//clear the miles entered
	value.value = "";
	
	//input cost to the input for price
	document.getElementById('cost').value = "$" + cost;
	
}
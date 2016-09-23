$(document).ready(function() {
	var defaultMessage = "Click for some love :";
	var phrase = [
		"Tu es la plus belle aujourd'hui.",
		"Je me meurs sans toi.",
		"Tu es le soleil de ma vie.",
		"Tu es belle.",
		"Tu as toujours raison.",
		"Sans toi la vie n'a pas de sens."
	];

	var TextRandom = function(array){
		var rand = Math.floor(Math.random()* array.length)  ;
		return array[rand];
	}
	
	

$('#love').append(defaultMessage);	
$('#loveButton').click(function() {
		$('#love').empty();
		$('#love').append(TextRandom(phrase));
	
 });
	
});
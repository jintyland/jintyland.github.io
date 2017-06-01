$(document).ready(function () {

	$('#myForm').submit(function(event){
		event.preventDefault();

		$('body').append('<p>' + $('#name-input').val() + '</p>');
	});

})

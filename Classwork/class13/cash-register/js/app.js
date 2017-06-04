// User flow:
// 1: user enters numerical value into #newEntry
// 2: user pushes enter key (submits the form), the new line is appended to the <tbody id="entries">
// 3: #total is updated to reflect the sum of all the #entries
//
// Instructions:
// 1: Add a .submit event to the form; use an anonymous function to handle the sumbit
// Inside the anonymous function:
// 2: Remeber to prevent the default action on the form!
// 3: Create a variable to store the user input from #newEntry
// 4: Remember to call parseFloat() on this variable! It needs to be a number.
// 5: Append a new <tr></tr> to the <tbody id="entries"> containing two <td>'s, one of which contains the new variable: <tr><td></td><td>NEW VALUE</td></tr>
// 6: Figure out a way to update the number in #total (Hint: look back at the calculator box example)
// 7: Empty the input in #newEntry (clear it out)

$(document).ready(function () {
	var total = 0;

	$('#entry').submit(function(event){
		event.preventDefault();
		var info = parseFloat($('#newEntry').val());
		$('#entries').append('<tr><td><td>' + info + '</td></td></tr>');

		calculate(info);

		function calculate(info) {
		total + total + info;
		$('#total').html('$' + total);
	}

		$('#newEntry').val('');

	})	
	
			


})

// var newTotal = $('#new-value').html();
// 		newTotal = parseInt(newTotal);
// 		$('#total').append(newTotal + '#entry');



// document.getElementById('add').onclick = addToTotal;

// function addToTotal() {
//   var currentTotal = document.getElementById('total').innerHTML.replace('$',''),
//       currentTotal = parseFloat(currentTotal),
//       addedValue = document.getElementById('newEntry').value.replace('$',''),
//       addedValue = parseFloat(addedValue);
// 	  var newValue = currentTotal + addedValue;
//   	document.getElementById('total').innerHTML = '$' + newValue }
  


		
		// $('#entry').submit(function (){
		// 	var total = 0
		// 	var finalAmount = +$('#newEntry').val();
		// 	$('tr').append('<td>$' + finalAmount + '</li>');
		// 	total = total + amount;
		// 	$('#total').html(total);
		// 	$('#newEntry').val('');
		// 	return false;
		// })
	// })

		
	


// 	
// 	};
// };
// )
	
	// var newTotal = $('#new-value').append('')
		
		

// 		
// 	})

// function appendItem(info){
// 		$('#total').html(info).append('#total');
	
// 	}


// })


// $(document).ready(function () {

// 	$('#myForm').submit(function(event){
// 		event.preventDefault();

// 		
// 	});

// })

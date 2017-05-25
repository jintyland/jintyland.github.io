$(document).ready(function(){


  $('#a10').click(add10)
  $('#a20').click(add20)
  $('#a30').click(add30)
  $('#red').click(turnred)
  $('#blue').click(turnblue)
  $('#n10').click(less10)
  $('#n20').click(less20)
  $('#n30').click(less30)

    function add10() {
      var count = $('#out').html();
      count = parseInt(count);
      $('#a10').html(count + 10);
    }

})
// var newCount = $('#a10').val();


      
      
//       console.log(add10);	
//     }

  
//  $('#app').click(maths);

//  function maths() {
//  	$('#a10').val('#app + 10');
//  	$('#a20').val('#app + 20');
//  	$('#a30').val('#app + 30');
 
//  // console.log('a10, a20, a30')
//  }  
	

// })





// 	$('#out').val(0)  
// // console.log(out)
// 	$('#a10').click(add10)
// 	function add10(){
// 		var add10 = $('#a10').val('#out + 10')
	



// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()

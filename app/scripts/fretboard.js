// function build() {

// 	//Builds Array of notes in each scale (represented by numbers 1-12)
// 	var keys = [];
// 	$('.controls fieldset').each(function(x,el){
	
// 		//Get root note and scale type from key fieldsets
// 		var start = parseInt($(this).find('.root').val());
// 		var selScale = $(this).find('.scale').val()

// 		if (selScale == "major") { var scale = [2,2,1,2,2,2]; }
// 		else if (selScale == "minor") { var scale = [2,1,2,2,1,2]; }
// 		else if (selScale == "harmMin") { var scale = [2,1,2,2,1,3]; }
// 		else if (selScale == "penta") { var scale = [3,2,2,3,2]; }
	  	
// 	  	//Clear fretboard of existing content
// 		$('.output .fretboard tr').empty();
	 
// 		// Build Scale
// 		var scaleArray = [start];

// 		$.each(scale,function(k,v){	
// 			var entry = start + v;
// 			//Keep everything in the range 1-12
// 			if(entry > 12){entry = entry-12}
// 			scaleArray.push(entry);
// 			start = entry; 
// 		});

// 		keys.push(scaleArray);
// 	});
	
// 	frets();

// 	//Build fretboard visual representation
// 	function frets(){
// 	    $('.fretboard tr').each(function(){
	      
// 			//Offset for string tuning
// 			var strTuning = parseInt($(this).attr('id'));

// 	      	//Number frets according to note value, add frets
// 			for (var i = strTuning; i <= 24 + strTuning; i++){

// 				if (i<=12){var fretVal = i}
// 				else if (i>24) {var fretVal = i - 24}
// 				else{var fretVal = i - 12 }

// 				////Adds Frets w/proper classes
// 				//Neither key
// 				if( $.inArray( fretVal , keys[0] ) == -1 && $.inArray( fretVal , keys[1] ) == -1){
// 					$(this).append("<td class='"+fretVal+"'></td>");
// 				}
// 				//both
// 				else if( $.inArray( fretVal , keys[0] ) >= 0 && $.inArray( fretVal , keys[1] ) >= 0 ){
// 					$(this).append("<td class='"+fretVal+" fretted both'></td>");
// 				}
// 				//only 1
// 				else if($.inArray( fretVal , keys[0] ) >= 0 && $.inArray( fretVal , keys[1] ) == -1){
// 					$(this).append("<td class='"+fretVal+" fretted key1'></td>");
// 				}
// 				else if($.inArray( fretVal , keys[0] ) == -1 && $.inArray( fretVal , keys[1] ) >= 0){
// 					$(this).append("<td class='"+fretVal+" fretted key2'></td>");
// 				}
	        
// 			}

// 	    });

// 		//add class for root

// 		$('td').each(function(){
// 			if( $(this).hasClass(keys[0][0]) ){
// 				$(this).addClass('root1');
// 			}

// 			if( $(this).hasClass(keys[1][0]) ){
// 				$(this).addClass('root2');
// 			}
// 		});
		
// 	}

// }
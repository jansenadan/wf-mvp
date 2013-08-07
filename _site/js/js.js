var bands = [
		    	{
		    		value: 28, 
		    		start: 22.8, 
		    		stop: 24.8,
		    		cups: [
		    			{value: 'a', start: 29.1},
			    		{value: 'c', start: 29.9},
			    		{value: 'd', start: 30.7},
		    			{value: 'e', start: 31.5},
		    			{value: 'f', start: 32.3},
		    			{value: 'g', start: 33.1},
		    			{value: 'h', start: 33.9},
		    			{value: 'hh', start: 34.6},
		    			{value: 'j', start: 35.4},
		    			{value: 'k', start: 36.2},
		    			{value: 'l', start: 37},
		    			{value: 'm', start: 37.8},
		    			{value: 'n', start: 38.6, stop: 39.4}
			    	]
		    	},
		    	{
		    		value: 30,
		    		start: 24.8,
		    		stop: 26.8,
		    		cups: [
		    			{value: 'b', start: 31.1},
		    			{value: 'c', start: 31.9},
		    			{value: 'd', start: 32.7},
		    			{value: 'e', start: 33.5},
		    			{value: 'f', start: 34.3},
		    			{value: 'g', start: 35},
		    			{value: 'h', start: 35.8},
		    			{value: 'hh', start: 36.6},
		    			{value: 'j', start: 37.4},
		    			{value: 'k', start: 38.2},
		    			{value: 'l', start: 39},
		    			{value: 'm', start: 39.8, stop: 40.6}
		    		]
		    	},
		    	{
		    		value: 32,
		    		start: 26.8,
		    		stop: 28.7,
		    		cups: [
		    			{value: 'b', start: 33.1},
		    			{value: 'c', start: 33.9},
		    			{value: 'd', start: 34.6},
		    			{value: 'e', start: 35.4},
		    			{value: 'f', start: 36.2},
		    			{value: 'g', start: 37},
		    			{value: 'h', start: 37.8},
		    			{value: 'hh', start: 38.6},
		    			{value: 'j', start: 39.4},
		    			{value: 'k', start: 40.2},
		    			{value: 'l', start: 40.9, stop: 41.7}
		    		]
		    	},
		    	{
		    		value: 34,
		    		start: 28.7,
		    		stop: 30.7,
		    		cups: [
		    			{value: 'b', start: 34.6},
		    			{value: 'c', start: 35.8},
		    			{value: 'd', start: 36.6},
		    			{value: 'e', start: 37.4},
		    			{value: 'f', start: 38.2},
		    			{value: 'g', start: 39},
		    			{value: 'h', start: 39.8},
		    			{value: 'hh', start: 40.6},
		    			{value: 'j', start: 41.3},
		    			{value: 'k', start: 42.1, stop: 42.9}
		    		]
		    	},
		    	{
		    		value: 36,
		    		start: 30.7,
		    		stop: 32.7,
		    		cups: [
		    			{value: 'b', start: 37},
		    			{value: 'c', start: 37.8},
		    			{value: 'd', start: 38.6},
		    			{value: 'e', start: 39.4},
		    			{value: 'f', start: 40.2},
		    			{value: 'g', start: 40.9},
		    			{value: 'h', start: 41.7},
		    			{value: 'hh', start: 42.5},
		    			{value: 'j', start: 43.3, stop: 44.1}
		    		]
		    	},
		    	{
		    		value: 38,
		    		start: 32.7,
		    		stop: 34.6,
		    		cups: [
		    			{value: 'b', start: 39},
		    			{value: 'c', start: 39.8},
		    			{value: 'd', start: 40.6},
		    			{value: 'e', start: 41.3},
		    			{value: 'f', start: 42.1},
		    			{value: 'g', start: 42.9},
		    			{value: 'h', start: 43.7},
		    			{value: 'hh', start: 44.5, stop: 45.3}
		    		]
		    	},
		    	{
		    		value: 40,
		    		start: 34.6,
		    		stop: 36.2,
		    		cups: [
		    			{value: 'b', start: 40.9},
		    			{value: 'c', start: 41.7},
		    			{value: 'd', start: 42.5},
		    			{value: 'e', start: 43.3},
		    			{value: 'f', start: 44.1},
		    			{value: 'g', start: 44.9},
		    			{value: 'h', start: 45.7, stop: 46.5}
		    		]
		    	},
			];
// assert: bands is sorted by start.

//mySize recommends Comexim size based on underbust and overbust measurements in inches
var mySize = function(underbust, overbust) {
	for (var i = 0; i < bands.length; i++) {
		var band = bands[i]    		
		if (underbust >= band.start && underbust < band.stop) {	
			for (var j = 0; j < band.cups.length; j++){
				var cup = band.cups[j]
				if (j+1  === band.cups.length){
					var cupMax = cup.stop
				}
				else {
					var cupMax = band.cups[j+1].start
				};	
				if (overbust > cup.start && overbust <= cupMax){
					return {band: band.value, cup: cup.value}
				}
				else {
					noSize = {band:band.value, cup:null}
				};
			}
			return noSize
		}
		else {
			noSize = {band:null, cup:null}
		}			
	}
	return noSize
};



$(document).ready(function(){	
	//Shrink the bras gallery (change class on #mainGallery from .init to .onscroll)
	// var galleryHeight = $('#mainGallery').height();	
	// var scrollTop = $(window).scrollTop();	
		// if (true) {
		// 	$('#mainGallery').parent().removeClass('init').addClass('onscroll');
		// 	return true;
		// };
	$(window).scroll(function() {
		$('#mainGallery').hide();
	});

	//Generates size information table
	var table = $('<table></table>');
	for(var i=0; i < bands.length; i++){
		var band = bands[i];
    	var row = $('<tr></tr>');
		for (var j=0; j < band.cups.length; j++) {
			var cup = band.cups[j];
			//determine cup.stop
			if (j+1 === band.cups.length){
				var cupStop = cup.stop;
			}
			else {
				var cupStop = band.cups[j+1].start;
			};
			//append cell content with exact cup measurements in a tooltip
			var cell = $('<td data-size="' + band.value.toString() + cup.value.toString() + '">' +band.value.toString() +cup.value.toString().toUpperCase() +'<div class="tooltip"> underbust<br>' +band.start.toString() +'&mdash;' +band.stop.toString() + '<hr>overbust<br>' +cup.start.toString() +'&mdash;' +cupStop.toString() +'</div></td>');
			row.append(cell);
		};
		//alternate .odd css class in rows
    	if (i%2 === 0) {
    		row.addClass('odd')
    	};
    	table.append(row);
	};
	//Create size table
	$('#sizeTable').append(table);

	//Show a tooltip on table cell mouseover
	$("#sizeTable td").hover(
		function(){
			$(this).find(".tooltip").show();
		},
		function(){
			$(this).find(".tooltip").hide();	
		}
	);
	//Hide a tooltip on click
	$(".tooltip").click(function(){
		$(this).hide();
	});
	

	// Show size suggestion based on user's measurements input "Size Calculator"
	function sizeSuggestion(){
	var under = $('#underbust').slider( "value" );
	var over = $('#overbust').slider("value");
	return mySize(under,over)
	};
	$('#calculateSize').click(function(){
		//remove highlights from table cells, if any
		$("#sizeTable td").removeClass('highlighted');
		//hide all tooltips
		$('#sizeTable .tooltip').hide();
		//hide #sizeSuggestion
		$("#sizeSuggestion").hide();
		//calculate suggestion and display appropriate message
		var suggestion = sizeSuggestion();	
		if (sizeSuggestion().band === null) {
			var message = "Sorry, seems like we don't carry your size yet:(";
			$('#sizeSuggestion').html('' + message + '');
			$("#sizeSuggestion").show();
			return false;
		}; 
		if (sizeSuggestion().cup === null) {
			var message = "Your band is " +suggestion.band + ", but we don't carry your cup:(" 
			$('#sizeSuggestion').html('' + message + '');
			$("#sizeSuggestion").show();
			return false;
		}
		else {
			var message = "We recommend size " + suggestion.band.toString() + suggestion.cup.toString().toUpperCase() + ".";
			var aside = "No way I'm a " + suggestion.band.toString() + suggestion.cup.toString().toUpperCase() + '! <a href="#" id="sizeSuggestionPopup">Did you just say that?</a>'
			$('#sizeSuggestion').html('' + message + '<br><small id="sizeSuggestionAside"></small>');
			$('#sizeSuggestionAside').html('' + aside + '').show();
			$("#sizeSuggestion").fadeIn(500);
			//Highlight recommended size in a table
			var highlighted = suggestion.band.toString()+suggestion.cup.toString();
		    $('td[data-size="' + highlighted + '"]').addClass('highlighted');
		    $('td.highlighted').find(".tooltip").show();
			return false;
		};
	  });
	
	//Sliders for measurements
	$(function() {
		//underbust
	    $( "#underbust" ).slider({
	      value:28,
	      min: bands[0].start,
	      max: bands[bands.length-1].stop,
	      step: .1,
	      slide: function( event, ui ) {
	        $( "#underbustLabel" ).html( ui.value + '<span>in</span>');
	      }
	    });
	    $( "#underbustLabel" ).html($( "#underbust" ).slider( "value" ) + '<span>in</span>' );
	    //overbust
	    $( "#overbust" ).slider({
	      value:35,
	      min: bands[0].cups[0].start,
	      max: bands[bands.length -1].cups[bands.length -1].stop,
	      step: .1,
	      slide: function( event, ui ) {
	        $( "#overbustLabel" ).html( ui.value + '<span>in</span>');
	      }
	    });
	    $( "#overbustLabel" ).html($( "#overbust" ).slider( "value" ) + '<span>in</span>' );
	});
});
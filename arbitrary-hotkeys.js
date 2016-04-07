$(document).ready(function() {

    // Detects all keystrokes on the <div id = "keyStrokes">
	var keyStrokes = $("#keyStrokes").text().split("\n");
    //Cleans the HTML
    $("#keyStrokes").empty();

    var strokesMapping = [];
    // maps each stroke to an object
    for(var key in keyStrokes){
        //Splits on the ||
        var map = keyStrokes[key].split("||");
        //Maps to a nice object because it's more organized this way, though not needed.
        var combination = {
            key: jQuery.trim(map[0]),
            targetId: jQuery.trim(map[1])
        };
        //Eliminates undefined ones
        if(combination.key === void 0 || combination.key === '' ||
                combination.targetId === void 0 || combination.targetId === ''){
            continue;
        }
        //Adds to the avaliable ones.
        strokesMapping.push(combination);
    }
    console.log(strokesMapping);

	var typed = '';
	var typedDate = new Date();
		
	// React on keypress
	$(window).keypress(function(e) {
		// If we're in an input, we don't want to interpret the keypresses
		$('input').keypress(function(e) {
			e.stopPropagation();
		});
		var nowDate = new Date();
		var diffMs = (nowDate - typedDate);
		if (diffMs > 1000) {	
			typed = String.fromCharCode(e.which);
		} else {
			typed = typed + String.fromCharCode(e.which);
		}
		typedDate = new Date();
        strokesMapping.some(function (argument) {
            var index = typed.indexOf(argument.key);
            if(index >= 0){
                console.log($('#' + argument.targetId));
                //Clicks the HTML element. 
                $('#' + argument.targetId)[0].click();
            }
        });
	});

});

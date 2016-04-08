/**
	Arbitrary HotKeys
	=================

	jQuery plugin that allows you to set arbitrary hotkeys for your HTML page.

	Usage:

	* Link arbitrary-hotkeys.js in your HTML head:
	```
		<script type="text/javascript" src="js/arbitrary-hotkeys.js"></script>
	```

	* Create a div inside head with id="hotkeys" and list the hotkeys you want 
	in this form:
	`<hotkey key="your_hotkey" targetId="id_of_your_html_hyperlink"></hotkey>`
	Example:
	```
		<hotkey key="git" targetId="github"></hotkey>
		<hotkey key="goo" targetId="google"></hotkey>
	```

	* Enjoy!

	Copyright (C) 2016 Yuri Dias, Gustavo Moraes
	<https://github.com/Yuri-M-Dias>, <https://github.com/gustavosotnas>

	reusing code by Christian Brassat and Jukka Svahn:
	<https://github.com/crshd/startpage.rwrt/blob/master/js/script.js>

	Released under MIT license, see the LICENSE file.
	<https://github.com/Yuri-M-Dias/arbitrary-hotkeys>
*/

$(document.createElement('hotkey'));
$(document.createAttribute('key'));
$(document.createAttribute('targetId'));

$(document).ready(function() {

	// Detects all hotkeys on the <hotkey> tag
	var hotkeys = document.getElementsByTagName('hotkey');

	//Cleans the HTML
	$('hotkey').empty();

	var strokesMapping = [];

	// maps each stroke to an object
	for(var key in hotkeys){

		//Maps to a nice object because it's more organized this way, though not needed.
		var combination = {
			key: hotkeys[key].attributes[0].value,
			targetId: hotkeys[key].attributes[1].value
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
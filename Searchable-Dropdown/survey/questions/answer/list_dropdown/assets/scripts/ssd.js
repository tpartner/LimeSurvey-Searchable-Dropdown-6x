
/***** 
    JS for the Multiple-Choice-Dropdown question theme (LS version 6.0)
    Copyright (C) 2023 - Tony Partner (http://partnersurveys.com)
    Licensed MIT, GPL
    Version - 1.0
    Create date - 20/01/2023
*****/

console.trace = function() {};

function initSSD(sgq) {
	
	var sgqArr = sgq.split('X');
	var qID = sgqArr[2];
	var thisQuestion = $('#question'+qID);
	
	// Initiate select2
	$('select.form-control', thisQuestion).select2({
		theme: 'bootstrap-5'
	});
	
	// Fix bug - search field not focussed
	$(document).on('select2:open', function(e) {
		document.querySelector('.select2-search__field').focus();
	});
}

$(document).on('ready pjax:scriptcomplete',function(){
});
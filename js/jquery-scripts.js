// Значение инпута в текст
$(document).on("keyup", ".js-username-input", function(event){
	var input  = $(this);
	var text   = input.val();
	var textEl = $('.js-username');

	textEl.text(text);
});
// Значение инпута в текст
$(document).on("keyup", ".js-username-input", function(event){
	var input  = $(this);
	var text   = input.val();
	var textEl = $('.js-username');

	textEl.text(text);
});

// Счётчик
$(document).on("click", ".js-counter-btn", function(event){
	event.preventDefault();

	var textEl = $('.js-counter');
	var count  = Number(textEl.text());

	count++;

	textEl.text(count);
});
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

// Детальная товара
$(document).ready(function(){
	var productWrapper = $('.js-product');
	var product        = window.product;

	productWrapper.find('.js-name').text(product.name);
	productWrapper.find('.js-price').text(product.price);

	var propsWrap = productWrapper.find('.js-props');
	product.props.forEach(function(prop){
		var propHtml = '<li>' + prop.name + ': ' + prop.value + '</li>';
		propsWrap.append(propHtml);
	})
});

$(document).on("click", ".js-buy", function(event){
	event.preventDefault();

	var productName = $(this).parents('.js-product').find('.js-name').text();

	alert('Куплен товар"' + productName + '"');
});
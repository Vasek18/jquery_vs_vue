// Значение инпута в текст
var vm1 = new Vue({
	el  : '#vue-1',
	data: {
		username: 'Вася'
	}
});

// Счётчик
var vm2 = new Vue({
	el     : '#vue-2',
	data   : {
		count: 0
	},
	methods: {
		increaseCounter: function(){
			this.count = this.count + 1;
		}
	}
});

// Детальная товара
Vue.component('product', {
	props: {
		product: {}
	},

	template: '' +
	'<div class="product">' +
	'   <h3 class="name">{{ this.product.name }}</h3>' +
	'   <div class="price"><b>Цена: {{ this.product.price }}</b></div>' +
	'   <ul class="props">' +
	'      <li v-for="prop in this.product.props">{{ prop.name }}: {{ prop.value }}</li>' +
	'   </ul>' +
	'   <a href="#" class="btn btn-primary buy" @click.prevent="buy">Купить</a>' +
	'</div>',

	methods: {
		buy: function(){
			alert('Куплен товар"' + this.product.name + '"');
		}
	}
});

var vm3 = new Vue({
	el  : '#vue-3'
});
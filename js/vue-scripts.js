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
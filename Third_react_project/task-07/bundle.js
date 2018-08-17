new Vue({
	el: "#app",
	data: {
		argument_passed_by_us: null
	},
	methods: {
		increment: function(value) {
			this.argument_passed_by_us = value;
		}
	}
});

new Vue({
	el: "#app",
	data: {
		text: "Hello!"
	},
	methods: {
		sayHello: function() {
			this.text = "chandra";
			return this.text;
		}
	}
});

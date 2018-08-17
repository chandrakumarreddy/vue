new Vue({
	el: "#app",
	data: {
		text: "Hello!"
	},
	methods: {
		sayHello: function() {
			alert(this.text);
		}
	}
});

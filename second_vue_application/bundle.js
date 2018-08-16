new Vue({
	el: "#app",
	data: {
		text: "Hello World"
	},
	methods: {
		changeTracker: function(event) {
			this.text = event.target.value;
		}
	}
});

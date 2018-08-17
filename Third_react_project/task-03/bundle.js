new Vue({
	el: "#app",
	data: {
		text: "Hello!",
		link: "http://www.google.com"
	},
	methods: {
		send: function() {
			for (i = 0; i < 5; i++)
				window.open("http://www.google.com", "_blank");
		}
	}
});

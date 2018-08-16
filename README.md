Basic installation setup

    include <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script> in head tag and create script tag inside body having script tag with vue instance as below

    new Vue({
    	el:'#app',
    	data:{
    		text:""
    	}
    	})

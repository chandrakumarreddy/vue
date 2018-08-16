Basic installation setup

    include <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script> in head tag and create script tag inside body having script tag with vue instance as below

        new Vue({
        	el:'#app',
        	data:{
        		text:""
        	}
        	})

How to create methods

    	inside vue instance,initilise property called methods.
    		<div id="app">
    	<input type="text" v-on:input="changeTracker">
    	<p>{{text}}</p>
    	</div>
    	<script>
    	new Vue({
    		el:"#app",
    		data:{
    			text:"Hello World"
    		},
    		methods:{
    			changeTracker:function(event){
    				this.text=event.target.value;
    		}
    	}
    	})

Basic installation setup

    include <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script> in head tag and create script tag inside body having script tag with vue instance as below

        At the core of Vue.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax:

        <div id="app">
          {{ message }}
        </div>

        var app = new Vue({
          el: '#app',
          data: {
            message: 'Hello Vue!'
          }
        })

How to create methods

        inside vue instance,initilise property called methods.

        To let users interact with your app, we can use the v-on directive to attach event listeners that invoke methods on our Vue instances:

        <div id="app-5">
          <p>{{ message }}</p>
          <button v-on:click="reverseMessage">Reverse Message</button>
        </div>

        var app5 = new Vue({
          el: '#app-5',
          data: {
            message: 'Hello Vue.js!'
          },
          methods: {
            reverseMessage: function () {
              this.message = this.message.split('').reverse().join('')
            }
          }
        })

v-bind directive:-

                <p>{{text}}</p>
                <button v-on:click="send">Download</button>

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

v-once(render once) directive:-

            <p v-once>{{text}}</p>
            <p>{{sayHello()}}</p>

            new Vue({
                        el: "#app",
                        data: {
                            text: "Hello!"
                              },
                        methods: {
                           sayHello: function() {
                                this.text="chandra";
                                return this.text;
                            }
                }
            });

v-html directive :-

                <p>{{text}}</p>
                <p v-html="finishedLink"></p>

                new Vue({
                  el: "#app",
                  data: {
                    text: "chandra",
                    finishedLink: "<a href='http://nitrr.ac.in' target='_blank'>Nitrr</a>"
                  },
                  methods: {
                    sayHello: function() {
                      alert("Hello");
                    }
                  }
                });

v-on directive :-

        <p v-on:mouseover="changeCoordinates">coordniates {{x}} {{y}}</p>

            new Vue({
                  el: "#app",
                  data: {
                    x: 0,
                    y: 0
                  },
                  methods: {
                    changeCoordinates: function(event) {
                      this.x = event.clientX;
                      this.y = event.clientY;
                    }
                  }
                });
        

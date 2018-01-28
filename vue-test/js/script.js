var app = new Vue({
    el: '#app',
    data: {
        seen: true,
        message: "Now you see me",
        todos: [
            {text: 'Learn Java Script'},
            {text: 'Random Swag'},
            {text: 'Learn Vue'}
        ]
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: "Hello World!"
    }
})


Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})


var app3 = new Vue({
    el: '#app3',
    data: {
        groceryList: [
            {id: 0, text: 'Keyboard'},
            {id: 1, text: 'Tomatoes'},
            {id: 2, text: 'Potatoes'},
            {id: 3, text: 'Chicken'},
            {id: 4, text: 'Quorn'},
        ]
    }
})



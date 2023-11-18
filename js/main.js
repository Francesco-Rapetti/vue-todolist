const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: "Fare i compiti",
                    done: false
                }, {
                    text: "Fare la spesa",
                    done: false
                }, {
                    text: "Fare il bucato",
                    done: true
                }
            ],
            text: "",
        }

    },

    methods: {
        addTodo(value) {
            console.log(value)
            this.toDoList.push({
                text: value,
                done: false
            })
        },

        checkTodo(index) {
            this.toDoList[index].done = !this.toDoList[index].done;
        },

        removeTodo(index) {
            this.toDoList.splice(index, 1);
        }
    }
}).mount('#app');
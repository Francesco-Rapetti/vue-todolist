const { createApp } = Vue;
let glassHeight = 84;
const delay = ms => new Promise(res => setTimeout(res, ms));

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: "Fare i compiti",
                    done: false
                },
                {
                    text: "Fare i compiti",
                    done: false
                },
                {
                    text: "Fare i compiti",
                    done: false
                },
                {
                    text: "Fare i compiti",
                    done: false
                },
                {
                    text: "Fare i compiti",
                    done: false
                },
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
            animation: false,
        }

    },

    methods: {
        async addTodo(value) {
            if (!this.animation) {
                this.animation = true;
                glassHeight += 32;
                document.getElementById('glass').style = `height: ${glassHeight}px;`;
                this.text = '';
                this.toDoList.push({
                    text: value,
                    done: false
                })
            
                await delay(10);

                document.querySelector('.list:last-child').style.opacity = 1;

                await delay(500);
                
                this.animation = false;
            }
        },

        checkTodo(index) {
            this.toDoList[index].done = !this.toDoList[index].done;
        },

        async removeTodo(index) {
            const element = document.getElementById(index.toString());
            element.style.opacity = 0;
            
            await delay(500);
            
            element.style.transition = 'none';
            element.style.opacity = 1;
            this.toDoList.splice(index, 1);
            
            await delay(10);
            
            if (element) element.style.transition = 'all 0.5s ease-in-out';
            glassHeight -= 32;
            document.getElementById('glass').style = `height: ${glassHeight}px;`;
        }
    },

    mounted() {
        document.querySelectorAll('.list').forEach(element => element.style.opacity = 1);  
        glassHeight += (this.toDoList.length*32);
        document.getElementById('glass').style = `height: ${glassHeight}px;`;
    }
}).mount('#app');
Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        name: 'ToDoList',
        newTask: '',
        tasks: [
            {text: 'Dare da mangiare al cane',
             done: true,
            },

            {text: 'Fare aggiornamento a Windows',
             done: false,
            },

            {text: 'Fare la spesa',
             done: true,
            },

            {text: 'Collegarsi su Zoom per il meeting aziendale',
             done: false,
            },

            {text: 'Portare fuori la spazzatura',
             done: true,
            }
        ]
    },

    methods: {
        removeTask(i){
            this.tasks.splice(i, 1);
        },

        addTask(){
            this.tasks.push({text : this.newTask});
            this.newTask = '';
        }
    }
});
Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        name: 'todolist',
        newTask: '',
        tasks: [
            {text: 'Dare da mangiare al cane',
             done: false,
            },

            {text: 'Fare aggiornamento a Windows',
             done: false,
            },

            {text: 'Fare la spesa',
             done: false,
            },

            {text: 'Collegarsi su Zoom per il meeting aziendale',
             done: false,
            },

            {text: 'Portare fuori la spazzatura',
             done: false,
            }
        ]
    },

    methods: {
        removeTask(i){
            this.tasks.splice(i, 1);
        },

        addTask(){
            this.tasks.push({text : this.newTask, done: false});
            this.newTask = '';
        },

        toggleTask(task){
            task.done = !task.done 
            newTask.done = !newTask.done
        }
    }
});
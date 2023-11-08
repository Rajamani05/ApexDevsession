import { LightningElement, track } from 'lwc';

export default class ToDoList extends LightningElement {
    @track todoText = '';
    @track todos = [];

    handleTodoTextChange(event) {
        this.todoText = event.target.value;
    }

    addTodo() {
        if (this.todoText.trim() !== '') {
            this.todos.push({
                id: Date.now(),
                text: this.todoText,
                completed: false
            });
            this.todoText = '';
        }
    }

    handleTodoStatusChange(event) {
        const index = event.target.dataset.index;
        this.todos[index].completed = event.target.checked;
    }

    handleDeleteTodo(event) {
        const index = event.target.dataset.index;
        this.todos.splice(index, 1);
    }
}
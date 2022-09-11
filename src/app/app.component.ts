
import { Component } from '@angular/core';
import { Todo } from './Todo';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Todo-App';
    year:number = new Date().getFullYear();
    // todoString: any;
    // todo_list: Todo[];
   
    constructor() {    
        // this.todoString = localStorage.getItem("todos");
        // if (this.todoString == null) {
        //     this.todo_list = [];
        // }
        // else {
        //     this.todo_list = JSON.parse(this.todoString);
        // }

    }
    // addTodo(todo: Todo) {
    //     this.todo_list.push(todo)
    //     localStorage.setItem("todos", JSON.stringify(this.todo_list));
       
    // }
    // deleteTodo(todo: Todo) {
    //     const index = this.todo_list.indexOf(todo);
    //     this.todo_list.splice(index, 1);
    //     localStorage.setItem("todos", JSON.stringify(this.todo_list));
    // }
}

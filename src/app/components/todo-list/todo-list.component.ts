import { Todo } from './../../Todo';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    todoString: any;
    todo_list: Todo[];
    @Output() handleDelete: EventEmitter<Todo> = new EventEmitter();
    constructor() {
        this.todoString = localStorage.getItem("todos");
        if (this.todoString == null) {
            this.todo_list = [];
        }
        else {
            this.todo_list = JSON.parse(this.todoString);
        }
    }

    ngOnInit(): void {
    }
    todoDelete(todo: Todo) {
        const index = this.todo_list.indexOf(todo);
        this.todo_list.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(this.todo_list));
    }
}

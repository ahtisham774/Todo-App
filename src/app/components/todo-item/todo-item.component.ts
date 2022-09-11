import { Todo } from './../../Todo';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 @Input() todo : Todo;
 @Output() handleDelete : EventEmitter<Todo> = new EventEmitter();   
  constructor() {
        this.todo = {id:'',title:'',description:''};
   }

  ngOnInit(): void {
  }
  todoDelete(todo:Todo){
    this.handleDelete.emit(todo);
  }
}

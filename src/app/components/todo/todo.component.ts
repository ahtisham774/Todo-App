import { Router } from '@angular/router';
import { Todo } from './../../Todo';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { nanoid } from 'nanoid';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   title:string;
   description:string;  
   todoString: any;
   isShow : boolean = false;
   todo_list: Todo[];
   @Output() todoAdd :EventEmitter <Todo> = new EventEmitter();
  constructor(private router:Router) { 
    this.title = '';
    this.description = '';
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
  onSubmit(){
    const newTodo = {
        id:nanoid(),
        title :this.title,
        description:this.description
    }
    this.todo_list.push(newTodo)
    localStorage.setItem("todos", JSON.stringify(this.todo_list));
    this.isShow = true;
    setTimeout(() => {
        this.router.navigate(['/todos']); 
    },1500)
   
  }
}

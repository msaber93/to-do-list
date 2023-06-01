import { Component } from '@angular/core';
import { LocalstorgeService } from '../services/localstorge.service';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


export interface Todo {
  id: string;
  name: string;
  isDone: boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})



export class TodoComponent {
  cricleplus = faCirclePlus;
  todos : Todo[] = this.localSotrage.getLocalStorage('todos') || [];
  constructor(private localSotrage : LocalstorgeService , private routerTodo: Router) {

  }

  addTodo(task: any): void {
    this.todos.push({ id: this.uid(), name: task, isDone: false });
    this.localSotrage.setLocalStorage('todos', this.todos);
  }

  uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  removeItem(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.localSotrage.setLocalStorage('todos', this.todos);
  }

  updateValue(event: any, todoId: string) {
    this.todos = this.todos.map(todo => {
      if(todo.id === todoId) {
        todo.isDone = event.target.checked;
      }
      return todo
    })
    this.localSotrage.setLocalStorage('todos', this.todos);
  }

}

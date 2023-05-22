import { Component } from '@angular/core';
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

// export interface Todo {
//   id: string;
//   name: string;
//   isDone: boolean
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {

  title = 'to-do-project';
  // cricleplus = faCirclePlus;
  // todos : Todo[] = this.localSotrage.getLocalStorage('todos') || [];

  constructor() {}

  // addTodo(task: any): void {
  //   this.todos.push({ id: this.uid(), name: task, isDone: false });
  //   this.localSotrage.setLocalStorage('todos', this.todos);
  // }

  // uid() {
  //   return Date.now().toString(36) + Math.random().toString(36).substr(2);
  // }

  // removeItem(id: string) {
  //   this.todos = this.todos.filter((todo) => todo.id !== id);
  //   this.localSotrage.setLocalStorage('todos', this.todos);
  // }

  // updateValue(event: any, todoId: string) {
  //   this.todos = this.todos.map(todo => {
  //     if(todo.id === todoId) {
  //       console.log(todoId)
  //       todo.isDone = event.target.checked;
  //     }
  //     return todo
  //   })
  //   this.localSotrage.setLocalStorage('todos', this.todos);
  // }
}

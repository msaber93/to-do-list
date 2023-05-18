import { Component } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-project';
  cricleplus = faCirclePlus;
  todos: any[] = [];

  addTodo(task: any) {
    this.todos.push({ id: this.uid(), name: task, isDone: false });
    console.log(this.todos);
  }

  uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  removeItem(id: number) {
    this.todos = this.todos.filter((outPut) => outPut.id !== id);
  }

  updateValue(event: any, todoId: any) {
    this.todos = this.todos.map(todo => {
      if(todo.id === todoId) {
        console.log(todoId)
        todo.isDone = event.target.checked;
      }
      return todo
    })
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorgeService } from 'src/app/services/localstorge.service';

export interface Task {
  id: string;
  name: string;
  time: string;
  date: string;
  textarea: string
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private routerTask : Router, private localStorage : LocalstorgeService) {}
  tasks: Task[] = this.localStorage.getLocalStorageTask('task') || [];

  addTask(name: any, time: any, date: any, text: any) {
    this.tasks.push({
      id: this.uid(), name: name, time: time,
      date: date,
      textarea: text
    });
    this.localStorage.setLocalStorageTask('task', this.tasks);
  }


  removeTask(id: string) {
    this.tasks = this.tasks.filter((task)=> task.id !== id);
    this.localStorage.setLocalStorageTask('task', this.tasks);
  }

  uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  backTodo() {
    this.routerTask.navigate(['/todo']);
  }
}

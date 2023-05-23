import { Injectable } from '@angular/core';
import { Todo } from '../todo/todo.component';
import { Task } from '../component/task/task/task.component';

@Injectable({
  providedIn: 'root'
})

export class LocalstorgeService {

  constructor() {}
    // todo localstorge
    setLocalStorage(key: string, value : any) {
      window.localStorage.setItem(key , JSON.stringify(value));
    }

    // task localstroage
    setLocalStorageTask(key: string, value : any) {
      window.localStorage.setItem(key , JSON.stringify(value));
    }

    // todo localstoarge
    getLocalStorage(key: string): Todo[] {
      const storedTodos = window.localStorage.getItem(key)
      if (storedTodos) {
        return JSON.parse(storedTodos);
      }

      return [] ;

  }
     // task localstroage
    getLocalStorageTask (key: string): Task[] {
      const storedTodos = window.localStorage.getItem(key)
      if (storedTodos) {
        return JSON.parse(storedTodos);
      }

      return [] ;

  }
}






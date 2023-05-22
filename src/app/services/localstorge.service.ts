import { Injectable } from '@angular/core';
import { Todo } from '../todo/todo.component';


Injectable({
  providedIn: 'root'
})

export class LocalstorgeService {

  constructor() {}

    setLocalStorage(key: string, value : any) {
      window.localStorage.setItem(key , JSON.stringify(value));
    }


    getLocalStorage(key: string): Todo[] {
      const storedTodos = window.localStorage.getItem(key)
      if (storedTodos) {
        return JSON.parse(storedTodos);
      }

      return [] ;

  }
}






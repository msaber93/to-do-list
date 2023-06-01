import { Injectable } from '@angular/core';
import { LocalstorgeService } from 'src/app/services/localstorge.service';

export interface Task {
  id: string;
  name: string;
  time: string;
  date: string;
  textarea: string
}

@Injectable({
  providedIn: 'root'
})

export class TaskSharedService {

  constructor(private localStorage : LocalstorgeService) {}

  tasks: Task[] = this.localStorage.getLocalStorageTask('task') || [];

}

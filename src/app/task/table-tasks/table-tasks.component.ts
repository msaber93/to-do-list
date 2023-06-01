import { Component } from '@angular/core';
import { LocalstorgeService } from 'src/app/services/localstorge.service';
import { TaskSharedService } from '../task-shared.service';

@Component({
  selector: 'app-table-tasks',
  templateUrl: './table-tasks.component.html',
  styleUrls: ['./table-tasks.component.css']
})
export class TableTasksComponent {
constructor(private localStorage: LocalstorgeService, public taskSharedService : TaskSharedService) {}

removeTask(id: string) {
    this.taskSharedService.tasks = this.taskSharedService.tasks.filter((task)=> task.id !== id);
    this.localStorage.setLocalStorageTask('task', this.taskSharedService.tasks);
}

}
